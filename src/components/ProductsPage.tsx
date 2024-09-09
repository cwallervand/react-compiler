import { useMemo, useState, useEffect } from 'react';

import ProductsList from './ProductsList';
import FeaturedProductsList from './FeaturedProductsList';
import { type Product } from '../models/Product';

const ProductPage = ({
  products,
  heading,
}: {
  products: Product[];
  heading: string;
}) => {
  // Dont need to use useMemo any more
  const featuredProducts = useMemo(() => {
    return getFeaturedProducts(products);
  }, [products]);
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
  console.log('Render heading');
  // Use timeStampe to force update of date
  const [timeStamp, setTimeStamp] = useState(Date.now());

  useEffect(() => {
    setTimeStamp(Date.now());
  });
  return (
    <h1>
      {heading} ({totalProducts}) - {Date.now()}
    </h1>
  );
};

const getFeaturedProducts = (products: Product[]): Product[] => {
  console.log('getFeaturedProducts');
  return products.filter((product) => product.featured);
};

export default ProductPage;
