import { HomePage } from './pages/HomePage';
import { PublicErrorPage } from './pages/PublicErrorPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App({routes}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="error" element={<PublicErrorPage/>} />
      </Routes>
    </BrowserRouter>
  );
  //    <HomePage/>
}
export default App;
