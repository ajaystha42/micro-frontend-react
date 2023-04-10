export const API_URL = "http://localhost:8080/";

export const getProducts = () =>
  fetch(`${API_URL}products`).then((res) => {
    return res.json();
  });

export const getProductById = (id) => {
  return fetch(`${API_URL}products/${id}`).then((res) => res.json());
};

export const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
