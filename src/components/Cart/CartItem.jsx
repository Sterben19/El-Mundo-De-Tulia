import { Button } from 'react-bootstrap'

export function CartItem({
  product,
  handleIncrement,
  handleDecrement,
  handleDelete,
  withButtons = true,
}) {
  return (
    <article className="flex rounded-sm p-2 border border-neutral-500">
      <img
        className="w-40 h-3w-40 rounded-sm"
        src={product.image}
        alt={product.name}
      />
      <div className="flex flex-col w-full items-center">
        <div className="flex w-full relative justify-center">
          <h2 className="text-xl font-extralight self-center">
            {product.name}
          </h2>
          {withButtons && (
            <Button
              variant="light"
              className="text-red-500 absolute right-0 top-0"
              onClick={() => handleDelete(product.id)}
            >
              x
            </Button>
          )}
        </div>
        <p>${product.price}</p>
        <p>Cantidad: {product.amount}</p>
        {withButtons && (
          <div className="flex gap-2 mt-auto">
            <Button variant="light" onClick={handleDecrement}>
              -
            </Button>
            <Button variant="light" onClick={handleIncrement}>
              +
            </Button>
          </div>
        )}
      </div>
    </article>
  )
}
