import {
  HeaderBar,
  HeaderBarSecondary,
  Image,
  ImageSecondary,
  Title
} from './styles'

import logo from '../../assets/images/logo.svg'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

type Props = {
  type: 'first' | 'secondary'
}

const Header = ({ type }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  if (type === 'first') {
    return (
      <HeaderBar>
        <Image href="/">
          <img src={logo} alt="efood" />
        </Image>
        <Title>
          Viva experiências gastronômicas <br /> no conforto da sua casa
        </Title>
      </HeaderBar>
    )
  }

  return (
    <HeaderBarSecondary>
      <div className="container">
        <a href="/">Restaurantes</a>
        <ImageSecondary href="/">
          <img src={logo} alt="efood" />
        </ImageSecondary>
        <p onClick={openCart}>{items.length} - Produto(s) no carrinho</p>
      </div>
    </HeaderBarSecondary>
  )
}
export default Header
