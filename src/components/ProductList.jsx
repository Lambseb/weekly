import React from "react";
import { useState, useEffect } from "react";
import Product from "./Product";
import "../components/ProductList.css";
function ProductList({ stockHalloween, setCount, count }) {
  const [hallowFilter, setHallowFilter] = useState(null);

  useEffect(() => {
    setHallowFilter(stockHalloween);
  }, [stockHalloween]);

  return (
    <section>
      <h2>C A T S</h2>
      <div className="product_list">
        {hallowFilter &&
          hallowFilter.map((element) =>
            element.category === "Cat" ? (
              <Product
                setCount={setCount}
                count={count}
                key={element.name}
                arrayElement={element}
              />
            ) : null
          )}
      </div>
      <h2>G N O M E S</h2>
      <h2>&</h2>
      <h2>C O U R G E</h2>
      <div className="product_list">
        {hallowFilter &&
          hallowFilter.map((element) =>
            element.category === ("gnomes" || "courge") ? (
              <Product
                setCount={setCount}
                count={count}
                key={element.name}
                arrayElement={element}
              />
            ) : null
          )}
      </div>
      <h2>D W A R F</h2>
      <div className="product_list">
        {hallowFilter &&
          hallowFilter
            .filter((e) => e.category === "nains")
            .map((element) => (
              <Product
                setCount={setCount}
                count={count}
                key={element.name}
                arrayElement={element}
              />
            ))}
      </div>
    </section>
  );
}
export default ProductList;
