
import './index.css';
import store from "./redux/state";

import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()} store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)



