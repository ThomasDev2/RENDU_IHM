
import { CartItemModel } from "./cart-item-model";
import { UserModel } from "./user-model";

export interface OrderModel{
    id:number;
    cart:CartItemModel[];
    buyer:UserModel;
}