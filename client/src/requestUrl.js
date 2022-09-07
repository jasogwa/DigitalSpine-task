import axios from "axios";

const URL = "http://localhost:5000/";
const TOKEN = "";

export const publicUrl = axios.create({
    baseURL: URL,
});

export const privateUrl = axios.create({
    baseURL: URL,
    header: {TOKEN: `Bearer ${TOKEN}`},
});