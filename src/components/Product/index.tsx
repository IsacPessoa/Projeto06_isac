import Button from '../Button'
import {
  AllDescription,
  Card,
  Decription,
  InitialBar,
  Nota,
  Title,
  Infos,
  CardSecondary,
  Modal,
  ModalContent,
  ImagePrato,
  Close,
  AllDescription2,
  CardContainer
} from './styles'

import estrela from '../../assets/images/estrela.svg'
import Tag from '../Tag'
import { useState } from 'react'
import close from '../../assets/images/close.png'
import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'
import { Efood } from '../../Pages/Home'

type Props = {
  efood: Efood
  type: 'first' | 'secondary'
}

const Product = ({ efood, type }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(efood))
    dispatch(open())
    setModalEstaAberto(false)
  }

  if (type === 'first' && efood.tipo) {
    return (
      <CardContainer>
        <Card>
          <img src={efood.capa} alt={efood.titulo} />
          <Infos>
            <Tag key={efood.tipo}>{efood.tipo}</Tag>
            {efood.destacado && <Tag key="destaque">Destaque</Tag>}
          </Infos>
          <AllDescription>
            <InitialBar>
              <Title>{efood.titulo}</Title>
              <Nota>
                {efood.avaliacao}
                <img src={estrela} alt="Avaliação" />
              </Nota>
            </InitialBar>
            <Decription>{efood.descricao}</Decription>
            <Button
              to={`/pratos/${efood.id}`}
              buttonType="link"
              title="Saiba mais"
            >
              Saiba mais
            </Button>
          </AllDescription>
        </Card>
      </CardContainer>
    )
  }

  const cardapioItem = efood.cardapio[0]

  return (
    <>
      <CardSecondary>
        <img src={cardapioItem.foto} alt={cardapioItem.nome} />
        <AllDescription2>
          <Title>{cardapioItem.nome}</Title>
          <Decription>{cardapioItem.descricao}</Decription>
          <Button
            onClick={() => setModalEstaAberto(true)}
            buttonType="button"
            title="Saiba mais"
          >
            Mais detalhes
          </Button>
        </AllDescription2>
      </CardSecondary>

      <Modal className={modalEstaAberto ? 'visivel' : ''}>
        <ModalContent className="container">
          <ImagePrato src={cardapioItem.foto} alt="imagem do prato" />
          <div>
            <h4>{cardapioItem.nome}</h4>
            <p>{cardapioItem.descricao}</p>
            <span>
              Serve: de {cardapioItem.porcao} <br />
            </span>
            <Button
              buttonType="button"
              title="adicionar ao carrinho"
              onClick={addToCart}
            >
              Adicionar ao carrinho - R$ {cardapioItem.preco.toFixed(2)}{' '}
            </Button>
          </div>
          <Close
            onClick={() => setModalEstaAberto(false)}
            src={close}
            alt="ícone de fechar"
          />
        </ModalContent>
        <div
          onClick={() => setModalEstaAberto(false)}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}

export default Product
