const agregarProducto = producto => {
  return {
    type: 'AGREGAR_AL_CARRITO',
    producto
  }
};

const eliminarProducto = producto => {
  return {
    type: 'ELIMINAR_PRODUCTO',
    producto
  }
};

export { agregarProducto, eliminarProducto }
