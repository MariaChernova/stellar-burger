import signInStyles from './sign-in.module.css';
import { EmailInput, PasswordInput, Button, ProfileIcon, Typography } from '@ya.praktikum/react-developer-burger-ui-components';

export default function SignIn() {
  return (
    <div className={signInStyles.container}>
      <h1 className='text text_type_main-medium mb-6'>Вход</h1>
      <EmailInput isIcon={false} extraClass="mb-6" />
      <PasswordInput name={'password'} icon="ShowIcon" />
      <Button htmlType="button" type="primary" size="medium" extraClass="mt-6 mb-20">Войти</Button>
      <div className={signInStyles.link}>
        <p className="text text_type_main-default">Вы — новый пользователь?</p>
        <Button htmlType="button" type="secondary" size="medium">Зарегистрироваться</Button>
      </div>
      <div className={signInStyles.link}>
        <p className="text text_type_main-default">Забыли пароль?</p>
        <Button htmlType="button" type="secondary" size="medium">Восстановить пароль</Button>
      </div>
    </div>
  )
}
