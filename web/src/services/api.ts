import axios from "axios"

const API_BASE_URL = import.meta.env.BASE_URL

export const api = axios.create({
  baseURL: API_BASE_URL
})