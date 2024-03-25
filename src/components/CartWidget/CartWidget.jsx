import { BsFillBasket2Fill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../hooks/useCartContext'
import { useMemo } from 'react'

const CartWidget = () => {
  const { state } = useCartContext()

  const totalAmount = useMemo(() => {
    return state.reduce((acc, product) => {
      return acc + product.amount
    }, 0)
  }, [state])

  return (
    <div className="relative w-max">
      <Link to="/cart">
        <BsFillBasket2Fill />
        {totalAmount >= 1 && (
          <div className="bg-red-500 aspect-square w-full text-center absolute -bottom-4 -right-2 p-px text-xs rounded-full">
            {totalAmount}
          </div>
        )}
      </Link>
    </div>
  )
}

export default CartWidget
