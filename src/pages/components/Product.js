import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Product.css";

export const Product = ({prod, title, info, price, rating, img}) => {
    const intRating = Math.floor(rating);
    const [inCart, setInCart] = useState(false);

    const { dispatch, cart } = useContext(CartContext);

    useEffect(() => {
        const prodIncart = cart.find(item => item.id === prod.id);
        setInCart(!!prodIncart);
    }, [cart, prod.id])
    
    
    
    const addCart = () => {
        dispatch({ type:"ADD_TO_CART", payload: prod })
    }

    const removeCart = () => {
        dispatch({ type: "REMOVE_CART", payload: prod })
    }

  return (
    <div className="product">
        <div className="product_info">
            <h3>{title}</h3>
            <p>{info}</p>
            <img className="product_img" src={img} alt="product" />
            <p className="product_price">
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className="product_rating">
                {Array(intRating)
                .fill()
                .map((_, i) => (
                    <p key={i}>⭐</p>
                ))}
                <span className="prod_intRating">{rating}</span>
            </div>
            { inCart ? 
            <button onClick={removeCart} className="product_btn">Remove<RemoveShoppingCartIcon /></button> :
            <button onClick={addCart} className="product_btn">Add to cart<ShoppingCartIcon/></button> 
            }
            
        </div>
    </div>
  )
}
