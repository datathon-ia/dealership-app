export interface Accident {
  id: number
  image: string
  camera: {
    id: number
    lat: number
    lon: number
  }
  createdAt: Date
  vehicles: string[]
}
