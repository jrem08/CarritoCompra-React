import { useEffect, useState } from 'react';

const ListadoAPI = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => {
        if (!res.ok) {
          throw new Error('Error al cargar los productos');
        }
        return res.json();
      })
      .then(data => {
        setProductos(data);
        setCargando(false);
      })
      .catch(err => {
        setError(err.message);
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando productos desde API...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="productos-api">
      {productos.map(producto => (
        <div key={producto.id} className="card">
          <h3>{producto.title}</h3>
          <p><strong>Categoría:</strong> {producto.category}</p>
          <p>{producto.description.substring(0, 100)}...</p>
          <p><strong>Precio:</strong> ${producto.price}</p>
          <img src={producto.image} alt={producto.title} width="100" />
        </div>
      ))}
    </div>
  );
};

export default ListadoAPI;
