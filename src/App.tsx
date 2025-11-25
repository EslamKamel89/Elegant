import Header from "./components/Header.tsx";
import Product from "./components/Product.tsx";
import Shop from "./components/Shop.tsx";
import { DUMMY_PRODUCTS } from "./dummy-products";

function App() {
  return (
    <>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </>
  );
}

export default App;
