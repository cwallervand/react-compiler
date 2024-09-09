import React from "react";

import { Product } from "../models/Product";

const ProductsList = ({ products }: { products: Product[] }) => {
  return (
    <div>
      <h2>Products - {Date.now()}</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div>
              <b>
                {product.emoji}
                {product.name}
              </b>
            </div>
            {product.description && (
              <p>
                <i>{product.description}</i>
              </p>
            )}
            {product.price && <p>Price: {product.price}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(ProductsList);
