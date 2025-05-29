const Listado = ({ productos, onEditar, onEliminar }) => {
  return (
    <div>
      <h2>Listado de Productos</h2>
      {productos.length === 0 ? (
        <p>No hay productos registrados.</p>
      ) : (
        <ul>
          {productos.map((producto) => (
            <li key={producto.id}>
              <strong>{producto.nombre}</strong> - {producto.categoria}
              <p>{producto.descripcion}</p>
              <button onClick={() => onEditar(producto)}>Editar</button>
              <button onClick={() => onEliminar(producto.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Listado;
