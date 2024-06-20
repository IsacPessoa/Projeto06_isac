import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { GlobalCss } from './styles'
import Home from './Pages/Home'
import Products from './Pages/Products'
import { store } from './store'
import Cart from './components/Cart'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/pratos/:id',
    element: <Products />
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalCss />
      <Cart />
      <RouterProvider router={rotas} />
    </Provider>
  )
}

export default App
