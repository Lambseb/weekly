import "./Product.css";
function Product({ arrayElement, setCount, count }) {
  const handleClick = () => {
    setCount(count+ 1);
  };
  return (
    <div className="product">
      <h3 className="last_item" style={{ color: "orange", font: "" }}>
        {arrayElement.name.toUpperCase()}
      </h3>
      {arrayElement.stock < 3 ? (
        <p className="last_article">Dernier article disponible</p>
      ) : (
        <p> </p>
      )}
      <img style={{ borderRadius: "20px" }} src={arrayElement.image}></img>
      <p style={{ color: "orange", font: "" }}> prix: {arrayElement.prix} €</p>
      <p style={{ color: "orange" }}> {arrayElement.description}</p>
      <button onClick={handleClick}>AJOUTER AU PANIER</button>
    </div>
  );
}
export default Product;
