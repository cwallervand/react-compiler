import { useState } from 'react';

import './App.css';
import ProductPage from './components/ProductsPage';

const consultants = [
  {
    id: 1,
    name: 'John Doe',
    emoji: '👨🏻‍🦰',
    featured: true,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 100,
  },
  {
    id: 2,
    name: 'Jane Doe',
    emoji: '👩🏻‍🦰',
    featured: false,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 200,
  },
  {
    id: 3,
    name: 'Bob Smith',
    emoji: '🧔🏾',
    featured: false,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 300,
  },
];

const adjectives = [
  'Adorable',
  'Adventurous',
  'Agreeable',
  'Alert',
  'Alive',
  'Amused',
  'Angry',
  'Annoyed',
  'Anxious',
];

const getProductsPageHeading = () => {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  return `${adjective} Consultants`;
};

function App() {
  const [productPageHeading, setProductPageHeading] = useState(
    getProductsPageHeading()
  );
  return (
    <div>
      <button onClick={() => setProductPageHeading(getProductsPageHeading())}>
        Change heading
      </button>
      <ProductPage products={consultants} heading={productPageHeading} />
    </div>
  );
}

export default App;
