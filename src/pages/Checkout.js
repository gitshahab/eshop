import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { CheckProduct } from "./components/CheckProduct";
import { Subtotal } from "./components/Subtotal";
import "./Checkout.css";
import SaleImg from "../assets/sale2.webp";

export const Checkout = () => {
    const {cart} = useContext(CartContext);
  return (
    <div className="checkout">
        <div className="checkout_left">
            <img className="sale" src={SaleImg} alt="sale" />
            <h2 className="checkout_title">
                {cart.length ? "Your Checkout Products Are:" : "Nothing in Checkout List!"}
            </h2>
            {cart.map((prod) => (
                <CheckProduct key={prod.id} prod={prod} title={prod.title} info={prod.description} price={prod.price} rating={prod.ratings} img={prod.img}/>
            ))}
        </div>
        <div className="checkout_right">
                <Subtotal />
        </div>
    </div>
  )
}
