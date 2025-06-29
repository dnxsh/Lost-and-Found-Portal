import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Find from './components/Find';
import Report from './components/Report';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/find" element={<Find/>} />
      <Route path="/report" element={<Report/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;