import React, { useState } from 'react';
import Formulario from './Componentes/Formulario';
import Listado from './Componentes/Listado';
import Filtros from './Componentes/Filtros';
import ListadoAPI from './Componentes/ListadoAPI';

function App() {
  const [productos, setProductos] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [productoEditando, setProductoEditando] = useState(null);

  const manejarGuardar = (producto) => {
    if (producto.id) {
      setProductos(productos.map(p => p.id === producto.id ? producto : p));
    } else {
      producto.id = Date.now();
      setProductos([...productos, producto]);
    }
    setProductoEditando(null);
  };

  const manejarEliminar = (id) => {
    setProductos(productos.filter(p => p.id !== id));
  };

  const productosFiltrados = productos.filter(p =>
    p.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
    p.categoria.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Proyecto Final | React</h1>
      <Formulario onGuardar={manejarGuardar} productoEditando={productoEditando} />
      <Filtros filtro={filtro} setFiltro={setFiltro} />
      <Listado productos={productosFiltrados} onEditar={setProductoEditando} onEliminar={manejarEliminar} />
      
      <hr />
      <h2>Productos</h2>
      <ListadoAPI />
    </div>
  );
}

export default App;


