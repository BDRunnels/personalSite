import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";

import { ThemeProvider } from "@material-tailwind/react";

import App from "./App"

createRoot(document.getElementById('app'))
    .render(
            <ThemeProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ThemeProvider>
    );
