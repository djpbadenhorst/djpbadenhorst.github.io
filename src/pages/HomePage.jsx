import { useState, useEffect } from 'react';
import { Header } from 'd4design';
import { Container } from 'd4design';
import { HiOutlineKey } from "react-icons/hi";

export const HomePage = ({ }) => {
  const [url, setUrl] = useState(null);
  useEffect(() => {
    async function getUrl() {      
      let url = await fetch('http://desktop.local:80', {mode: 'no-cors'})
          .then(response => 'http://desktop.local:80').catch(err=>{
            return fetch('http://192.168.68.122:80', {mode: 'no-cors'})
              .then(response => 'http://192.168.68.122:80').catch(err=>{
                return 'http://100.109.163.106:80';
              });
          });
      setUrl(url);
    }
    getUrl();
  }, []);
  
  return (
    <div className="h-screen flex justify-center content-center">
      <Container className="m-auto w-1/2">
        <div className="flex justify-center">
          <Header className="pt-6 pb-2 text-primary-50 underline">Dirk Badenhorst</Header>
        </div>
        <div className="flex justify-center">
          <p className="px-4 pt-4 pb-2 text-white text-center font-monosphere">
            Will be putting some stuff here for public profile.
          </p>
        </div>
      </Container>
      <Container className="fixed top-2 right-2 hover:bg-grayscale-50 transform active:scale-90 transition-transform">
        <a href={url}>
          <HiOutlineKey className="p-1 stroke-primary-50 text-3xl"/>
        </a>
      </Container>
    </div>
  );
};
