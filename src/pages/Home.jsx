/* eslint-disable react-hooks/exhaustive-deps */
import Welcome from '../components/Welcome/Welcome'
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer'

export default function Home() {
  return (
    <main className="flex flex-col my-1">
      <Welcome />
      <ItemListContainer />
    </main>
  )
}
