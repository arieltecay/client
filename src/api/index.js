import axios from "axios";

const API = axios.create({ url: "http://localhost:4000/api" });

export const fetchProducts = () => API.get("/products");
export const fetchUsers = () => API.get("/userName");
