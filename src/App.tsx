import React from 'react';
import './scss/app.scss';
import Header from './components/header/Header';
import Categories from './components/categories/Categories';
import Sort from './components/sort/Sort';
import PizzaBlock from './components/pizza-block/PizzaBlock';
import pizzas from '../src/assets/pizza.json'

function App() {
    console.log(pizzas)
    const pizzaBlock = pizzas.map((pizza)=> <PizzaBlock key={pizza.id}
                                                        title={pizza.title}
                                                        category={pizza.category}
                                                        id={pizza.id}
                                                        rating={pizza.rating}
                                                        price={pizza.price}
                                                        imageUrl={pizza.imageUrl}
                                                        types={pizza.types}
                                                        sizes={pizza.sizes}
    /> )
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                    <Categories/>
                       <Sort/>
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        {pizzaBlock}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
