import React from 'react';
import './scss/app.scss';
import Header from './components/header/Header';
import RoutesPage from './page/routes/RoutesPage';


function App() {

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <RoutesPage/>
                </div>
            </div>
        </div>
    );
}

export default App;
