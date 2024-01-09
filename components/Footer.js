/*
Create a footer component with the following specifications:

1. The footer must be fixed at the bottom of the page
2. Use the Paper and Typography components from Material UI
3. The footer text must say "Made with ❤️ by LadyKerr & GitHub Copilot"
4. The text "GitHub Copilot" must be a link to https://copilot.github.com/ that opens in a new tab with alt text “GitHub copilot"
*/

import React from "react";
import { Paper, Typography } from "@material-ui/core";

// create a footer component that inlcudes . . . 
function Footer() {
    return (
        <Paper
        style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "1rem",
            textAlign: "center",
        }}
        elevation={3}
        >
        <Typography variant="body1">
            Made with ❤️ by LadyKerr & <a href="https://copilot.github.com/" target="_blank" rel="noopener noreferrer">GitHub Copilot</a>
        </Typography>
        </Paper>
    );
    }

export default Footer;