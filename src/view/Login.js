import React from 'react'
import { useSelector } from 'react-redux'
import LoginSection from '../components/contact/LoginSection'
import LogoutSection from '../components/contact/LogoutSection';
import { selectUser } from '../features/UserSlice';

const Login = () => {
  const user = useSelector(selectUser);
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          {
            user ? <LogoutSection /> : <LoginSection />
          }
        </div>
      </div>
    </div>
  )
}

export default Login