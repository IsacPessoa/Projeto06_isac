import Button from '../Button'
import {
  AllDescription,
  Card,
  Decription,
  InitialBar,
  Nota,
  Title,
  Infos,
  CardSecondary
} from './styles'

import estrela from '../../assets/images/estrela.svg'
import Tag from '../Tag'

type Props = {
  title: string
  nota?: string
  description: string
  origens: string[]
  image: string
  type: 'first' | 'secondary'
}

const Product = ({ title, description, origens, image, nota, type }: Props) => {
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
    <CardSecondary>
      <img src={image} alt={title} />
      <AllDescription>
        <Title>{title}</Title>
        {nota}
        <Decription>{description}</Decription>
        <Button to="/pratos" type="link" title="Saiba mais">
          Adicionar ao carrinho
        </Button>
      </AllDescription>
    </CardSecondary>
  )
}

export default Product
