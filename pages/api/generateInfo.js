const { Configuration, OpenAIApi } = require('openai');
// import json data from prompt.json file
const { recipePrompt }  = require('./prompt.json');

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateInfo = async (req, res) => {
    if (!process.env.OPENAI_API_KEY) {
        return res.status(500).json({
            success: false,
            errorMessage: "Missing OpenAI API key",
        });
    }
    
    const { recipe } = req.body;

    try {
       const completion = await openai.createCompletion({
        model: "gpt-3.5-turbo-instruct",
        prompt: `${recipePrompt}${recipe}`,
        max_tokens: 200,
        temperature: 0.5,
        n: 1,
       });

       // get response from openai
         const response = completion.data.choices[0].text;
         res.setHeader("Access-Control-Allow-Origin", "*")
       
        res.status(200).json({
            success: true,
            data: response,
        });
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
          } else {
            console.log(error.message);
          }
          
        res.status(500).json({
            success: false,
            errorMessage: "There was an error getting the nutritional information. Try again",
            error: error
        })
    }
};

module.exports = { generateInfo };