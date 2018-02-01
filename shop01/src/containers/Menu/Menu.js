import React from 'react';

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
        </div>
    )
}

export default Menu;