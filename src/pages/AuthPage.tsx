import AuthForm from '../components/AuthForm';
import '../styles/AuthPage.css';

const AuthPage = () => {
  return (
    <div className='auth-page'>
      <AuthCard/>
    </div>
  );
}

const AuthCard = () => {

  return (
    <div className='auth-card'>
      <h1 className='auth-header'>TRIPLETS</h1>
      <AuthForm/>
    </div>
  );
};

export default AuthPage;
