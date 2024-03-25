import { useParams } from 'react-router-dom'
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer'
import { useCallback, useMemo } from 'react'
import { getProductsByCategory } from '../../firebase/utils/products'
import { CategoriesSidebar } from '../components/Categories/CategoriesSidebar'
import categories from '../assets/categories.json'
import { CategoriesOffCanvas } from '../components/Categories/CategoriesOffCanvas'

export function Category() {
  const { categoryId } = useParams()

  const category = useMemo(() => {
    if (!categoryId) return null
    const category = categories.find((cat) => cat.slug === categoryId)
    if (category) return category
    return categories.reduce((acc, cat) => {
      const subCategory = cat.children.find((sub) => sub.slug === categoryId)
      if (subCategory) {
        return subCategory
      }
      return acc
    }, null)
  }, [categoryId])

  const getProducts = useCallback(() => {
    return getProductsByCategory(categoryId).catch(console.error)
  }, [categoryId])

  return (
    <div className="flex">
      <CategoriesSidebar />
      <main className="flex flex-col max-w-[1200px] w-full mx-auto py-2 md:px-2">
        <CategoriesOffCanvas />
        <h1 className="text-4xl font-extralight">Categoría:</h1>
        <span className="text-2xl font-extralight mb-4">
          {category && category.name}
        </span>
        <ItemListContainer greetings="" key={categoryId} fn={getProducts} />
      </main>
    </div>
  )
}
