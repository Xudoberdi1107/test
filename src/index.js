import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/index';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import ModeProvider from "./context/mode/mode";
import {I18nextProvider} from "react-i18next";
import i18n from "i18next";
import { QueryClient, QueryClientProvider } from 'react-query';


const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient({});
root.render(
    <QueryClientProvider client={queryClient}>
    <React.StrictMode>
        <BrowserRouter>
            <I18nextProvider i18n={i18n}>
            <ModeProvider>
                <App/>
            </ModeProvider>
            </I18nextProvider>
        </BrowserRouter>
    </React.StrictMode>
    </QueryClientProvider>
);

