import React from 'react';
import './Menu.css';

const MenuElement = (props) => {
    return (
        <button className = 'menu_element' > {props.menuName} </button> 
    )
}

const Menu = () => {
    return (
        <div id = "menu_main">
            <MenuElement menuName = "HOME" />
            <MenuElement menuName = "ABOUT" />
            <MenuElement menuName = "CONTACTS" />
            <MenuElement menuName = "BASKET" />
        </div>
    )
}

export default Menu;