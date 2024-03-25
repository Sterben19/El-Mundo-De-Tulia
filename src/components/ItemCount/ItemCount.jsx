import { useState } from 'react'
import Button from 'react-bootstrap/Button'

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial)

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1)
    }
  }

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className="Counter d-flex justify-content-center align-items-center">
      <div className="Controls">
        <Button
          variant="outline-secondary"
          className="Button"
          onClick={decrement}
        >
          -
        </Button>
        <h4 className="Number">{quantity}</h4>
        <Button
          variant="outline-secondary"
          className="Button"
          onClick={increment}
        >
          +
        </Button>
      </div>
      <div>
        <Button
          variant="outline-secondary"
          className="Button"
          onClick={() => onAdd(quantity)}
          disabled={!stock}
        >
          Agregar al carrito
        </Button>
      </div>
    </div>
  )
}

export default ItemCount
