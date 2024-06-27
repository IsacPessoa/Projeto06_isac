import { Image, Subtitle, Title } from './styles'

import { Efood } from '../../Pages/Home'

export type Props = {
  efood: Efood[]
}

const Banner = ({ efood = [] }: Props) => {
  return (
    <div>
      {efood.map((efoodItem) => (
        <Image
          key={efoodItem.capa}
          style={{ backgroundImage: `url(${efoodItem.capa})` }}
        >
          <div className="container">
            <Subtitle>{efoodItem.tipo}</Subtitle>
            <Title>{efoodItem.titulo}</Title>
          </div>
        </Image>
      ))}
    </div>
  )
}

export default Banner
