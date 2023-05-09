import React, { useContext } from 'react';

import { Link, useParams } from 'react-router-dom';
//Context
import { ProductContext } from '../context/ProductContextProvider';
//styles
import styles from "./Details.module.css"

const Details = () => {

    const data = useContext(ProductContext)

    const params = useParams()
    const id = params.id

    const product = data[id - 1]

    const { image, title, category, description, price } = product

    return (
        <div className={styles.container} >
            <img className={styles.image} src={image} alt='product' />
            <div className={styles.textContainer}>
                <h1>{title}</h1>
                <h3 className={styles.description}>{description}</h3>
                <p className={styles.category}>category: {category}</p>

                <div className={styles.buttonContainer}>
                    <span className={styles.price}>{price} $</span>
                    <Link to={`/products`}>Back To Shop</Link>
                </div>
            </div>
        </div>
    );
};

export default Details;