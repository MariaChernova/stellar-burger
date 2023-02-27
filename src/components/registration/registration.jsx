import registrationStyles from './registration.module.css';
import { EmailInput, PasswordInput, Button, Input, Typography } from '@ya.praktikum/react-developer-burger-ui-components';

export default function Registration() {
  return (
    <div className={registrationStyles.container}>
      <h1 className='text text_type_main-medium mb-6'>Регистрация</h1>
      <Input type={'text'} placeholder={'Имя'} name={'name'} error={false} errorText={'Ошибка'} size={'default'} extraClass="mb-6" />
      <EmailInput isIcon={false} extraClass="mb-6" />
      <PasswordInput name={'password'} icon="ShowIcon" />
      <Button htmlType="button" type="primary" size="medium" extraClass="mt-6 mb-20">Зарегистрироваться</Button>
      <div className={registrationStyles.link}>
        <p className="text text_type_main-default">Уже зарегистрированы?</p>
        <Button htmlType="button" type="secondary" size="medium">Войти</Button>
      </div>
    </div>
  )
}
