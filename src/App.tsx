import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";



const App = (props: any) => {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Sidebar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path='/profile/*' element={<Profile postData={props.store.getState().profilePage.postData} addPost={props.store.addPost.bind(props.store)} newPostText={props.store.getState().profilePage.newPostText} changPostText={props.store.changPostText.bind(props.store)}/>}/>
                        <Route path='/dialogs/*' element={<Dialogs dialogs={props.store.getState().dialogsPage.dialogs} messages={props.store.getState().dialogsPage.messages} addMessage={props.store.addMessage.bind(props.store)} changeDialogsText={props.store.changeDialogsText.bind(props.store)} messageText={props.store.getState().dialogsPage.messageText}/>}/>
                        <Route path='/news/*' element={'News'}/>
                        <Route path='/music/*' element={'Music'}/>
                        <Route path='/settings/*' element={'Settings'}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
