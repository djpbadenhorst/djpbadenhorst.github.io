import { Container } from '../components/Container';
import { useNavigate } from 'react-router-dom';
import { HiOutlineKey } from "react-icons/hi";

export const HomePage = ({ }) => {  
  const navigate = useNavigate();
  const handelClick = (username, password) => {
      navigate('/admin/home');
  };

  return (
    <div className="h-screen flex justify-center content-center">
      <Container className="m-auto w-1/2">
        <div className="flex justify-center">
          <h1 className="pt-6 pb-2 text-primary-50 underline">Dirk Badenhorst</h1>
        </div>
        <div className="flex justify-center">
          <p className="px-4 pt-4 pb-2 text-white text-center font-monosphere">
            Will be putting some stuff here for public profile.
          </p>
        </div>
      </Container>
      <Container className="fixed bottom-2 right-2 hover:bg-grayscale-50 transform active:scale-90 transition-transform">
        <HiOutlineKey className="p-1 stroke-primary-50 text-3xl" onClick={handelClick}/>
      </Container>
    </div>
  );
};
