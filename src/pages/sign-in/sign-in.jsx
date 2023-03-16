import signInStyles from './sign-in.module.css';
import { useNavigate } from 'react-router-dom';
import { EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';

export default function SignIn() {
  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate('/register');
  }

  const goToForgotPassword = () => {
    navigate('/forgot-password');
  }

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('')

  const onEmailChange = e => {
    setEmail(e.target.value)
  }

  const onPasswordChange = e => {
    setPassword(e.target.value)
  }

  return (
    <div className={signInStyles.container}>
      <form className={signInStyles.form}>
        <h1 className='text text_type_main-medium mb-6'>Вход</h1>
        <EmailInput isIcon={false} extraClass="mb-6" onChange={onEmailChange} value={email}/>
        <PasswordInput name={'password'} icon="ShowIcon" onChange={onPasswordChange} value={password} />
        <Button htmlType="button" type="primary" size="medium" extraClass="mt-6 mb-20">Войти</Button>
      </form>
      <div className={signInStyles.link}>
        <p className="text text_type_main-default">Вы — новый пользователь?</p>
        <Button htmlType="button" type="secondary" size="medium" onClick={goToSignUp}>Зарегистрироваться</Button>
      </div>
      <div className={signInStyles.link}>
        <p className="text text_type_main-default">Забыли пароль?</p>
        <Button htmlType="button" type="secondary" size="medium" onClick={goToForgotPassword}>Восстановить пароль</Button>
      </div>
    </div>
  )
}
