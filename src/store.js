import { createStore } from 'redux'

function agregarACart(act, producto) {
    let flag = 0
    act.map( (item) => {
        if( item.producto.id == producto.id ){
          item.cnt += 1
          flag = 1
        }
    })
    if( flag == 0 ){
      act = act.concat({ id: producto.id, cnt: 1, producto })
    }
    // console.log(act)
    return act
}

function removeFromCart(act, producto){
    act.map( (item) => {
        if( item.id === producto.id ){
            if( item.cnt > 1 ){
                item.cnt -= 1
            }else{
                act = act.filter((ind) => ind !== item )
            }
        }
    })
    return act
}

const reducer = (state, action) => {
  if( action.type === 'AGREGAR_AL_CARRITO' ){
    return {
      ...state,
      cart: agregarACart(state.cart, action.producto)
      // cart: state.cart.concat(action.producto)
    }
  }

  if( action.type == 'ELIMINAR_PRODUCTO' ){
    return {
      ...state,
      cart: removeFromCart(state.cart, action.producto)
      // cart: state.cart.filter(product => product.id !== action.producto.id)
    }
  }

  return state;
}

export default createStore(reducer, { cart: [] })
