import React from "react";
import { Outlet } from 'react-router-dom';
import MainLayout from "../../components/Layout/Main/MainLayout";

function HomeView() {
    return (
        <div >
            <MainLayout>
                <div className="container">
                    <Outlet />
                </div>
            </MainLayout>
        </div>

    );
}

export default HomeView;