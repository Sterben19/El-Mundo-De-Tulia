import { createContext, useReducer } from 'react'
import { CartReducer, initialCartReducerState } from '../reducers/CartReducer'

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialCartReducerState)

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}
