import "./App.css";
import ProductPage from "./components/ProductsPage";

const consultants = [
  {
    id: 1,
    name: "John Doe",
    emoji: "👨🏻‍🦰",
    featured: true,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 100,
  },
  {
    id: 2,
    name: "Jane Doe",
    emoji: "👩🏻‍🦰",
    featured: false,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 200,
  },
  {
    id: 3,
    name: "Bob Smith",
    emoji: "🧔🏾",
    featured: false,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 300,
  },
];

function App() {
  return <ProductPage products={consultants} heading="Consultants" />;
}

export default App;
