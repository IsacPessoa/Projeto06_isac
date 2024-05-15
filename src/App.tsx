import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from './components/Header'
import { GlobalCss } from './styles'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Header />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div>
        <RouterProvider router={rotas} />
      </div>
    </>
  )
}

export default App
