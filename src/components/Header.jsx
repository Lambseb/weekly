import React from "react";
import "./Header.css";
import panier from "../assets/pngegg.png";
function Header({ count }) {
  return (
    <header>
      <img
        src="https://tmpfiles.nohat.cc/6952789_preview.png"
        alt=""
        className="icone_top"
      />
      <h1 className="text_header">Ma Boutique Diabolique</h1>
      <div>
        <img className="basket" src={panier} alt="" />
        <p className="basket_count">panier: {count}</p>
      </div>
    </header>
  );
}
export default Header;
