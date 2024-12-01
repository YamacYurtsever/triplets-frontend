import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { requestAuthRegister, requestAuthLogin } from '../api/authApi';
import '../styles/AuthForm.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const toggleIsLogin = () => setIsLogin(!isLogin);
  
  const submitAuthForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    
    // Get inputs from form
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    // Send register or login request to server and get token
    let data;
    if (!isLogin) {
      data = await requestAuthRegister(name, email, password);
    } else {
      data = await requestAuthLogin(email, password);
    }

    // Handle response data
    if (data.token) {
      console.log(`${!isLogin ? 'Register' : 'Login'} successful`);
      localStorage.setItem('token', data.token);
      navigate('/dashboard'); 
    } else if (data.error) {
      console.error("Error: ", data.error);
    }
  }

  return (
    <form className='auth-form' onSubmit={submitAuthForm}>
      <AuthToggle onToggle={toggleIsLogin} isLogin={isLogin}/>
      <div className='auth-inputs'>
        {!isLogin && <AuthInput name='name' type='text' isLogin={isLogin}/>} 
        <AuthInput name='email' type='email' isLogin={isLogin}/>
        <AuthInput name='password' type='password' isLogin={isLogin}/>
      </div>
      <AuthButton isLogin={isLogin}/>
    </form>
  );
}

const AuthToggle = (
  { onToggle, isLogin }: { onToggle: () => void, isLogin: boolean }
) => {
  return (
    <label className='auth-toggle-label'>
      <input 
        type='checkbox' 
        checked={isLogin} 
        onChange={onToggle} 
        className='peer invisible'
      />
      <div className='peer auth-toggle-container'>
        <span>Register</span>
        <span>Login</span>
      </div>
    </label>
  );
};

const AuthInput = ({ name, type, isLogin }: { name: string, type: string, isLogin: boolean }) => {
  const authInputBackground = !isLogin ? 'bg-primary-light' : 'bg-secondary-light';
  
  return (
    <input 
      name={name} 
      placeholder={name} 
      type={type} 
      className={`auth-input ${authInputBackground}`} 
      required
    />
  );
};

const AuthButton = ({ isLogin } : { isLogin: boolean }) => {
  const authButtonBackground = !isLogin ? 'bg-primary-default' : 'bg-secondary-default';

  return (
    <button 
      type="submit" 
      className={`auth-button ${authButtonBackground}`}
    >
      Submit
    </button>
  );
}

export default AuthForm;