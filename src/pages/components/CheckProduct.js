import { useContext } from "react";
import "./CheckProduct.css";
import { CartContext } from "../../context/CartContext";

export const CheckProduct = ({prod, title, info, price, rating, img}) => {
    const intRating = Math.floor(rating);
    const { dispatch } = useContext(CartContext);

    const removeCart = () => {
        dispatch({type: "REMOVE_CART", payload: prod})
    }
  return (
    <div className="check_product">
        <div className="check_img">
            <img className="check_product_img" src={img} alt="product" />
        </div>
        <div className="check_product_info">
            <h3>{title}</h3>
            <p>{info}</p>
            <p className="check_product_price">
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className="check_product_rating">
                {Array(intRating)
                .fill()
                .map((_, i) => (
                    <p key={i}>⭐</p>
                ))}
                <span className="check_prod_intRating">{rating}</span>
            </div>
            <button onClick={removeCart} className="check_product_btn">Remove</button>
        </div>
    </div>
  )
}
