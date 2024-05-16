import {
  HeaderBar,
  HeaderBarSecondary,
  Image,
  ImageSecondary,
  Title
} from './styles'

import logo from '../../assets/images/logo.svg'

type Props = {
  type: 'first' | 'secondary'
}

const Header = ({ type }: Props) => {
  if (type === 'first') {
    return (
      <HeaderBar>
        <Image src={logo} alt="efood" />
        <Title>
          Viva experiências gastronômicas <br /> no conforto da sua casa
        </Title>
      </HeaderBar>
    )
  }

  return (
    <HeaderBarSecondary>
      <div className="container">
        <p>Restaurantes</p>
        <ImageSecondary src={logo} alt="efood" />
        <p>0 - Produto(s) no carrinho</p>
      </div>
    </HeaderBarSecondary>
  )
}
export default Header
