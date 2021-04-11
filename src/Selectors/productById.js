import { dataProducts } from '../Data/dataProducts';

export const productById = ( id ) => {

    return dataProducts.find( product => product.id == id );

}