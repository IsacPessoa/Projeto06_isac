import Header from '../../components/Header'
import ProductList from '../../components/ProductList'

import sushi from '../../assets/images/sushi.png'
import pasta from '../../assets/images/pasta.png'
import Footer from '../../components/Footer'
import { useEffect, useState } from 'react'

export type Efood = {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Efood[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <Header type="first" />
      <div className="container">
        <ProductList type="first" efood={restaurantes} />
      </div>
      <Footer />
    </>
  )
}

export default Home
