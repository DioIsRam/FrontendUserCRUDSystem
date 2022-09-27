import React from 'react';
import FooterComponent from '../Footer/FooterComponent';
import HeaderComponent from '../Header/HeaderComponent';

function MainLayout(props){
    return(
        <div>
            <HeaderComponent/>
            <main>{props.children}</main>
            <FooterComponent/>
        </div>
    )
}

export default MainLayout;