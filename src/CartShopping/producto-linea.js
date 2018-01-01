import React, {Component} from 'react'
import {Row, Col, Button} from 'react-bootstrap'
import './producto-linea.css'
import deleteImg from '../images/delete.svg'
import store from '../store.js'
import {eliminarProducto} from '../actionCreators'

class ProductoLinea extends Component{
    constructor(props){
      super(props)
      this.deleteProducto = this.deleteProducto.bind(this)
    }

    deleteProducto(producto){
        store.dispatch(eliminarProducto(producto))
    }

    render(){
      return(
          <div className="ProductoLinea">
              <Row>
                  <Col sm={8}>
                    <h3 className="ProductoLinea-title">{ this.props.producto.nombre }</h3>
                    <div className="ProductoLinea-descripcion">
                      { this.props.cnt } Unidad(es) a S/{this.props.producto.monto} c/u
                    </div>
                  </Col>
                  <Col sm={3}>
                      <div className="ProductoLinea-monto ProductoLinea-verticalAlign">
                        S/ { this.props.producto.monto * this.props.cnt }
                      </div>
                  </Col>
                  <Col sm={1}>
                    <a className="ProductoLinea-link" onClick={ () => this.deleteProducto(this.props.producto) }>
                      <img src={deleteImg} width={15} className="ProductoLinea-verticalAlign" />
                    </a>
                  </Col>
              </Row>
          </div>
      )
    }
}

export default ProductoLinea
