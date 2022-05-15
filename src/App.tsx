import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = (props: any) => {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Sidebar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path='/profile/*' element={<ProfileContainer store={props.store}/>}/>
                        <Route path='/dialogs/*' element={<DialogsContainer store={props.store}/>}/>
                        <Route path='/users/*' element={<UsersContainer/>}/>
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
