export interface Root {
  results: number
  status: string
  data: AdressInterface[]
}

export interface AdressInterface {
  _id: string
  name: string
  details: string
  phone: string
  city: string
}
