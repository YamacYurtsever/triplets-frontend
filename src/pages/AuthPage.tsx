import { useState, useEffect } from 'react';
import { requestMessage } from '../api/authApi';

const AuthPage = () => {
  const [message, setMessage] = useState("No message yet");

  useEffect(() => {
    fetchMessage()
  }, []);
  
  const fetchMessage = async () => {
    const data = await requestMessage();
    const message = data.message;
    setMessage(message);
  }

  return (
    <h1 className='text-4xl text-emerald-700'>Message: {message}</h1>
  );
}

export default AuthPage;
