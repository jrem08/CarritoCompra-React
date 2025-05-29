const Filtros = ({ filtro, setFiltro }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar por nombre o categoría"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />
    </div>
  );
};

export default Filtros;
