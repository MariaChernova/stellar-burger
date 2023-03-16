import registrationStyles from './registration.module.css';
import { useNavigate } from 'react-router-dom';
import { EmailInput, PasswordInput, Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { createUser } from '../../services/actions/actions';
import React from 'react';


export default function Registration() {
  const navigate = useNavigate();

  const goToSignIn = () => {
    navigate('/login');
  }

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('')

  const onEmailChange = e => {
    setEmail(e.target.value)
  }

  const onPasswordChange = e => {
    setPassword(e.target.value)
  }

  const onNameChange = e => {
    setName(e.target.value)
  }

  const onFormSubmit = () => {
    createUser(name, email, password)
  }

  return (
    <div className={registrationStyles.container}>
      <form className={registrationStyles.form}>
        <h1 className='text text_type_main-medium mb-6'>Регистрация</h1>
        <Input type={'text'} placeholder={'Имя'} name={'name'} error={false} errorText={'Ошибка'}size={'default'} extraClass="mb-6" onChange={onNameChange} value={name} />
        <EmailInput isIcon={false} extraClass="mb-6" onChange={onEmailChange} value={email}/>
        <PasswordInput name={'password'} icon="ShowIcon" onChange={onPasswordChange} value={password}/>
        <Button htmlType="button" type="primary" size="medium" extraClass="mt-6 mb-20" onClick={onFormSubmit}>Зарегистрироваться</Button>
      </form>
      <div className={registrationStyles.link}>
        <p className="text text_type_main-default">Уже зарегистрированы?</p>
        <Button htmlType="button" type="secondary" size="medium" onClick={goToSignIn}>Войти</Button>
      </div>
    </div>
  )
}
