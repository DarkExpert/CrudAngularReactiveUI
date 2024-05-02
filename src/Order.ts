import { IOrder } from "./IOrder";

export class Order implements IOrder{
    constructor(public id = 0, 
        public title= '', 
        public shopId = 0,
        public shopName = '',
        public number = '0',
        public date = new Date(),
        public description = '',
        public deliveryDate = new Date(),
        public owner = '',
        public productId = 0,
        public productName = '',
        public count = 0,
        public price = 0,
        public discount = 0) { 
    }
}