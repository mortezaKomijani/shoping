import React, { useEffect, useState } from 'react';

//api
import { getProducts } from '../servises/api';


export const ProductContext = React.createContext()

const ProductContextProvider = (props) => {

    const [data, setData] = useState([])

    const fetchData = async () => {
        const product = await getProducts()
        setData(product)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <ProductContext.Provider value={data}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;