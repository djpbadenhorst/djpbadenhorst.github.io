import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { ErrorPage } from './pages/ErrorPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/error" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
