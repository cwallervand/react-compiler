const ProductPage = ({
  products,
  heading,
}: {
  products: Product[];
  heading: string;
}) => {
  const featuredProducts = products.filter((product) => product.featured);
  const totalProducts = products.length;

  return (
    <main>
      <Heading heading={heading} totalProducts={totalProducts} />
      <section>
        <ProductsList products={products} />
      </section>
      <section>
        <FeaturedProductsList featuredProducts={featuredProducts} />
      </section>
    </main>
  );
};

type HeadingProps = {
  heading: string;
  totalProducts: number;
};
const Heading = ({ heading, totalProducts }: HeadingProps) => {
  return (
    <h1>
      {heading} ({totalProducts}) - {Date.now()}
    </h1>
  );
};

type Product = {
  id: number;
  name: string;
  emoji: string;
  featured: boolean;
  description?: string;
  price?: number;
};

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

export default ProductPage;
