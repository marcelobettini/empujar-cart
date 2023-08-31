import { MdExpandLess, MdExpandMore } from "react-icons/md";
import "./ProductCard.css";
import { useState } from "react";
function ProductCard({ p }) {
  const [isFullDescription, setIsFullDescription] = useState(false);
  const handleExpand = () => {
    setIsFullDescription(!isFullDescription);
  };
  return (
    <article>
      <h3>{p.title}</h3>
      <div style={{ display: "flex" }}>
        <img src={p.image} alt={p.title} style={{ width: "50%" }} />
        <div>
          <p>{p.category}</p>
          <p>{p.price}</p>
          <button>add to cart</button>
        </div>
      </div>
      {isFullDescription ? (
        <span>
          {p.description} <MdExpandLess size={27} onClick={handleExpand} />
        </span>
      ) : (
        <span>
          {p.description.slice(0, 40)}...{" "}
          <MdExpandMore size={27} onClick={handleExpand} />
        </span>
      )}
    </article>
  );
}

export default ProductCard;
