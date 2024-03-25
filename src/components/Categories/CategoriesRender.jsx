import { Link } from 'react-router-dom'
import categories from '../../assets/categories.json'

export function CategoriesRender() {
  return (
    <div className="flex flex-col gap-2">
      {categories.map((cat) => {
        return (
          <div className="flex flex-col text-sm" key={cat.slug}>
            <Link to={`/category/${cat.slug}`} className="hover:underline">
              {cat.name}
            </Link>
            <div className="flex flex-col ml-2">
              {cat.children.map((el) => (
                <Link
                  key={el.slug}
                  className="hover:underline"
                  to={`/category/${el.slug}`}
                >
                  {el.name}
                </Link>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
