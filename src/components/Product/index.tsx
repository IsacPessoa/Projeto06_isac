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
  AllDescription2
} from './styles'

import estrela from '../../assets/images/estrela.svg'
import Tag from '../Tag'
import { useState } from 'react'
import close from '../../assets/images/close.png'

type Props = {
  title: string
  nota?: number
  description: string
  origens?: string
  destaque?: boolean
  image: string
  type: 'first' | 'secondary'
  modalTitle?: string
  modalDescription?: string
  modalPorcao?: string
  modalPreco?: number
  modalImage?: string
}

const Product = ({
  title,
  description,
  origens,
  image,
  nota,
  type,
  destaque,
  modalTitle,
  modalDescription,
  modalImage,
  modalPorcao,
  modalPreco
}: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  if (type === 'first' && origens) {
    return (
      <Card>
        <img src={image} alt={title} />
        <Infos>
          <Tag key={origens}>{origens}</Tag>
          {destaque && <Tag key="destaque">Destaque</Tag>}
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
          <Button to="/pratos" buttonType="link" title="Saiba mais">
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
        <AllDescription2>
          <Title>{title}</Title>
          {nota}
          <Decription>{description}</Decription>
          <Button
            onClick={() => setModalEstaAberto(true)}
            to="/pratos"
            buttonType="button"
            title="Saiba mais"
          >
            Mais detalhes
          </Button>
        </AllDescription2>
      </CardSecondary>

      <Modal className={modalEstaAberto ? 'visivel' : ''}>
        <ModalContent className="container">
          <ImagePrato src={modalImage} alt="imagem do prato" />
          <div>
            <h4>{modalTitle}</h4>
            <p>{modalDescription}</p>
            <span>
              Serve: de {modalPorcao} <br />
            </span>
            <Button buttonType="button" title="adicionar ao carrinho">
              Adicionar ao carrinho - R${' '}
              {modalPreco !== undefined ? modalPreco.toString() : ''}0
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
