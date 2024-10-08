import ProductsList from "./ProductsList";
import FeaturedProductsList from "./FeaturedProductsList";
import { type Product } from "../models/Product";

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

export default ProductPage;
