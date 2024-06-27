import Header from '../../components/Header'
import ProductList from '../../components/ProductList'

import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import { Efood } from '../Home'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Products = () => {
  // const [restaurantes, setRestaurantes] = useState<Efood[]>([])

  const { id } = useParams()

  const [prato, setPrato] = useState<Efood | null>(null)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setPrato(res))
  }, [id])

  if (!prato) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header type="secondary" />
      <Banner efood={prato ? [prato] : []} />
      <div className="container">
        <ProductList type="secondary" efood={prato ? [prato] : []} />
      </div>
      <Footer />
    </>
  )
}

export default Products
