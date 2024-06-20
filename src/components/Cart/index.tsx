import Button from '../Button'
import { Overlay, CartContainer, Sidebar, CartItem } from './styles'

import pizza from '../../assets/images/pizza.png'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <Sidebar>
      <ul>
        <CartItem>
          <img src={pizza} />
          <div>
            <h3>Nome do prato</h3>
            <span>R$ 60,90</span>
          </div>
          <button type="button" />
        </CartItem>
        <CartItem>
          <img src={pizza} />
          <div>
            <h3>Nome do prato</h3>
            <span>R$ 60,90</span>
          </div>
          <button type="button" />
        </CartItem>
        <CartItem>
          <img src={pizza} />
          <div>
            <h3>Nome do prato</h3>
            <span>R$ 60,90</span>
          </div>
          <button type="button" />
        </CartItem>
      </ul>
      <p>
        Total de <span>R$ 60,90</span>
      </p>
      <Button buttonType="button" title="Continuar para a entrega">
        Continuar com a entrega
      </Button>
    </Sidebar>
  </CartContainer>
)

export default Cart
