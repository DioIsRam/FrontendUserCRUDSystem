import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomeView from '../views/HomeView/HomeView';
import NoPage from '../components/NoPage/NoPage';
import UserListView from '../views/UserListView/UserLIstView';
import "../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css"
import UserCreateView from '../views/UserCreateView/UserCreateView';
import UserEditView from '../views/UserEditView/UserEditView';
import UserDetailsView from '../views/User/UserDetailsView/UserDetailsView';
//import {BrowserRouter,Navigate ,Route , Routes} from 'react-router-dom';

function RoutesApp(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeView/>}>
              <Route index element={<UserListView/>}/>
                <Route path="/adduser" element={<UserCreateView/>}/>
                <Route path="/edituser/:id" element={<UserEditView/>}/>
                <Route path="/viewuser/:id" element={<UserDetailsView/>}/>


                <Route path="*" element={<NoPage/>} />
            </Route>
        </Routes>
        </BrowserRouter>
    );
}


export default RoutesApp;