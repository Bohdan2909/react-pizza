import s from "./Pagination.module.scss";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setCurrentPage } from "../../redux/slice/filterSlice";

const Pagination = () => {
   const page = useSelector((state: RootState) => state.filter.currentPage);
   const dispatch = useDispatch();

   const onChangePage = (event: any) => {
      dispatch(setCurrentPage(event.selected + 1));
   };
   return (
      <ReactPaginate
         className={s.root}
         breakLabel="..."
         nextLabel=">"
         previousLabel="<"
         onPageChange={onChangePage}
         pageRangeDisplayed={4}
         pageCount={3}
         forcePage={page - 1}
         // renderOnZeroPageCount={null}
      />
   );
};

export default Pagination;
