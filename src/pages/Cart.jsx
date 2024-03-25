import { useMemo } from 'react'
import { CartForm } from '../components/Cart/CartForm'
import { CartItem } from '../components/Cart/CartItem'
import { useCartContext } from '../hooks/useCartContext'
import { CART_ACTIONS } from '../reducers/CartReducer'

export function Cart() {
  const { state, dispatch } = useCartContext()

  const totalPrice = useMemo(() => {
    return state.reduce((acc, product) => {
      return acc + product.price * product.amount
    }, 0)
  }, [state])

  return (
    <main className="flex max-w-[1200px] w-full mx-auto py-4 [&>*]:flex-1">
      <section className="flex flex-col">
        <h1 className="text-4xl font-extralight mb-4">Carrito</h1>
        <span>Precio Total: {totalPrice}</span>
        <ul className="flex flex-col gap-2">
          {state.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              handleDecrement={() =>
                dispatch({ type: CART_ACTIONS.DECREMENT, payload: product.id })
              }
              handleIncrement={() =>
                dispatch({ type: CART_ACTIONS.INCREMENT, payload: product.id })
              }
              handleDelete={(id) =>
                dispatch({ type: CART_ACTIONS.REMOVE, payload: id })
              }
            />
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-4xl font-extralight mb-4">Checkout</h2>
        <div className="px-4">
          <CartForm />
        </div>
      </section>
    </main>
  )
}
