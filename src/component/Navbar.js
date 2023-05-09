import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//icon
import basket from "../icon/basket.png.webp"
//Context
import { CartContext } from '../context/CartContextProvider';

//style
import styles from './Navbar.module.css'

const Navbar = () => {
    const { state } = useContext(CartContext)
    return (
        <div className={styles.mainContainer}>

            <div className={styles.navContainer}>
                <Link className={styles.productContainer} to={`/products`} >Products</Link>
                <div className={styles.iconContainer}>
                    <Link to={`/userbasket`}><img src={basket} alt='basket' /></Link>
                    <span>{state.counterItems}</span>
                </div>
            </div>

        </div>
    );
};

export default Navbar;