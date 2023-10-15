//Axios instance
import axios from "axios";

export type ResponsePizzaType = {
   id: number;
   imageUrl: string;
   title: string;
   types: number[];
   sizes: number[];
   price: number;
   category: number;
   rating: number;
};
const instance = axios.create({
   baseURL: "https://640f66df4ed25579dc4e31da.mockapi.io/",
   withCredentials: false,
});

export const pizzaAPI = {
   getPizza(categoryId: number, sort: string, page: number, searchValue: string) {
      const sortBy = sort.replace("-", "");
      const order = sort.includes("-") ? "asc" : "desc";
      const category = categoryId > 0 ? `${categoryId}` : "";
      const search = searchValue ? `&search=${searchValue}` : "";

      return instance.get<ResponsePizzaType[]>(
         `items?category=${category}&sortBy=${sortBy}&order=${order}&limit=4&page=${page}&search=${search}`
      );
   },
};
