import React, {Component} from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import './cart-shopping.css'
import ProductoLinea from './producto-linea'
import store from '../store'

class CartShopping extends Component{
  constructor(){
    super()

    this.state = {
      cart: []
    }

//Renderiza y actualiza el producto
    store.subscribe( () => {
      this.setState({
        cart: store.getState().cart
      })
    })
  }

  calcularMonto(arr, percent){
    return arr.reduce( (suma, act) => suma + (act.producto.monto * act.cnt), 0) * percent
  }

  render(){
    // console.log('!')
    // console.log(this.state.cart)
    return(
      <div className="CartShopping">
        <div className="CartShopping-listaCompras">
            <div className="CartShopping-listaProductos">
              {
                this.state.cart.map( (item) => <ProductoLinea key={item.id} {...item} /> )
              }
            </div>
        </div>
        <div className="CartShopping-datosCompras">
            <Row>
                <Col sm={4} className="CartShopping-datoEntity">
                    <h4 className="CartShopping-title">Subtotal:</h4>
                    <div className="CartShopping-subtotal">
                      S/ {
                          Math.round( this.calcularMonto(this.state.cart, 0.82) * 100 ) / 100
                      }
                    </div>
                </Col>
                <Col sm={4} className="CartShopping-datoEntity">
                    <h4 className="CartShopping-title">IGV:</h4>
                    <div className="CartShopping-subtotal">
                      S/ {
                          Math.round( this.calcularMonto(this.state.cart, 0.18) * 100 ) / 100
                      }
                    </div>
                </Col>
                <Col sm={4} className="CartShopping-datoEntity">
                    <h4 className="CartShopping-title">Total:</h4>
                    <div className="CartShopping-subtotal">
                      S/ {
                            Math.round( this.calcularMonto(this.state.cart, 1) * 100 ) / 100
                          // this.state.cart.reduce((sum, cart) => sum + (cart.producto.monto * cart.cnt), 0 )
                      }
                    </div>
                </Col>
            </Row>

        </div>
      </div>
    )
  }
}

export default CartShopping
