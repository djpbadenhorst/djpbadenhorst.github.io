import { Container } from '../components/Container';
import { Button } from '../components/Button';

export const AdminHomePage = ({ }) => {
  return (
    <div className="h-screen flex justify-center content-center">
      <div className="m-auto w-full flex flex-wrap">
        {
          [
            { label:"Kodi", link:"http://desktop.local:10000"},
            { label:"QBitTorrent", link:"http://desktop.local:9000"},
            { label:"Jackett", link:"http://desktop.local:9117"},
            { label:"Mainsail", link:"http://3dprinter.local"},
          ].map(x=>(
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 shrink-0">
              <Container className="m-5 h-20">
                <div className="h-full flex">
                  <a href={x.link} className="m-auto text-accent-50 text-4xl text-center font-monosphere underline hover:text-accent-80">{x.label}</a>
                </div>
              </Container>
            </div>
          ))
        }
      </div>
    </div>
  );
};
