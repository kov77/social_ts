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
                        <Route path='/profile/*'

                               // postData={props.store.getState().profilePage.postData}
                               // newPostText={props.store.getState().profilePage.newPostText}
                               // dispatch={props.store.dispatch.bind(props.store)}
                               element={<Profile store={props.store}/>}/>
                        <Route path='/dialogs/*' element={<Dialogs dialogs={props.store.getState().dialogsPage.dialogs}
                                                                   messages={props.store.getState().dialogsPage.messages}
                                                                   dispatch={props.store.dispatch.bind(props.store)}
                                                                   messageText={props.store.getState().dialogsPage.messageText}/>}/>
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
