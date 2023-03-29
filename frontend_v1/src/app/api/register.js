import axiosClient from "./axiosClient";

const registerApi = {
    createAcc(newAccount) {
        const url = "/register";
        return axiosClient.post(url,newAccount);
    }

}

export default registerApi;