import {dataProducts} from '../Data/dataProducts'

export const productByGender = ( gender ) => {

    const validGender = ['Masculino', 'Femenino'];

    if ( !validGender.includes( gender ) ) {
        throw new Error(`Gender "${ gender }" no es correcto`);
    }

    return dataProducts.filter( product => product.gender === gender );

}