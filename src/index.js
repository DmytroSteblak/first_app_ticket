import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Global } from './styled/Global-styled';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={ store }>
                <Global/>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);