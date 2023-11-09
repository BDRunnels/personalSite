import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "@material-tailwind/react";

import App from "./App"

createRoot(document.getElementById('app'))
    .render(
        <React.StrictMode>
            <ThemeProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ThemeProvider>
        </React.StrictMode>
    );
