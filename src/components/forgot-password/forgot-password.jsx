import forgotPasswordStyles from './forgot-password.module.css';
import { EmailInput, PasswordInput, Button, Input, Typography } from '@ya.praktikum/react-developer-burger-ui-components';

export default function ForgotPassword() {
  return (
    <div className={forgotPasswordStyles.container}>
      <h1 className='text text_type_main-medium mb-6'>Восстановление пароля</h1>
      <EmailInput name={'email'} isIcon={false} extraClass="mb-6" placeholder='Укажите e-mail'/>
      <Button htmlType="button" type="primary" size="medium" extraClass="mt-6 mb-20">Восстановить</Button>
      <div className={forgotPasswordStyles.link}>
        <p className="text text_type_main-default">Вспомнили пароль?</p>
        <Button htmlType="button" type="secondary" size="medium">Войти</Button>
      </div>
    </div>
  )
}
