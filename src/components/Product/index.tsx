import Button from '../Button'
import {
  AllDescription,
  Card,
  Decription,
  InitialBar,
  Nota,
  Title,
  Infos
} from './styles'

import estrela from '../../assets/images/estrela.svg'
import Tag from '../Tag'

type Props = {
  title: string
  nota: string
  description: string
  origens: string[]
  image: string
  destaque?: string
}

const Product = ({
  title,
  description,
  origens,
  image,
  nota,
  destaque
}: Props) => (
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
      <Button type="link" title="Saiba mais">
        Saiba mais
      </Button>
    </AllDescription>
  </Card>
)

export default Product
