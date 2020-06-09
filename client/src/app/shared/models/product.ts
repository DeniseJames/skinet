import { Guid } from 'guid-typescript';

export interface IProduct {
    id: Guid;
    name: string;
    description: string;
    price: number;
    pictureUrl: string;
    productType: string;
    productBrand: string;
  }