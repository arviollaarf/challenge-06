import Home from './pages/home/HomePage';
import CarsPage from './pages/cars/CarsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='cars' element={<CarsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
