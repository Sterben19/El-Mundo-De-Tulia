export function CategoriesMobileButton({ handleClick }) {
  return (
    <button
      className="absolute top-[calc(var(--nav-height)-1px)] right-0 px-3 py-1 rounded-b-lg bg-rose md:hidden"
      onClick={handleClick}
    >
      Categorías
    </button>
  )
}
