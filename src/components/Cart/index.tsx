import * as Yup from 'yup'
import Button from '../Button'
import {
  Overlay,
  CartContainer,
  Sidebar,
  CartItem,
  Row,
  InputGroup,
  ButtonGroup,
  TextEmptyCart
} from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { useState } from 'react'
import Card from '../Card'
import { useFormik } from 'formik'
import { usePurchaseMutation } from '../../services/api'

import InputMask from 'react-input-mask'
import { Navigate } from 'react-router-dom'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()
  const [checkout, setCheckout] = useState('checkout')

  const [purchase, { isLoading, isError, data }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      name: '',
      address: '',
      city: '',
      portalCode: '',
      number: '',
      cardFullName: '',
      cardNumber: '',
      cardCode: '',
      month: '',
      year: '',
      complement: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'o nome precisa de 5 caracteres')
        .required('o campo é obrigatório!'),
      address: Yup.string().required('o campo é obrigatório!'),
      city: Yup.string().required('o campo é obrigatório!'),
      portalCode: Yup.string().required('o campo é obrigatório!'),
      number: Yup.string().required('o campo é obrigatório!'),

      //Dados de Pagamento
      cardFullName: Yup.string().when((values, schema) =>
        checkout === 'pagamento'
          ? schema.required('o campo é obrigatório!')
          : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        checkout === 'pagamento'
          ? schema.required('o campo é obrigatório!')
          : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        checkout === 'pagamento'
          ? schema.required('o campo é obrigatório!')
          : schema
      ),
      month: Yup.string().when((values, schema) =>
        checkout === 'pagamento'
          ? schema.required('o campo é obrigatório!')
          : schema
      ),
      year: Yup.string().when((values, schema) =>
        checkout === 'pagamento'
          ? schema.required('o campo é obrigatório!')
          : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.name,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.portalCode,
            number: values.number,
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardFullName,
            number: values.cardNumber,
            code: values.cardCode,
            expires: {
              month: values.month,
              year: values.year
            }
          }
        },
        products: [
          {
            id: 1,
            price: 10
          }
        ]
      })
    }
  })

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

  const goToCheckout = () => {
    setCheckout('confirmation')
  }

  const goToCart = () => {
    setCheckout('checkout')
  }

  const goToOverlay = () => {
    goToCart()
    closeCart()
  }

  const goToPaymant = async () => {
    const errors = await form.validateForm()

    if (Object.keys(errors).length === 0) {
      setCheckout('pagamento')
      form.handleSubmit()
    } else {
      form.setTouched({
        name: true,
        address: true,
        city: true,
        portalCode: true,
        number: true,
        cardFullName: true,
        cardNumber: true,
        cardCode: true,
        month: true,
        year: true
      })
    }
  }

  const goToFinalization = async () => {
    const errors = await form.validateForm()

    if (Object.keys(errors).length === 0) {
      setCheckout('finalization')
      form.handleSubmit()
    } else {
      form.setTouched({
        name: true,
        address: true,
        city: true,
        portalCode: true,
        number: true,
        cardFullName: true,
        cardNumber: true,
        cardCode: true,
        month: true,
        year: true
      })
    }
  }

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={goToOverlay} />
      <Sidebar>
        {checkout === 'checkout' && (
          <>
            {items.length > 0 ? (
              <>
                <ul>
                  {items.map((item) => (
                    <CartItem key={item.id}>
                      <img src={item.capa} alt={item.titulo} />
                      <div>
                        <h3>{item.titulo}</h3>
                        {item.cardapio.map((itemCardapio) => (
                          <span key={itemCardapio.id}>
                            R$ {itemCardapio.preco}0
                          </span>
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
                <Button
                  onClick={goToCheckout}
                  buttonType="button"
                  title="Continuar para a entrega"
                >
                  Continuar com a entrega
                </Button>
              </>
            ) : (
              <TextEmptyCart>
                O carrinho está vazio, adicione pelo menos um produto para
                continuar com a compra
              </TextEmptyCart>
            )}
          </>
        )}
        {checkout === 'confirmation' && (
          <form onSubmit={form.handleSubmit} className="container">
            <Card title="Entrega">
              <>
                <Row>
                  <InputGroup>
                    <label htmlFor="name">Quem irá receber</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={form.values.name}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('name') ? 'error' : ''}
                    />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="address">Endereço</label>
                    <input
                      id="address"
                      type="text"
                      name="address"
                      value={form.values.address}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('address') ? 'error' : ''}
                    />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="city">Cidade</label>
                    <input
                      id="city"
                      type="text"
                      name="city"
                      value={form.values.city}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('city') ? 'error' : ''}
                    />
                  </InputGroup>
                  <InputGroup className="cep-number">
                    <div>
                      <label htmlFor="portalCode">CEP</label>
                      <InputMask
                        id="portalCode"
                        type="text"
                        name="portalCode"
                        value={form.values.portalCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        mask="99999-999"
                        className={
                          checkInputHasError('portalCode') ? 'error' : ''
                        }
                      />
                    </div>
                    <div>
                      <label htmlFor="number">Número</label>
                      <input
                        id="number"
                        type="text"
                        name="number"
                        value={form.values.number}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('number') ? 'error' : ''}
                      />
                    </div>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="complement">Complemento (opcional)</label>
                    <input
                      id="complement"
                      type="text"
                      value={form.values.complement}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </InputGroup>
                  <ButtonGroup>
                    <Button
                      onClick={goToPaymant}
                      title="pagamento"
                      buttonType="button"
                    >
                      Continuar para o pagamento
                    </Button>
                    <Button
                      onClick={goToCart}
                      title="voltarAoCarrinho"
                      buttonType="button"
                    >
                      Voltar para o carrinho
                    </Button>
                  </ButtonGroup>
                </Row>
              </>
            </Card>
          </form>
        )}
        {checkout === 'pagamento' && (
          <>
            <form onSubmit={form.handleSubmit} className="container">
              <h3>Pagamento - Valor a pagar R$ {getTotalPrice().toFixed(2)}</h3>
              <Row>
                <InputGroup>
                  <label htmlFor="cardFullName">Nome no cartão</label>
                  <input
                    id="cardFullName"
                    type="text"
                    name="cardFullName"
                    value={form.values.cardFullName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('cardFullName') ? 'error' : ''
                    }
                  />
                </InputGroup>
                <InputGroup className="cep-number">
                  <div>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <InputMask
                      id="cardNumber"
                      type="text"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      mask="9999 9999 9999 9999"
                      className={
                        checkInputHasError('cardNumber') ? 'error' : ''
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor="cardCode">CVV</label>
                    <InputMask
                      id="cardCode"
                      type="text"
                      name="cardCode"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      mask="999"
                      className={checkInputHasError('cardCode') ? 'error' : ''}
                    />
                  </div>
                </InputGroup>
                <InputGroup className="cep-number">
                  <div>
                    <label htmlFor="month">Mês de vencimento</label>
                    <InputMask
                      id="month"
                      type="text"
                      name="month"
                      value={form.values.month}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      mask="99"
                      className={checkInputHasError('month') ? 'error' : ''}
                    />
                  </div>
                  <div>
                    <label htmlFor="year">Ano de vencimento</label>
                    <InputMask
                      id="year"
                      type="text"
                      name="year"
                      value={form.values.year}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      mask="99"
                      className={checkInputHasError('year') ? 'error' : ''}
                    />
                  </div>
                </InputGroup>
                <ButtonGroup>
                  <Button
                    onClick={goToFinalization}
                    title="pagamento"
                    buttonType="button"
                  >
                    Finalizar pagamento
                  </Button>
                  <Button
                    onClick={goToCheckout}
                    title="voltarAoCarrinho"
                    buttonType="button"
                  >
                    Voltar para a edição de endereço
                  </Button>
                </ButtonGroup>
              </Row>
            </form>
          </>
        )}
        {checkout === 'finalization' && (
          <div className="container">
            {data ? (
              <h3>Pedido realizado - {data.orderId}</h3>
            ) : (
              <h3>Carregando pedido</h3>
            )}
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.{' '}
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>

            <Button
              onClick={goToOverlay}
              title="voltarAoCarrinho"
              buttonType="button"
            >
              Concluir
            </Button>
          </div>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
