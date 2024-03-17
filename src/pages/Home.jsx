import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';


export const Home = ({ }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log('abc');
    navigate('/other');
  };


  return (
    <Button label="Home" onClick={handleClick}/>
  );
};
