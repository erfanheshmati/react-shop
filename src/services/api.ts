import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8000",
});

export async function getProducts() {
  const { data } = await client("/products"); // result = data.data
  return data;
}
