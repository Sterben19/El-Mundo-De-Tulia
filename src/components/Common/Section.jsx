export default function Section({ className = '', children, ...props }) {
  return (
    <section
      className={`max-w-[1200px] w-full my-2 mx-auto ${className ?? ''}`}
      {...props}
    >
      {children}
    </section>
  )
}
