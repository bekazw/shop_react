import React from 'react';
import './Header.css';

const Search = () => {
    return (
        <div id = 'header_search'>
            <input  id ="search_text" type = "text" placeholder = "search text" />
            <button id = "search_button"> Search! </button>
        </div>
    )
}

const Login = () => {
    return (
        <div id = 'header_login'>
            <button id = "search_login"> LogIn </button>
            <button id = "search_reg" > RegMe </button>
        </div>
    )
}

const Header = () => {
    return (
        <div id = 'header_main'>
            <div id = 'header_logo'>LOGO</div>
            <Search />
            <Login />
        </div>
    )
}

export default Header;