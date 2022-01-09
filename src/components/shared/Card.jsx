export default function Card({ children, display }) {
  return (
  <div className={`card ${display && "reverse"}`}>
    {children}
  </div>
  )
}
