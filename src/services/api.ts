import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_URL;

export const api = axios.create({ baseURL: url });
