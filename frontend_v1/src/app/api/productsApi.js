import axiosClient from "./axiosClient";

const productsApi = {
    getProducts(query) {
        const url = `/products?${query}`;
        return axiosClient.get(url);
    },
    getProductById(id) {
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },

}

export default productsApi;