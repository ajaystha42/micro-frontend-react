import React, { useEffect, useState } from "react";
import { API_URL, currency, getProducts } from "./products";

export default function HomeContent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);
  console.log({ products });

  return (
    <div className="my-10 grid grid-cols-4 gap-5">
      {products?.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <div className="flex">
            <div className="flex-grow font-bold">
              <a>{product.name}</a>
              <div className="flex-end">{currency.format(product.price)}</div>
            </div>
            <div className="text-sm mt-4">{product.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
