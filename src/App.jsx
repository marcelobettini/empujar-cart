import { useEffect, useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import Form from "./components/Form";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((prod) => setProducts(prod));
  }, []);
  return (
    <div>
      <header>
        <h1>Shop</h1>
        <SearchBar />
      </header>
      <main>
        {products.map((p) => (
          <ProductCard p={p} key={p.id} />
        ))}
      </main>
    </div>
  );
}

export default App;
