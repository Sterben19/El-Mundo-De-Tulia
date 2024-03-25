export default function WelcomeProductCard({ src, name, animationDelay }) {
  return (
    <article
      style={{ animationDelay }}
      className="overflow-hidden animate-appear [animation-fill-mode:backwards]"
    >
      <img className="flex h-44 w-44 object-cover" src={src} alt={name} />
    </article>
  )
}
