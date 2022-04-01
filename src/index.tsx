
import './index.css';
import state, {subscribe} from "./redux/state";

import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import {addMessage, addPost, changeDialogsText, changPostText} from "./redux/state";


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} changPostText={changPostText} addMessage={addMessage} changeDialogsText={changeDialogsText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree()

subscribe(rerenderEntireTree)



