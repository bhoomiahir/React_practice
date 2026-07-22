import "./App.css";
import ProductList from "./components/ProductList";
import ProductImg from "./components/ProductImg";

function App() {
  const products = ["Biscuits", "Chocolate", "Chips", "Chaas", "Cold Coffee"];
  const productImg = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_cFeGJ6DH65OTqVfxAwUmChurGGuy8BcAq2iftJIpRw&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6BjxOPndzWP7uuTZtJ7cpCd3vNiV7I_b_RRv7lcgBgA&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTk61QK35roGqgyuW3YMetJSkYn2lSrSqFsb67iQI8Hg&s=10",
    "https://www.indianveggiedelight.com/wp-content/uploads/2023/01/masala-chaas-featured.jpg",
    "https://frostingandfettuccine.com/wp-content/uploads/2022/12/Caramel-Iced-Coffee-6.jpg",
  ];
  return (
    <div className="container">
      <ProductImg imgs={productImg} />
      <ProductList products={products} />
    </div>
  );
}

export default App;
