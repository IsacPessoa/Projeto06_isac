import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { GlobalCss } from './styles'
import Home from './Pages/Home'
import Products from './Pages/Products'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/pratos',
    element: <Products />
  }
])

function App() {
  return (
    <>
      <GlobalCss />

      <RouterProvider router={rotas} />
    </>
  )
}

export default App
