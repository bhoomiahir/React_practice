import "./App.css";
import ProductList from "./components/ProductList";

function App() {
  const products = ["Biscuits", "Chocolate", "Chips", "Chaas", "Cold Coffee"];
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}

export default App;
