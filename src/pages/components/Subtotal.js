import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Subtotal.css";

export const Subtotal = () => {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + parseFloat(item.price.replace(/,/g, '')), 0);

  return (
    <div className="subtotal">
        <div>
          <h3>SubTotal</h3>
          <p>Total items: {cart.length ? cart.length : 0}</p>
          <p>Total: ₹{total.toLocaleString()}</p>
        </div>
        <button className="subbtn">Pay</button>
    </div>
  )
}
