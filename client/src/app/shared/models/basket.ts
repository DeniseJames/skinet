export interface IBasket {
    id: string;
    items: Item[];
    deliveryMethodId: number;
    clientSecret: string;
    paymentIntentId: string;
    shippingPrice: number;
  }
  
export  interface Item {
    id: string;
    productName: string;
    price: number;
    quantity: number;
    pictureUrl: string;
    brand: string;
    type: string;
  }