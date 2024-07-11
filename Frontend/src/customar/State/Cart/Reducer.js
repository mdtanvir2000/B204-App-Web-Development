import { logRoles } from "@testing-library/react";
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCSESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCSESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCSESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCSESS } from "./ActionType"

const initialState={
    cart:null,
    loading:false,
    error:null,
    cartItems:[],

}


export const cartReducer=(state=initialState,action)=>{

 switch(action.type){
   case ADD_ITEM_TO_CART_REQUEST:
    return {...StaticRange,loading:true,error:null};
   case ADD_ITEM_TO_CART_SUCCSESS:
    return {
        ...state,
        cartItems:[...state.cartItems,action.payload.cartItems],
        loading:false,
    };
    case ADD_ITEM_TO_CART_FAILURE:
        return {
            ...state,loading:false,error:action.payload};
    
    case GET_CART_REQUEST:
        return {
            ...state,loading:true,
            error:null,
        };   
    case GET_CART_SUCCSESS:
        return {
            ...state,
            cartItems:action.payload.cartItems,
            cart:action.payload,
            loading:false,
        }
    case GET_CART_FAILURE:
        return {
            ...state,
            error:action.payload,
            loading:false,
        }  
    case REMOVE_CART_ITEM_REQUEST:
        case UPDATE_CART_ITEM_REQUEST:
            
        return {
            ...state,
            loading:true,
            error:null,
        };

    case REMOVE_CART_ITEM_SUCCSESS:
        return {
            ...state,
            deleteCartItem:action.payload,
            loading:false,
        }    

    case UPDATE_CART_ITEM_SUCCSESS:
        return {
            ...state,
            updateCartItem:action.payload,
            loading:false,
        };
        case REMOVE_CART_ITEM_FAILURE:
            case UPDATE_CART_ITEM_FAILURE:
                return{
                    ...state,
                    error:action.payload,
                    loading:false,
                };
        default:
            return state;            

 }

}