import React, {FC, useContext, useEffect, useState} from 'react';
import Categories from '../../components/categories/Categories';
import Sort from '../../components/sort/Sort';
import {pizzaAPI, ResponsePizzaType} from '../../api/pizza-api';
import PizzaBlock from '../../components/pizza-block/PizzaBlock';
import Skeleton from '../../components/pizza-block/Skeleton';
import Pagination from '../pagination/Pagination';
import {SearchContext} from '../../App';

export type SortType = {
    name: string
    sortProperty: string
}
type HomeType = {}
const Home: FC<HomeType> = () => {
    const [pizza, setPizza] = useState<ResponsePizzaType[]>([])
    const [showSkeleton, setShowSkeleton] = useState<boolean>(false)
    const [categoryId, setCategoryId] = useState<number>(0)
    const [sortType, setSortType] = useState<SortType>({name: 'популярности', sortProperty: 'rating'})
    const [page, setPage] = useState(1)

    const {searchValue} = useContext<any>(SearchContext)

    useEffect(() => {
        setShowSkeleton(true)
        const sort = sortType.sortProperty
        pizzaAPI.getPizza(categoryId, sort, page,searchValue)
            .then(res => {
                setPizza(res.data)
                setShowSkeleton(false)
            })
        window.scrollTo(0, 0)
    }, [categoryId, sortType, page,searchValue])

    const pizzaBlock = pizza.map((pizza) => <PizzaBlock key={pizza.id}
                                                        title={pizza.title}
                                                        category={pizza.category}
                                                        id={pizza.id}
                                                        rating={pizza.rating}
                                                        price={pizza.price}
                                                        imageUrl={pizza.imageUrl}
                                                        types={pizza.types}
                                                        sizes={pizza.sizes}
    />)
    const pizzaSkeleton = ([...new Array(12)].map((_, i) => <Skeleton key={i}/>))
    return (
        <>
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={(id: number) => setCategoryId(id)}/>
                <Sort value={sortType} onClickSortType={(i: any) => setSortType(i)}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {showSkeleton ? pizzaSkeleton : pizzaBlock}
                <Pagination page={page} onChangePage={(num) => setPage(num)}/>
            </div>
        </>
    );
};

export default Home;