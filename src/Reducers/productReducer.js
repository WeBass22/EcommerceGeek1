


export const productReducer = (state = [], action) => {
   switch (action.type) {
       case 'addProduct':
          return [...state, action.payload]
       case 'deleteProduct':
          return state.filter(product => product.id !== action.payload) ;
      default:
           return state;
   }
}