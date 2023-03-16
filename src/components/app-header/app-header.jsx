import appHeaderStyles from './app-header.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useNavigate } from 'react-router-dom';


export default function AppHeader() {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate('/profile');
  }

  const goToHome = () => {
    navigate('/');
  }

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
        <Logo className={appHeaderStyles.logo} alt='Логотип' onClick={goToHome}/>
        <ul className={appHeaderStyles.ul}>
          <li className={`${appHeaderStyles.button} pl-5 pr-5 pb-4 pt-4`} onClick={goToProfile}>
            <ProfileIcon  type="secondary" />
            <span className={"text text_type_main-default ml-2 text_color_inactive"}>Личный кабинет</span>
          </li>
        </ul>
      </nav>
    </header>
  )
}
