import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//icon
import Remove from "../../icon/icons8-remove-24.png"

//functions
import { split, isInCart, quantityItems } from '../helper/functions';
//style
import styles from "././Product.module.css"

//Context
import { CartContext } from '../../context/CartContextProvider';

const Product = ({ productData }) => {
    const { state, dispatch } = useContext(CartContext)
    return (
        <div className={styles.container}>
            <img src={productData.image} alt='product' className={styles.cardImage} />
            <h3>{split(productData.title)}</h3>
            <p>{productData.price} $</p>
            <div className={styles.linkContainer}>
                <Link to={`/products/${productData.id}`}>Details</Link>

                <div className={styles.buttonContainer}>

                    {
                        quantityItems(state, productData.id) === 1 &&
                        <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: productData })} className={styles.smallButton}><img src={Remove} alt='Remove' /></button>
                    }
                    {
                        quantityItems(state, productData.id) > 1 &&
                        <button onClick={() => dispatch({ type: "DECREASE", payload: productData })} className={styles.smallButton}>-</button>
                    }
                    {quantityItems(state, productData.id) > 0 && <span className={styles.counter}>{quantityItems(state, productData.id)}</span>}



                    {
                        isInCart(state, productData.id) ?
                            <button className={styles.smallButton} onClick={() => dispatch({ type: "INCREASE", payload: productData })}>+</button> :
                            <button onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}>Add To Cart</button>
                    }

                </div>
            </div>
        </div>
    );
};

export default Product;