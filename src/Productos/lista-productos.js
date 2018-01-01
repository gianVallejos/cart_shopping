import React, {Component} from 'react'

import Producto from './producto'
import './producto.css'

class ListaProductos extends Component{
    constructor(){
        super()
        this.state = {
          search: ''
        }
    }

    updateSearch(event){
        this.setState({ search: event.target.value.substr(0, 20)})
    }

    render(){
      let filteredProducts = this.props.data.productos.filter(
        (producto) => {
            return producto.nombre.toLowerCase().indexOf(this.state.search) !== -1
        }
      )
      
      return(
        <div>
          <div className="App-buscar">
            <input className="App-buscarInput" type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} placeholder="Buscar por Productos" />
          </div>
          <div className="ListaProductos">
            {
                filteredProducts.map((item) => <Producto key={item.id} {...item} /> )
            }
          </div>
        </div>
      )
    }

}

export default ListaProductos
