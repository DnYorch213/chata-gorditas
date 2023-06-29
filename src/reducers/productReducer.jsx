import types from "../types";


const initialProductState = {
    products: [
        
        {id: 1, title: "Gordita Deshebrada", price: 10},
        { id: 2, title: "Gordita Chicharron",   price: 10},        
        { id: 3, title: "Gordita Chorizo",  price: 10},
        { id: 4, title: "Gordita Papa",  price: 10},
        { id: 5, title: "Gordita Frijol",  price: 10}, 
        { id: 6, title: "Gordita Hvo.Vrde",  price: 10}, 
         
    ],
    products2: [
        { id: 7, title: "Taquito Deshebrada",  price: 10}, 
        { id: 8, title: "Taquito Papa",  price: 10}, 
        { id: 9, title: "Taquito Hvo.Vrde",  price: 10}
    ],
    producto3: [
        { id: 10, title: "Café",  price: 15}, 
        { id: 11, title: "Agua de Jamaica",  price: 15}, 
        { id: 12, title: "Coca 600 grande",  price: 23},
        { id: 13, title: "Coca 355 mediana",  price: 15},
        { id: 14, title: "Coca 200 chica",  price: 10},
        { id: 15, title: "Agua embot. 500 ",  price: 10}
    ],
    cart: [
        
    ],
    activeProduct: 
    { id: 0, title: "", price: 0}
}

const productReducer = (state, action) => {
    switch(action.type) {
        case types.productShow:
            return {
                ...state,
                activeProduct: action.payload,               
            }

        case types.productAddToCart: {
            const newProduct = action.payload;
            
            const cartContainProduct = state.cart.find(
                product => product.id === newProduct.id
            )

            return cartContainProduct
            ? {
                ...state,
                cart: state.cart.map(product => 
                    product.id === newProduct.id
                    ? {...product, quantity: product.quantity+1}
                    : product    
                )
            }
            : {
                ...state,
                cart: [
                    ...state.cart,
                    {...action.payload, quantity: 1}
                ]
            }
        }

        case types.productRemoveFromCart:
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== action.payload)
            }

        case types.productRemoveOneFromCart: {
            const productDelete = state.cart.find(product => product.id === action.payload);

            return productDelete.quantity > 1 
            ? {
                ...state,
                cart: state.cart.map(product => 
                    product.id === action.payload
                    ? {...product, quantity: product.quantity -1}
                    : product    
                )
            }
            : {
                ...state,
                cart: state.cart.filter(product => product.id !== action.payload)
            }
        }

             
        

        default:
            return state;
    }
}

export { initialProductState }
export default productReducer;