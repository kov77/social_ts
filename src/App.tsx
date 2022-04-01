import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {addMessage, changeDialogsText} from "./redux/state";



const App = (props: any) => {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Sidebar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path='/profile/*' element={<Profile postData={props.state.profilePage.postData} addPost={props.addPost} newPostText={props.state.profilePage.newPostText} changPostText={props.changPostText}/>}/>
                        <Route path='/dialogs/*' element={<Dialogs dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages} addMessage={props.addMessage} changeDialogsText={props.changeDialogsText} messageText={props.state.dialogsPage.messageText}/>}/>
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
