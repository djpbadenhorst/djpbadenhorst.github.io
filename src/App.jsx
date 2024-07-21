import { HomePage } from './pages/HomePage';
import { PublicErrorPage } from './pages/PublicErrorPage';
import { HashRouter, Routes, Route } from 'react-router-dom';

function App({routes}) {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/error" element={<PublicErrorPage/>} />
      </Routes>
    </HashRouter>
  );
}
export default App;
