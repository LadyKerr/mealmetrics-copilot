const express = require('express');
const dotenv = require('dotenv').config();
const PORT = 8080

const app = express();

// enable body parser to accept json data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// add router to the server and name it openai
app.use('/openai', require('./router'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

