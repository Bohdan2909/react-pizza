import React from 'react';
import './scss/app.scss';
import Header from './components/header/Header';
import Home from './feature/home/Home';
import Page404 from './feature/page404/Page404';
import RoutesPage from './page/routes/RoutesPage';


function App() {

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    {/*<Home/>*/}
                    {/*<Page404/>*/}
                    <RoutesPage/>
                </div>
            </div>
        </div>
    );
}

export default App;
