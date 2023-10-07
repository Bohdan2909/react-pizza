import React, {createContext, useState} from 'react';
import './scss/app.scss';
import Header from './components/header/Header';
import RoutesPage from './page/routes/RoutesPage';

export const SearchContext = createContext<unknown|string>(null)
function App() {
const [searchValue, setSearchValue] = useState('')
    return (
        <SearchContext.Provider value={{searchValue,setSearchValue}}>
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <div className="container">
                        <RoutesPage/>
                    </div>
                </div>
            </div>
        </SearchContext.Provider>

    );
}

export default App;
