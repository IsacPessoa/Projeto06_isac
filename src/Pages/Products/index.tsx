import Header from '../../components/Header'
import ProductList from '../../components/ProductList'

import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import { Efood } from '../Home'
import { useEffect, useState } from 'react'

const Products = () => {
  const [restaurantes, setRestaurantes] = useState<Efood[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <Header type="secondary" />
      <Banner />
      <div className="container">
        <ProductList type="secondary" efood={restaurantes} />
      </div>
      <Footer />
    </>
  )
}

export default Products
