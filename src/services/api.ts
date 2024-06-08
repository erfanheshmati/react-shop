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

export async function login(username: string, password: string) {
  const { data } = await client({
    method: "POST",
    url: "/login",
    data: {
      username,
      password,
    },
  });
  return data;
}
