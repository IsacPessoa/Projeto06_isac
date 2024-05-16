import logo from '../../assets/images/logo.svg'
import twitter from '../../assets/images/twitter.svg'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import { Copy, FooterBar, List } from './styles'

const Footer = () => (
  <FooterBar>
    <div className="container">
      <img src={logo} alt="efood" />
      <List>
        <li>
          <a href="#">
            <img src={instagram} alt="instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={facebook} alt="facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={twitter} alt="instagram" />
          </a>
        </li>
      </List>
      <Copy>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
        estabelecimento contratado.{' '}
      </Copy>
    </div>
  </FooterBar>
)

export default Footer
