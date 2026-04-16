import { ProductInterFace } from "./product.interface"

export interface CartItem {
    status: string,
  numOfCartItems: number,
  cartId: string,
  data: {
    _id: string,
    cartOwner: string,
    products: productType[],
    createdAt: string,
    updatedAt: string,
    __v: number,
    totalCartPrice: number
  }

}
export interface productType {
   product:ProductInterFace,
   count:number,
   price:number,
   _id:string,
  }