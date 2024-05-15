import Product from '../Product'
import { Container, List } from './styles'

const ProductList = () => (
  <Container>
    <List>
      <Product
        title="Hioki Sushi"
        description="teste"
        image="//placehold.it/472x217"
        nota="4.9"
        origens={['Destaque da semana', 'Japonesa']}
        destaque="Destaque da semana"
      />
      <Product
        title="Hioki Sushi"
        description="teste"
        image="//placehold.it/472x217"
        nota="4.9"
        origens={['Japonesa']}
      />
      <Product
        title="Hioki Sushi"
        description="teste"
        image="//placehold.it/472x217"
        nota="4.9"
        origens={['Japonesa']}
      />
      <Product
        title="Hioki Sushi"
        description="teste"
        image="//placehold.it/472x217"
        nota="4.9"
        origens={['Japonesa']}
      />
      <Product
        title="Hioki Sushi"
        description="teste"
        image="//placehold.it/472x217"
        nota="4.9"
        origens={['Japonesa']}
      />
      <Product
        title="Hioki Sushi"
        description="teste"
        image="//placehold.it/472x217"
        nota="4.9"
        origens={['Japonesa']}
      />
    </List>
  </Container>
)

export default ProductList
