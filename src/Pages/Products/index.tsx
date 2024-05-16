import Header from '../../components/Header'
import ProductList from '../../components/ProductList'
import Prato from '../../models/Prato'

import pizza from '../../assets/images/pizza.png'
import Banner from '../../components/Banner'

const pratos: Prato[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    origens: ['detaque da semana', 'Japonesa'],
    nota: '',
    image: pizza
  },
  {
    id: 2,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    origens: ['Italiana'],
    nota: '',
    image: pizza
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    origens: ['Italiana'],
    nota: '',
    image: pizza
  },
  {
    id: 4,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    origens: ['Italiana'],
    nota: '',
    image: pizza
  },
  {
    id: 5,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    origens: ['Italiana'],
    nota: '',
    image: pizza
  },
  {
    id: 6,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    origens: ['Italiana'],
    nota: '',
    image: pizza
  }
]

const Home = () => (
  <>
    <Header type="secondary" />
    <Banner />
    <div className="container">
      <ProductList type="secondary" pratos={pratos} />
    </div>
  </>
)

export default Home
