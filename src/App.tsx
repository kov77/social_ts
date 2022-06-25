import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


const App = () => {

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <Sidebar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path='/profile/*' element={<ProfileContainer />}/>
                        <Route path='/dialogs/*' element={<DialogsContainer />}/>
                        <Route path='/users/*' element={<UsersContainer/>}/>
                        <Route path='/news/*' element={'News'}/>
                        <Route path='/music/*' element={'Music'}/>
                        <Route path='/settings/*' element={'Settings'}/>
                        <Route path='/login/*' element={<Login />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
