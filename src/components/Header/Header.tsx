import React from "react";
import "./Header.css";


export function Header() {
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="header__body">
                        <div className="header__logo">
                            <a href="#">
                                <img src="https://kolizey.lviv.ua/wp-content/uploads/2020/02/logo_kolisey.png" alt="" />
                            </a>
                        </div>
                        <div className="header__menu">
                            <ul>
                                <li><a href="#">Про клуб</a></li>
                                <li><a href="#">Фотогалерея</a></li>
                                <li><a href="#">Ціни</a></li>
                                <li><a href="#">Контакти</a></li>
                            </ul>
                        </div>
                        <div className="header__work-time">
                            <ul>
                                <li><a href="tel:+390971310039">+390971310039</a></li>
                                <li>Пн-Пт 07:00 – 23:00</li>
                                <li>Сб-Нд 09:00 – 22:00</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}