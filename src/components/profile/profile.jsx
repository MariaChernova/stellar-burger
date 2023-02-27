import profileStyles from './profile.module.css';
import { EmailInput, PasswordInput, Input, Typography } from '@ya.praktikum/react-developer-burger-ui-components';

export default function Profile() {
  return (
    <div className={profileStyles.container}>
      <div className={`${profileStyles.navigation} text text_type_main-medium pr-15`}>
        <nav>
          <ul className={profileStyles.ul}>
            <li className={`${profileStyles.li} text text_type_main-medium pl-5 pr-5 pb-4 pt-4`}>Профиль</li>
            <li className={`${profileStyles.li} text text_type_main-medium pl-5 pr-5 pb-4 pt-4`}>История заказов</li>
            <li className={`${profileStyles.li} text text_type_main-medium pl-5 pr-5 pb-4 pt-4`}>Выход</li>
          </ul>
        </nav>
      <p className="text text_type_main-default text_color_inactive mt-20">В этом разделе вы можете изменить свои персональные данные</p>
    </div>
      <div>
        <Input
        type={'text'}
        placeholder={'Имя'}
        // onChange={e => setValue(e.target.value)}
        icon={'EditIcon'}
        // value={value}
        name={'name'}
        error={false}
        // ref={inputRef}
        // onIconClick={onIconClick}
        errorText={'Ошибка'}
        size={'default'} extraClass="mb-6"
        />

        <Input
        type={'text'}
        placeholder={'Логин'}
        // onChange={e => setValue(e.target.value)}
        icon={'EditIcon'}
        // value={value}
        name={'name'}
        error={false}
        // ref={inputRef}
        // onIconClick={onIconClick}
        errorText={'Ошибка'}
        size={'default'} extraClass="mb-6"
        />

        <PasswordInput
        // onChange={onChange}
        // value={value}
        name={'password'}
        icon="EditIcon"
        />
      </div>
    </div>
  )
}
