import React from 'react';

function Header() {
    return (
        <div className="header-container">
        <header>
            <div className="navbar">
                <img src="../logo.svg" alt="logo" />
                <a href="#au-container">О нас</a>
                <a href="#pr-content">Продукты</a>
                <a href="#w-container">Работа</a>
                <a href="#cont5ent">Бонусы</a>
                <a href="#app-container">Приложение</a>
                <button className="btn">log in</button>
            </div>
        </header>
        </div>
    );
}

export default Header;