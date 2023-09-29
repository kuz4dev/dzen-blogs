import { render } from "react-dom";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { ThemeProvider } from "app/providers/ThemeProvider";
import "shared/config/i18n/i18n";

render(
    <BrowserRouter>
        <Suspense fallback={'loading...'}>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </Suspense>
    </BrowserRouter>,
    document.getElementById('root')
);