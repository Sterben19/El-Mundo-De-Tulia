import { useState } from 'react'
import Section from '../Common/Section'
import WelcomeProductCard from './WelcomeProductCard'
import { useEffect } from 'react'
import { getAllProductsWithLimit } from '../../../firebase/utils/products'

const generateNecesaryAmountOfImages = (products) => {
  const NECESSARY_AMOUNT = 9
  const INITIAL = products.length

  if (products.length <= 0) return []
  if (INITIAL === NECESSARY_AMOUNT) return products

  const diff = NECESSARY_AMOUNT - INITIAL
  if (diff < 0) {
    return products.slice(0, diff)
  }

  const newProducts = [...products]
  let i = newProducts.length + 1

  while (newProducts.length < NECESSARY_AMOUNT) {
    newProducts.push({
      ...products[Math.floor(Math.random() * products.length)],
      id: i++,
    })
  }

  return newProducts
}

export default function Welcome() {
  const [pageProducts, setPageProducts] = useState([])

  useEffect(() => {
    getAllProductsWithLimit(9)
      .then((res) => {
        const parsed = generateNecesaryAmountOfImages(res)
        setPageProducts(parsed)
      })
      .catch(console.error)
  }, [])

  return (
    <Section className="flex min-h-[calc(100vh-var(--nav-height))] !max-w-[1300px] w-full px-4 py-2 [&>*]:flex-1 relative">
      <div className="flex flex-col justify-center">
        <h1 className="text-2xl md:text-5xl font-extralight">
          Bienvenidos al mundo de Tulia!
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          recusandae laboriosam magnam exercitationem deserunt blanditiis, eaque
          facere{' '}
        </p>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 lg:translate-x-0 lg:static opacity-30 lg:opacity-100 flex items-center w-full justify-center">
        <div className="grid grid-cols-3 grid-rows-3 w-max gap-2">
          {pageProducts.map((el, i) => (
            <WelcomeProductCard
              key={el.id}
              src={el.image}
              name={el.name}
              animationDelay={`${animationMapper[i + 1]}ms`}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}

const animationMapper = {
  1: 1,
  2: 100,
  3: 200,
  4: 100,
  5: 200,
  6: 300,
  7: 200,
  8: 300,
  9: 400,
}
