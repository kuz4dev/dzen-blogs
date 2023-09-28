import { render } from "react-dom";
import { Counter } from "./components/Counter";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import ThemeProvider from "./theme/ThemeProvider";

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