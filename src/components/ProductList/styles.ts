import styled from 'styled-components'

export const Container = styled.div`
  padding: 32px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  margin-top: 80px;
  margin-bottom: 120px;
`

export const ListSecondary = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;
  margin-top: 80px;
  margin-bottom: 120px;
`
