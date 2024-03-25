export function Skeleton({ className }) {
  return (
    <div className={`bg-neutral-400 animate-pulse ${className ?? ''}`}></div>
  )
}
