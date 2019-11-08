import * as Types from './../constants/ActionType'
import callApi from './../utils/apiCaller'

export const actFetchProductRequest = ()=>{
    return (dispatch)=>{
        return callApi('products', 'GET',null).then(res=>{
            dispatch(actFetchProducts(res.data))
        })
    }
}
export const actDeleteProductRequest=(id)=>{
    return (dispatch)=>{
        return callApi(`products/${id}`, 'DELETE',null).then(res=>{
            dispatch(actDelete(id))
        })
    }
}
export const actaddProductRequest=(product)=>{
    return (dispatch)=>{
        return callApi(`products`,'POST',product).then(res=>{
            dispatch(add(res.data))
        })
    }
}
export const actDelete =(id)=>{
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}
export const add=(product)=>{
    return{
        type: Types.ADD_PRODUCT,
        product
    }
}
export const actFetchProducts=(products)=>{
    return{
        type :Types.FETCH_PRODUCTS,
        products // products : products
    }
}
export const actGetProductRequest=(id)=>{
    return (dispatch)=>{
        return callApi(`products/${id}`,'GET',null).then(res=>{
            dispatch(actGetProduct(res.data))
        })
    }
}
export const actGetProduct=(product)=>{
    return{
        type:Types.EDIT_PRODUCT,
        product
    }
}
export const actUpdateProductRequest=(product)=>{
    return (dispatch)=>{
        return callApi(`products/${product.id}`,'PUT',product).then(res=>{
            dispatch(actUpdate(res.data))
        })
    }
}
export const actUpdate=(product)=>{
    return{
        type:Types.UPDATE_PRODUCT,
        product
    }
}
