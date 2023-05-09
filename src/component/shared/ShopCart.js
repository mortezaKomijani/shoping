import React, { useContext } from 'react';
//Component
import Cart from './Cart';
//styles
import styles from "./ShopCart.module.css"

//Context
import { CartContext } from '../../context/CartContextProvider';
import { Link } from 'react-router-dom';

const ShopCart = () => {
    const { state, dispatch } = useContext(CartContext)
    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {
                    state.selectedItems.map(item => <Cart key={item.id} data={item} />)
                }
            </div>

            {
                state.counterItems && <div className={styles.payments}>
                    <p><span>Total Items :</span>{state.counterItems}</p>
                    <p><span>Total Price :</span>{state.totalItems} $</p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.checkout} onClick={() => dispatch({ type: "CHECKOUT" })}>CheckOut</button>
                        <button className={styles.clear} onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
                    </div>
                </div>

            }

            {
                state.checkout && <div className={styles.complete}>
                    <p>Checked Out Successfully</p>
                    <Link to={`/products`}>Buy More</Link>
                </div>
            }

            {
                !state.checkout && state.counterItems === 0 && <div className={styles.complete}>
                    <p>Want To Buy</p>
                    <Link to={`/products`}>Go To Shop</Link>
                </div>
            }




        </div>
    );
};

export default ShopCart;