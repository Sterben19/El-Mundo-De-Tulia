import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'

export function useCartContext() {
  const c = useContext(CartContext)

  return c
}
