import React, { useContext } from "react";
import { primaryContext } from "../../context/PrimaryContext";
import Card from "../Card";

const Cart = () => {
  const { cart, products } = useContext(primaryContext);

  //cartItem = {productId: 6, howMany: 3}

  let arrayOfCards = cart.map((cartItem) => {
    let correctProduct = products.find((prod) => {
      if (prod.id === cartItem.productId) {
        return true;
      } else {
        return false;
      }
    });

    return (
      <Card
        key={correctProduct.title}
        productData={correctProduct}
        howMany={cartItem.howMany}
      />
    );
  });

  return (
    <div>
      {/*map through the cart, making a CARD for each productbin the cart. TELL THE CARD THIS IS CART CARD */}
      <h1>CART</h1>
      {arrayOfCards}
    </div>
  );
};

export default Cart;
