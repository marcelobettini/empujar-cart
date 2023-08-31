import "./ProductCard.css";
function ProductCard({ p }) {
  return (
    <article>
      <h3>{p.title}</h3>
      <img src={p.image} alt={p.title} />
      <p>{p.category}</p>
      <p>{p.price}</p>
      <p>{p.description}</p>
    </article>
  );
}

export default ProductCard;
