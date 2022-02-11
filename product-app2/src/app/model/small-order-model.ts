import { CartItemModel } from "./cart-item-model";

export interface SmallOrderModel{
    id:number
    cart:{prodId:number,quantity:number}[]
    buyerID:number
}