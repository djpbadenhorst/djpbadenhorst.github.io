import { HomePage } from './pages/HomePage';
import { ErrorPage } from './pages/ErrorPage';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage/>} />
      <Route path="/error" element={<ErrorPage/>} />
    </Routes>
  );
};
export default App;
