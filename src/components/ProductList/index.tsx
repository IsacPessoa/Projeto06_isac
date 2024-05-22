import Prato from '../../models/Prato'
import Product from '../Product'
import { Container, List, ListSecondary } from './styles'

import Button from '../Button'
import { useState } from 'react'

export type Props = {
  pratos: Prato[]
  type: 'first' | 'secondary'
}

const ProductList = ({ pratos, type }: Props) => {
  if (type === 'first') {
    return (
      <Container>
        <List>
          {pratos.map((prato) => (
            <Product
              key={prato.id}
              title={prato.title}
              description={prato.description}
              image={prato.image}
              nota={prato.nota}
              origens={prato.origens}
              type="first"
            />
          ))}
        </List>
      </Container>
    )
  }

  return (
    <>
      <Container>
        <ListSecondary>
          {pratos.map((prato) => (
            <Product
              key={prato.id}
              title={prato.title}
              description={prato.description}
              image={prato.image}
              nota={prato.nota}
              origens={prato.origens}
              type="secondary"
            />
          ))}
        </ListSecondary>
      </Container>
    </>
  )
}

export default ProductList
