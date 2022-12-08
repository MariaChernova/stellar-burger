import React from 'react';
import ReactDOM from 'react-dom/client';
import appHeaderStyles from './app-header.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon, Typography, Box } from '@ya.praktikum/react-developer-burger-ui-components'

export default function AppHeader() {
  return (
    <header className={appHeaderStyles.bg}>
      <nav className={appHeaderStyles.nav}>
        <ul className={appHeaderStyles.ul}>
          <li className={`${appHeaderStyles.button} pl-5 pr-5 pb-4 pt-4`}>
            <BurgerIcon type="primary" />
            <span className={"text text_type_main-default ml-2"}>Конструктор</span>
          </li>
          <li className={`${appHeaderStyles.button} pl-5 pr-5 pb-4 pt-4`}>
            <ListIcon type="secondary" />
            <span className={"text text_type_main-default ml-2 text_color_inactive"}>Лента заказов</span>
          </li>
        </ul>
        <Logo className={appHeaderStyles.logo} alt='Логотип' />
        <ul className={appHeaderStyles.ul}>
          <li className={`${appHeaderStyles.button} pl-5 pr-5 pb-4 pt-4`}>
            <ProfileIcon  type="secondary" />
            <span className={"text text_type_main-default ml-2 text_color_inactive"}>Личный кабинет</span>
          </li>
        </ul>
      </nav>
    </header>
  )
}
