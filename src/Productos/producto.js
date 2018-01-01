import React, {Component} from 'react'
import {Button} from 'react-bootstrap'
import defaultImage from '../images/producto-default.png'
import store from '../store.js'
import { agregarProducto } from '../actionCreators'

class Producto extends Component{
    constructor(props){
      super(props)
      this.addProducto = this.addProducto.bind(this)
    }

    addProducto(producto){
        store.dispatch(agregarProducto(producto))
    }

    render(){
      let url_image = ( this.props.image.length == 0 ) ? defaultImage : this.props.image
      return(
        <div className="Producto" onClick={() => this.addProducto(this.props) }>
          <div className="Producto-Monto">
              S/ {this.props.monto}
          </div>
          <img className="Producto-Imagen"
               src={url_image}
               alt={this.props.nombre}
          />
          <div className="Producto-Nombre">
              {this.props.nombre}
          </div>
        </div>
      )
    }
}

export default Producto
