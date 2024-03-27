import { Login } from '../containers/Login';
import { useNavigate } from 'react-router-dom';

import SHA256 from 'crypto-js/sha256';

export const LoginPage = ({ setCookies }) => {
  const navigate = useNavigate();
  const handleSubmit = (username, password) => {
    let hash = SHA256(password).toString();
    if (hash == 'cfb5097600bfe6f0a25eb6dec01e237f2465a4d189b6be8e446228750687bf7c') {
      setCookies('loggedIn',true);
      navigate('/admin/home');
    }
  };

  return (
    <Login onSubmit={handleSubmit}/>
  );
};
