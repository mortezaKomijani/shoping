import React, { useContext } from 'react';
//Component
import Product from './shared/Product';

//Context
import { ProductContext } from '../context/ProductContextProvider';

//style
import styles from "./Store.module.css"



const Store = () => {

    const data = useContext(ProductContext)

    return (
        <div className={styles.container}>

            {
                data.length ?
                    data.map(item => <Product key={item.id} productData={item} />) :
                    <h1>Loading... :))</h1>
            }

        </div>
    );
};

export default Store;