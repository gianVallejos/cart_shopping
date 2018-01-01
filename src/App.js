import React, {Component} from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import './App.css'

import Carrito from './Iconos/carrito'
import abc from './images/shopping-cart.svg'

import ListaProductos from './Productos/lista-productos'
import CartShopping from './CartShopping/cart-shopping'

import data from './api.json'

class App extends Component{
    constructor(){
        super()
        this.state = {
          search: ''
        }
    }

    updateSearch(event){
        this.setState({ search:event.target.value.substr(0, 20)})
    }

    render(){        
        return(
          <div>
            <Grid>
            <div className="App">
              <Row>
                  <Col sm={8}>
                      <ListaProductos data={data}/>
                  </Col>
                  <Col sm={4}>
                      <div className="App-TituloCartShopping">
                        <img src={abc} width="23" className="App-icono" /> <h3 className="App-TituloText">Carrito de Compras</h3>
                      </div>
                      <CartShopping />
                  </Col>
              </Row>
            </div>
            </Grid>
          </div>
        )
    }
}

export default App
