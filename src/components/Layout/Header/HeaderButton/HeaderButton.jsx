import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
function HeaderButton(props){
    return(
        <Link to={props.path} >
            <button>{props.text} </button>
        </Link>
    );
}

export default HeaderButton;   