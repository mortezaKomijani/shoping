import React, { useReducer } from 'react';

const initialState = {
    selectedItems: [],
    counterItems: 0,
    totalItems: 0,
    checkout: false
}


const sumItems = (items) => {
    const counter = items.reduce((item, product) => item + product.quantity, 0)
    const total = items.reduce((item, product) => item + product.price * product.quantity, 0).toFixed(2)

    return {
        counterItems: counter,
        totalItems: total
    }
}


const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1
                })
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                ...sumItems(state.selectedItems),
                checkout: false
            }
        case "REMOVE_ITEM":
            const newSelectItems = state.selectedItems.filter(item => item.id !== action.payload.id)

            return {
                ...state,
                selectedItems: [...newSelectItems],
                ...sumItems(newSelectItems)

            }

        case "INCREASE":
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[indexI].quantity++

            return {
                ...state,
                ...sumItems(state.selectedItems)
            }

        case "DECREASE":
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[indexD].quantity--

            return {
                ...state,
                ...sumItems(state.selectedItems)
            }

        case "CHECKOUT":
            return {
                selectedItems: [],
                counterItems: 0,
                totalItems: 0,
                checkout: true
            }
        case "CLEAR":
            return {
                selectedItems: [],
                counterItems: 0,
                totalItems: 0,
                checkout: false
            }

        default:
            return state
    }

}

export const CartContext = React.createContext()

const CartContextProvider = (props) => {

    const [state, dispatch] = useReducer(cartReducer, initialState)


    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {props.children}

        </CartContext.Provider>
    );
};

export default CartContextProvider;