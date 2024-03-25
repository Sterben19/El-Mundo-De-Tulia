import { CategoriesRender } from './CategoriesRender'

export function CategoriesSidebar() {
  return (
    <aside className="md:flex flex-col overflow-y-auto max-w-[250px] w-full hidden">
      <div className="bg-rose max-w-[250px] px-2 max-h-screen py-[var(--nav-height)] fixed top-0 left-0 overflow-y-auto">
        <h4 className="text-xl font-light mb-2">Categorías</h4>
        <CategoriesRender />
      </div>
    </aside>
  )
}
