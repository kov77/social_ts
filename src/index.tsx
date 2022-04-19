
import './index.css';
import store from "./redux/redux-store";

import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";


export const rerenderEntireTree = (state: any) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe((() => {
    const state = store.getState()
    rerenderEntireTree(state)
}))



