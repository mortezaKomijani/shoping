import React, { useContext } from 'react';

//icon
import Remove from "../../icon/icons8-remove-24.png"

//Functions
import { split } from '../helper/functions';

//styles
import styles from "./Cart.module.css"

//context
import { CartContext } from '../../context/CartContextProvider';
const Cart = ({ data }) => {
    const { dispatch } = useContext(CartContext)
    return (
        <div className={styles.container}>
            <img className={styles.productImage} src={data.image} alt='product' />
            <div className={styles.data}>
                <h3>{split(data.title)}</h3>
                <p>{data.price} $</p>
            </div>
            <div>
                <span className={styles.quantity}>{data.quantity}</span>
            </div>

            <div className={styles.buttonContainer}>
                {
                    data.quantity === 1 ? <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: data })}><img src={Remove} alt='Remove' /></button> :
                        <button onClick={() => dispatch({ type: "DECREASE", payload: data })}>-</button>
                }

                <button onClick={() => dispatch({ type: "INCREASE", payload: data })}>+</button>


            </div>
        </div>
    );
};

export default Cart;