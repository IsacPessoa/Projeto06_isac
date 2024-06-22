import { Efood } from '../../Pages/Home'
import Product from '../Product'
import { Container, List, ListSecondary } from './styles'

export type Props = {
  efood: Efood[]
  type: 'first' | 'secondary'
}

const ProductList = ({ efood = [], type }: Props) => {
  if (type === 'first') {
    return (
      <Container>
        <List>
          {efood.map((efoodItem) => (
            <Product key={efoodItem.id} efood={efoodItem} type="first" />
          ))}
        </List>
      </Container>
    )
  } else {
    return (
      <Container>
        <ListSecondary>
          {efood.map((efoodItem) =>
            efoodItem.cardapio.map((cardapioItem) => (
              <Product
                key={cardapioItem.id}
                efood={{
                  ...efoodItem,
                  titulo: cardapioItem.nome,
                  descricao: cardapioItem.descricao,
                  capa: cardapioItem.foto,
                  cardapio: [cardapioItem]
                }}
                type="secondary"
              />
            ))
          )}
        </ListSecondary>
      </Container>
    )
  }
}

export default ProductList

// import { Efood } from '../../Pages/Home'
// import Product from '../Product'
// import { Container, List, ListSecondary } from './styles'

// export type Props = {
//   efood: Efood[]
//   type: 'first' | 'secondary'
// }

// const ProductList = ({ efood = [], type }: Props) => {
//   if (type === 'first') {
//     return (
//       <Container>
//         <List>
//           {efood.map((efoodItem) => (
//             <Product
//               key={efoodItem.id}
//               title={efoodItem.titulo}
//               description={efoodItem.descricao}
//               image={efoodItem.capa}
//               nota={efoodItem.avaliacao}
//               origens={efoodItem.tipo}
//               destaque={efoodItem.destacado}
//               type="first"
//               id={efoodItem.id}
//             />
//           ))}
//         </List>
//       </Container>
//     )
//   } else {
//     return (
//       <Container>
//         <ListSecondary>
//           {efood.map((efoodItem) =>
//             efoodItem.cardapio.map((cardapioItem) => (
//               <Product
//                 key={cardapioItem.id}
//                 title={cardapioItem.nome}
//                 description={cardapioItem.descricao}
//                 image={cardapioItem.foto}
//                 modalDescription={cardapioItem.descricao}
//                 modalImage={cardapioItem.foto}
//                 modalPorcao={cardapioItem.porcao}
//                 modalPreco={cardapioItem.preco}
//                 modalTitle={cardapioItem.nome}
//                 type="secondary"
//               />
//             ))
//           )}
//         </ListSecondary>
//       </Container>
//     )
//   }
// }

// export default ProductList
