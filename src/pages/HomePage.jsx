import { useState, useEffect } from 'react';
import { Header } from 'd4design';
import { Container } from 'd4design';
import { HiOutlineKey } from "react-icons/hi";
import { Link } from "../utils/Link";

export const HomePage = ({ }) => {
  const [url, setUrl] = useState(null);
  useEffect(() => {
    async function getUrl() {      
      let url = await fetch('https://desktop.local', {mode: 'no-cors'})
          .then(response => 'https://desktop.local').catch(err=>{
            return fetch('https://192.168.68.122', {mode: 'no-cors'})
              .then(response => 'https://192.168.68.122').catch(err=>{
                return fetch('https://100.109.163.106', {mode: 'no-cors'})
                  .then(response => 'https://100.109.163.106').catch(err=>{
                    return '/error';
                  });
              });
          });
      setUrl(url);
    }
    getUrl();
  }, []);

  return (
    <div className="h-screen content-center">
      
      <Container className="fixed top-2 right-2 hover:bg-grayscale-50 transform active:scale-90 transition-transform">
        <Link to={url}>
          <HiOutlineKey className="p-1 stroke-primary-50 text-3xl"/>
        </Link>
      </Container>
      
      <Container className="m-auto w-1/2">
        
        <div className="flex justify-center">
          <Header className="pt-6 pb-2 text-primary-50 underline">Dirk Badenhorst</Header>
        </div>
        
        <div className="flex justify-center">
          <div>
            <p className="px-4 pt-4 pb-2 text-white text-center font-monosphere">
              A digital solutions provider.
            </p>
          </div>
        </div>
        
      </Container>
      
    </div>
  );
};
