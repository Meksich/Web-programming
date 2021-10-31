
import './App.css';
import Homepage from './components/homepage/Homepage';
import Footer from './components/footer/Footer';
import Catalog from './components/catalog/Catalog';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export let isSearchEnabled = false;

function App() {
  return (
    <BrowserRouter>
      <div>
      
        <Routes>
          <Route path={'/'} element={<Homepage />} />
          <Route path={'/catalog'} element={<Catalog isSearchEnabled={isSearchEnabled}/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
