import Button from '../Button'
import { Overlay, CartContainer, Sidebar, CartItem } from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, item) => {
      const totalItem = item.cardapio.reduce((subtotal, cardapioItem) => {
        return subtotal + cardapioItem.preco
      }, 0)
      return acumulador + totalItem
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.capa} alt={item.titulo} />
              <div>
                <h3>{item.titulo}</h3>
                {item.cardapio.map((itemCardapio) => (
                  <span key={itemCardapio.id}>R$ {itemCardapio.preco}0</span>
                ))}
              </div>
              {item.cardapio.map((itemCardapio) => (
                <button
                  key={itemCardapio.id}
                  onClick={() => removeItem(itemCardapio.id)}
                  type="button"
                />
              ))}
            </CartItem>
          ))}
        </ul>
        <p>
          Total de <span>R$ {getTotalPrice().toFixed(2)}</span>
        </p>
        <Button buttonType="button" title="Continuar para a entrega">
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}
export default Cart
