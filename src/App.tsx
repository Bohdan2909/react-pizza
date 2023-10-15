import React, { createContext, useState } from "react";
import "./scss/app.scss";
import Header from "./components/header/Header";
import RoutesPage from "./page/routes/RoutesPage";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export const SearchContext = createContext<unknown | string>(null);
function App() {
   const [searchValue, setSearchValue] = useState("");
   return (
      <Provider store={store}>
         <SearchContext.Provider value={{ searchValue, setSearchValue }}>
            <div className="wrapper">
               <Header />
               <div className="content">
                  <div className="container">
                     <RoutesPage />
                  </div>
               </div>
            </div>
         </SearchContext.Provider>
      </Provider>
   );
}

export default App;
