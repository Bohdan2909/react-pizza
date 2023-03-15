import React, {FC} from 'react';
import s from './Pagination.module.scss'
import ReactPaginate from 'react-paginate';

type PaginationPropsType = {
    onChangePage: (num: number) => void
    page:number
}
const Pagination: FC<PaginationPropsType> = ({onChangePage,page}) => {
    return (
        <ReactPaginate
            className={s.root}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={(event) => onChangePage(event.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={3}
            forcePage={page - 1}
            // renderOnZeroPageCount={null}
        />
    );
};

export default Pagination;