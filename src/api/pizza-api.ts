//Axios instance
import axios from 'axios';

export type ResponsePizzaType = {
    id: number;
    imageUrl: string;
    title: string;
    types: number[];
    sizes: number[];
    price: number;
    category: number;
    rating: number;
}
const instance = axios.create({
    baseURL: 'https://640f66df4ed25579dc4e31da.mockapi.io/',
    withCredentials: false,

})


export const pizzaAPI = {
    getPizza() {
        return instance.get<ResponsePizzaType[]>(`items`)
    }
}