import { Image, Subtitle, Title } from './styles'

import bannerBackground from '../../assets/images/banner.png'

const Banner = () => (
  <Image style={{ backgroundImage: `url(${bannerBackground})` }}>
    <div className="container">
      <Subtitle>Italiana</Subtitle>
      <Title>La Dolce Vita Trattoria</Title>
    </div>
  </Image>
)

export default Banner
