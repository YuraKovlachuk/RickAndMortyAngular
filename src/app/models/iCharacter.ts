export default interface iCharacter {
  id: number
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  image: string,
  location: {
    name: string
  },
  episode: string[]
}
