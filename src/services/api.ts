import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8000",
});

export async function getProducts() {
  const res = await client("/products");
  return res;
}

export async function getProduct(id: string | number) {
  const res = await client(`/products/${id}`);
  return res;
}
