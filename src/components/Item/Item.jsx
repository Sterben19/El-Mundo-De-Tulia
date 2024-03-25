import { Link } from 'react-router-dom'

const Item = ({ name, image, id, price }) => {
  return (
    <Link
      role="article"
      to={`/item/${id}`}
      className="grid grid-rows-[2fr,.8fr] rounded-md overflow-hidden w-max bg-rose group"
    >
      <picture className="h-full p-4 overflow-hidden">
        <img
          src={image}
          alt={name}
          height={250}
          width={250}
          className="object-cover rounded-md h-full"
        />
      </picture>
      <footer className="flex flex-col items-center font-extralight">
        <h3 className="font-extralight text-2xl text-center">{name}</h3>
        <span>${price}</span>
        <span className="mt-auto mb-2 group-hover:underline">Ver más</span>
      </footer>
    </Link>
  )
}

export default Item
