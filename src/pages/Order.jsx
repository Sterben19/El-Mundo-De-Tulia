import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { getOrderById } from '../../firebase/utils/orders'
import { CartItem } from '../components/Cart/CartItem'

export function Order() {
  const { orderId } = useParams()

  const { data, error } = useFetch({
    func: () => getOrderById(orderId),
    dependencies: [orderId],
  })

  return (
    <main className="mx-auto flex flex-col max-w-[1200px]">
      <h1 className="text-4xl font-extralight">Número de orden: {orderId}</h1>
      <Render error={error} products={data.products} />
    </main>
  )
}

const Render = ({ error, products }) => {
  if (error)
    return <span>Ocurrió un error, es posible que la orden no exista.</span>
  if (!products) return null
  return (
    <div className="max-w-[500px] flex flex-col gap-2 mt-4">
      {products.map((el) => (
        <CartItem key={el.id} product={el} withButtons={false} />
      ))}
    </div>
  )
}
