import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { useCartContext } from '../../hooks/useCartContext'
import { CART_ACTIONS } from '../../reducers/CartReducer'

export function AddToCart({ product }) {
  const [amount, setAmount] = useState(1)
  const { dispatch } = useCartContext()

  const handleAdd = () => {
    setAmount((prev) => prev + 1)
  }
  const handleRemove = () => {
    if (amount <= 1) return
    setAmount((prev) => prev - 1)
  }

  const handleCart = () => {
    dispatch({ type: CART_ACTIONS.ADD, payload: { ...product, amount } })
    setAmount(1)
    toast.success('El producto se agregó al carrito correctamente.')
  }

  return (
    <div className="flex gap-2">
      <Button variant="light" onClick={handleRemove}>
        -
      </Button>
      <Button variant="light" onClick={handleCart}>
        Agregar {amount} al carrito
      </Button>
      <Button variant="light" onClick={handleAdd}>
        +
      </Button>
    </div>
  )
}
