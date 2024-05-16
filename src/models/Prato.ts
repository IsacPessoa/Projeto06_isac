class Prato {
  title: string
  description: string
  image: string
  nota: string
  origens: string[]
  id: number

  constructor(
    id: number,
    title: string,
    description: string,
    image: string,
    nota: string,
    origens: string[]
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.image = image
    this.nota = nota
    this.origens = origens
  }
}

export default Prato
