import { Link } from "react-router-dom";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
import Logo from "../assets/logo.webp";
import "./Header.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


export const Header = () => {
    const { cart }  = useContext(CartContext);
  return (
    <section className='header'>
        <Link to="/" style={{textDecoration: "None"}}>
            <div className="header_logo">
                <img className='header_logoImg' src={Logo} alt="logo" />
                <h2 className="header_title">eshop</h2>
            </div>
        </Link>
        <div className="header_search">
            <input type="text" placeholder='search' className='header_input' />
            <SearchIcon className='header_searchIcon'/>
        </div>
        <div className="header_nav">
            <div className="nav_items">
                <span className="nav_lineone">Hello Guest</span>
                <span className="nav_linetwo">Sign in</span>
            </div>
            <div className="nav_items">
                <span className="nav_lineone">Your</span>
                <span className="nav_linetwo">Shop</span>
            </div>
            <Link to="/checkout" style={{textDecoration: "None"}}>
                <div className="item_basket">
                    <ShoppingBasketIcon />
                    <span className="nav_basket_count">{cart.length ? cart.length : 0}</span>
                </div>
            </Link>
        </div>
    </section>
  )
}
