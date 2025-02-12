import React from 'react';
import ReactDOM from 'react-dom/client';
import 'assets/index.css';
import App from 'App/App';
import { Provider } from "react-redux";
import { DataContextProvider, store } from 'AppStore';
import { AppPathsProvider } from 'AppPaths';
import { UrlProvider } from "./AppStore";
import { AppTheme } from "./AppTheme";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render(
    <React.StrictMode>
        <Provider store={ store }>
            <AppPathsProvider>
                <UrlProvider>
                    <DataContextProvider>
                        <AppTheme>
                            <App/>
                        </AppTheme>
                    </DataContextProvider>
                </UrlProvider>
            </AppPathsProvider>
        </Provider>
    </React.StrictMode>
)
;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
