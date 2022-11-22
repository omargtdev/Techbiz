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
                    {/* <Route path="categories" element={<h1>Show categories</h1>} /> */}
                </Route>
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;