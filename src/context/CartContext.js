import { createContext, useReducer } from "react";
import { cartReducers } from "../reducers/cartReducers";

const initialCartState = [ ];

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [ cart, dispatch ] = useReducer(cartReducers, initialCartState);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};
