import React from 'react';
import ReactDOM from 'react-dom/client';
import Chosers from './Chosers';
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <div className="container">
            <div className="row">
                <div className="col">
                    <Chosers/>
                </div>
                <div className="col">

                </div>
            </div>
        </div>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
