import React, { FC, useState } from "react";

type CategoriesType = {
   value: number;
   onClickCategory: (id: number) => void;
};
const Categories: FC<CategoriesType> = ({ value, onClickCategory }) => {
   const categoriesState = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
   // const [activeIndex, setActiveIndex] = useState(0)
   const clickCategoryHandler = (i: number) => {
      onClickCategory(i);
   };

   const categories = categoriesState.map((category: string, i: number) => {
      const activeClass = value === i ? "active" : "";
      return (
         <li onClick={() => clickCategoryHandler(i)} key={i} className={activeClass}>
            {category}
         </li>
      );
   });
   return (
      <div className="categories">
         <ul>{categories}</ul>
      </div>
   );
};

export default Categories;
