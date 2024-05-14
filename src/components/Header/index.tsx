import { HeaderBar, Image, Title } from './styles'

import logo from '../../assets/images/logo.svg'

const Header = () => (
  <HeaderBar>
    <Image src={logo} alt="efood" />
    <Title>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </Title>
  </HeaderBar>
)

export default Header
