import { Route, Routes } from 'react-router-dom';

import './App.css';

import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ProductsPage from './pages/ProductsPage';

import Footer from './pages/components/Footer';
import Header from './pages/components/Header';
import Navbar from './pages/components/Navbar';

function App(){
    return(
        <>
            <Header />
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='products'>
                    <Route index  element={<ProductsPage />} />
                    <Route path="hardware/:id" element={<h1>Hardware</h1>} />
                    <Route path="software/:id" element={<h1>Software</h1>} />
                    <Route path="bootcamps/:id" element={<h1>Bootcamps</h1>} />
                    <Route path="consultancies/:id" element={<h1>Asesorias</h1>} />
                </Route>
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;