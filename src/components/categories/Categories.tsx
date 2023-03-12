import React, {useState} from 'react';

const Categories = () => {
    const categoriesState = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
    const [activeIndex, setActiveIndex] = useState(0)
    const clickCategoryHandler = (i: number) => {
        setActiveIndex(i)
    }

    const categories = categoriesState.map((category: string, i: number) => {
        const activeClass = activeIndex === i ? 'active' : ''
        return <li onClick={() => clickCategoryHandler(i)} key={i}
                   className={activeClass}>{category}</li>
    })
    return (
        <div className="categories">
            <ul>
                {categories}
            </ul>
        </div>
    );
};

export default Categories;