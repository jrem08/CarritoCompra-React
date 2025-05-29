import React, { useState } from 'react';
import Formulario from './Componentes/Formulario';
import Listado from './Componentes/Listado';
import Filtros from './Componentes/Filtros';

function App() {
  const [productos, setProductos] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [productoEditando, setProductoEditando] = useState(null);

  // Agrega o actualiza un producto
  const manejarGuardar = (producto) => {
    if (producto.id) {
      setProductos(productos.map(p => p.id === producto.id ? producto : p));
    } else {
      producto.id = Date.now();
      setProductos([...productos, producto]);
    }
    setProductoEditando(null);
  };

  // Elimina un producto por ID
  const manejarEliminar = (id) => {
    setProductos(productos.filter(p => p.id !== id));
  };

  // Filtrar productos por nombre o categoría
  const productosFiltrados = productos.filter(p =>
    p.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
    p.categoria.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Gestión de Productos</h1>
      <Formulario
        onGuardar={manejarGuardar}
        productoEditando={productoEditando}
      />
      <Filtros filtro={filtro} setFiltro={setFiltro} />
      <Listado
        productos={productosFiltrados}
        onEditar={setProductoEditando}
        onEliminar={manejarEliminar}
      />
    </div>
  );
}

export default App;

