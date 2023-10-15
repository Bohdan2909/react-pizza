import { FC, useContext, useEffect, useRef, useState } from "react";
import Categories from "../../components/categories/Categories";
import Sort, { list } from "../../components/sort/Sort";
import { pizzaAPI, ResponsePizzaType } from "../../api/pizza-api";
import PizzaBlock from "../../components/pizza-block/PizzaBlock";
import Skeleton from "../../components/pizza-block/Skeleton";
import Pagination from "../pagination/Pagination";
import { SearchContext } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setCategoryId, setFilters } from "../../redux/slice/filterSlice";
import qs from "qs";
import { useNavigate } from "react-router-dom";

export type SortType = {
   name: string;
   sortProperty: string;
};
type HomeType = {};

const Home: FC<HomeType> = () => {
   const categoryId = useSelector((state: RootState) => state.filter.categoryId);
   const sortType = useSelector((state: RootState) => state.filter.sort.sortProperty);
   const page = useSelector((state: RootState) => state.filter.currentPage);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   // const isSearch = useRef(false);
   // const isMounted = useRef(false);

   const [pizza, setPizza] = useState<ResponsePizzaType[]>([]);
   const [showSkeleton, setShowSkeleton] = useState<boolean>(false);
   const { searchValue } = useContext<any>(SearchContext);

   // const fetchPizzas = () => {
   //    setShowSkeleton(true);
   //    const sort = sortType;
   //    pizzaAPI.getPizza(categoryId, sort, page, searchValue).then((res) => {
   //       setPizza(res.data);
   //       setShowSkeleton(false);
   //    });
   //    window.scrollTo(0, 0);
   // };
   useEffect(() => {
      const queryString = qs.stringify({
         sortProperty: sortType,
         categoryId,
         page,
      });
      navigate(`?${queryString}`);

      // isMounted.current = true;
   }, [categoryId, sortType, page]);

   // useEffect(() => {
   //    if (window.location.search) {
   //       const params = qs.parse(window.location.search.substring(1));
   //       const sort = list.find((el) => el.sortProperty === params.sortProperty);
   //       dispatch(setFilters({ ...params, sort }));
   //       // isSearch.current = true;
   //       console.log(sort);
   //    }
   // }, []);

   useEffect(() => {
      setShowSkeleton(true);
      const sort = sortType;
      pizzaAPI.getPizza(categoryId, sort, page, searchValue).then((res) => {
         setPizza(res.data);
         setShowSkeleton(false);
      });
      window.scrollTo(0, 0);
      // if (!isSearch.current) {
      //    fetchPizzas();
      // }
      // isSearch.current = false;
   }, [categoryId, sortType, page, searchValue]);

   const pizzaBlock = pizza
      .filter((obj) => obj.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
      .map((pizza) => (
         <PizzaBlock
            key={pizza.id}
            title={pizza.title}
            category={pizza.category}
            id={pizza.id}
            rating={pizza.rating}
            price={pizza.price}
            imageUrl={pizza.imageUrl}
            types={pizza.types}
            sizes={pizza.sizes}
         />
      ));

   const pizzaSkeleton = [...new Array(12)].map((_, i) => <Skeleton key={i} />);
   const onChangeCategory = (id: number) => dispatch(setCategoryId(id));

   return (
      <>
         <div className="content__top">
            <Categories value={categoryId} onClickCategory={onChangeCategory} />
            <Sort />
         </div>
         <h2 className="content__title">Все пиццы</h2>
         <div className="content__items">
            {showSkeleton ? pizzaSkeleton : pizzaBlock}
            <Pagination />
         </div>
      </>
   );
};

export default Home;
