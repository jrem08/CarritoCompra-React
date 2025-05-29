import { useEffect, useState } from 'react';

const Formulario = ({ onGuardar, productoEditando }) => {
  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descripcion, setDescripcion] = useState('');

  useEffect(() => {
    if (productoEditando) {
      setNombre(productoEditando.nombre);
      setCategoria(productoEditando.categoria);
      setDescripcion(productoEditando.descripcion);
    } else {
      setNombre('');
      setCategoria('');
      setDescripcion('');
    }
  }, [productoEditando]);

  const manejarSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !categoria || !descripcion) return;

    onGuardar({
      id: productoEditando?.id,
      nombre,
      categoria,
      descripcion
    });

    setNombre('');
    setCategoria('');
    setDescripcion('');
  };

  return (
    <form onSubmit={manejarSubmit}>
      <h2>{productoEditando ? 'Editar Producto' : 'Registrar Producto'}</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Categoría"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      />
      <textarea
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      ></textarea>
      <button type="submit">{productoEditando ? 'Actualizar' : 'Agregar'}</button>
    </form>
  );
};

export default Formulario;
