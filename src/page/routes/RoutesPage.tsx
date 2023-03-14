import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from '../../feature/home/Home';
import Page404 from '../../feature/page404/Page404';
import Cart from '../../feature/cart/Cart';

const RoutesPage = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/cart'} element={<Cart/>}/>
            <Route path={'*'} element={<Page404/>}/>
        </Routes>
    );
};

export default RoutesPage;