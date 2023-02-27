import ResetPasswordStyles from './reset-password.module.css';
import { EmailInput, PasswordInput, Button, Input, Typography } from '@ya.praktikum/react-developer-burger-ui-components';

export default function ResetPassword() {
  return (
    <div className={ResetPasswordStyles.container}>
      <h1 className='text text_type_main-medium mb-6'>Восстановление пароля</h1>
      <PasswordInput name={'password'} icon="ShowIcon" placeholder='Введите новый пароль' extraClass="mb-6" />
      <Input type={'text'} placeholder={'Введите код из письма'} name={'name'} error={false} errorText={'Ошибка'} size={'default'} />
      <Button htmlType="button" type="primary" size="medium" extraClass="mt-6 mb-20">Сохранить</Button>
      <div className={ResetPasswordStyles.link}>
        <p className="text text_type_main-default">Вспомнили пароль?</p>
        <Button htmlType="button" type="secondary" size="medium">Войти</Button>
      </div>
    </div>
  )
}
