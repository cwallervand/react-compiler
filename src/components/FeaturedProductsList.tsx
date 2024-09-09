import { Product } from "../models/Product";

const FeaturedProductsList = ({
  featuredProducts,
}: {
  featuredProducts: Product[];
}) => {
  return (
    <div>
      <h2>Featured products - {Date.now()}</h2>
      <ul>
        {featuredProducts.map((product) => (
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

export default FeaturedProductsList;
