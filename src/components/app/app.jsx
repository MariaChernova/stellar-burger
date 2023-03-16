import { useSelector, useDispatch } from 'react-redux';
import appStyles from './app.module.css';
import AppHeader from '../app-header/app-header.jsx';
import SignIn from '../../pages/sign-in/sign-in.jsx';
import Registration from '../../pages/registration/registration.jsx';
import ForgotPassword from '../../pages/forgot-password/forgot-password';
import ResetPassword from '../../pages/reset-password/reset-password';
import Profile from '../../pages/profile/profile';
import FullPage from '../../pages/full-page/full-page';
import { HomePage } from '../../pages/home/home';
import {  Routes, Route } from 'react-router-dom';


export default function App() {

  return (
    <div className={appStyles.container}>
      <AppHeader  />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<SignIn />}/>
        <Route path='/register' element={<Registration />}/>
        <Route path='/forgot-password' element={<ForgotPassword />}/>
        <Route path='/reset-password' element={<ResetPassword />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/ingredients/:id' element={<FullPage />}/>
      </Routes>
    </div>
  )
}
