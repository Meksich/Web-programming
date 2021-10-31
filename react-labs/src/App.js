
import './App.css';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Catalog from './components/catalog/Catalog';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, {useState} from 'react';
import HeaderContext from './contexts/HeaderContext';
import Header from './components/header/Header';

function App() {
  const [isSearchEnabled, setIsSearchEnabled] = useState(false);
  return (
    <BrowserRouter>
      <div>
        <HeaderContext.Provider value={{
          isSearchEnabled,
          setIsSearchEnabled,
        }}>
        <Header/>
        <Routes>
          <Route path={'/'} element={<Main />} />
          <Route path={'/catalog'} element={<Catalog/>} />
        </Routes>
        <Footer />
        </HeaderContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
