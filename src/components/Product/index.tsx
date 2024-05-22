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
  Close
} from './styles'

import estrela from '../../assets/images/estrela.svg'
import Tag from '../Tag'
import { useState } from 'react'
import pizza from '../../assets/images/pizza.png'
import close from '../../assets/images/close.png'

type Props = {
  title: string
  nota?: string
  description: string
  origens: string[]
  image: string
  type: 'first' | 'secondary'
}

const Product = ({ title, description, origens, image, nota, type }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  if (type === 'first') {
    return (
      <Card>
        <img src={image} alt={title} />
        <Infos>
          {origens.map((origem) => (
            <Tag key={origem}>{origem}</Tag>
          ))}
        </Infos>
        <AllDescription>
          <InitialBar>
            <Title>{title}</Title>
            <Nota>
              {nota}
              <img src={estrela} alt="Avaliação" />
            </Nota>
          </InitialBar>
          <Decription>{description}</Decription>
          <Button to="/pratos" type="link" title="Saiba mais">
            Saiba mais
          </Button>
        </AllDescription>
      </Card>
    )
  }

  return (
    <>
      <CardSecondary>
        <img src={image} alt={title} />
        <AllDescription>
          <Title>{title}</Title>
          {nota}
          <Decription>{description}</Decription>
          <Button
            onClick={() => setModalEstaAberto(true)}
            to="/pratos"
            type="button"
            title="Saiba mais"
          >
            Mais detalhes
          </Button>
        </AllDescription>
      </CardSecondary>
      <Modal className={modalEstaAberto ? 'visivel' : ''}>
        <ModalContent className="container">
          <ImagePrato src={pizza} alt="imagem do prato" />
          <div>
            <h4>Pizza Marguerita</h4>
            <p>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião.
            </p>
            <span>
              Serve: de 2 a 3 pessoas <br />
            </span>
            <Button type="button" title="adicionar ao carrinho">
              Adicionar ao carrinho - R$ 60,90
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
