import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from './components/Header'
import { GlobalCss } from './styles'
import ProductList from './components/ProductList'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ProductList />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <div className="container">
        <RouterProvider router={rotas} />
      </div>
    </>
  )
}

export default App
