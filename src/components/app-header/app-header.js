import React from 'react';
import ReactDOM from 'react-dom/client';
import appHeaderStyles from './app-header.module.css';
import { Logo, BurgerIcon , Typography } from '@ya.praktikum/react-developer-burger-ui-components'

export default function AppHeader() {
  return (
    <div className={appHeaderStyles.bg}>
      <div>
        
      </div>
      <Logo className={appHeaderStyles.logo} alt='Логотип' />
      <BurgerIcon type="primary" />
    </div>
  )
}