import { Skeleton } from './Skeleton'

export function ItemListSkeleton({ amount = 5 }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {Array(amount)
        .fill()
        .map((_, index) => (
          <Skeleton key={index} className="w-60 h-80" />
        ))}
    </div>
  )
}
