
import './App.css';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Catalog from './components/catalog/Catalog';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, {useState} from 'react';
import HeaderContext from './contexts/HeaderContext';
import CatalogContext from './contexts/CatalogContext';
import Header from './components/header/Header';
import ItemPage from './components/itempage/ItemPage';

function App() {
  const [isSearchEnabled, setIsSearchEnabled] = useState(false);
  const [dataRender, setDataRender] = useState([]);
  const [filters, setFilters] =  useState({});
  return (
    <BrowserRouter>
      <div>
        <HeaderContext.Provider value={{
          isSearchEnabled,
          setIsSearchEnabled,
        }}>
        <CatalogContext.Provider value={{
          dataRender,
          setDataRender,
          filters,
          setFilters,
        }}>
        <Header/>
        <Routes>
          
          <Route path={'/'} element={<Main />} />
          <Route path={'/catalog'} element={<Catalog/>} />
          <Route path={"/itempage/:id"} element={<ItemPage/>}/>
        </Routes>
        <Footer />
        
        </CatalogContext.Provider>
        </HeaderContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
