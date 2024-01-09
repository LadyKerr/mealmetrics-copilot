/*
Create a component with the following specifications:

1. the component must split the received string data at /n/n or /n and return a Typography component for each string
2. the component must set a unique key for each Typography component
3. the component must return a div with the Typography components and return null if the data is not a string
*/

import React from "react";
import { Typography, Paper } from "@material-ui/core";

/**
 * Renders the nutrition facts component.
 * @param {Object} props - The component props.
 * @param {string} props.data - The nutrition facts data as a string.
 * @returns {JSX.Element|null} The rendered nutrition facts component.
 */
function Nutritionfacts({ data }) {
    if (typeof data !== "string") {
        return null;
    }
    
    const nutritionFacts = data.split(/\n\n|\n/);
    
    return (
        <>
        <Paper elevation={24} style={{ padding: "20px" }}>
            {nutritionFacts.map((fact, index) => (
                <Typography key={index}>{fact}</Typography>
            ))}
        </Paper>
        </>
    );
}

export default Nutritionfacts;