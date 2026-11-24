import { useState, useEffect } from 'react';
import ProductoCard from '../components/ProductoCard';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export default function Catalogo() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/api/productos`)
      .then((res) => {
        if (!res.ok) throw new Error('Error al obtener los productos');
        return res.json();
      })
      .then((data) => {
        setProductos(data);
        setCargando(false);
      })
      .catch((err) => {
        setError(err.message);
        setCargando(false);
      });
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
        Catálogo de Productos
      </h2>

      {cargando && (
        <p className="text-gray-600">Cargando productos desde el servidor...</p>
      )}

      {error && (
        <p className="text-red-600">No se pudieron cargar los productos: {error}</p>
      )}

      {!cargando && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productos.map((producto) => (
            <ProductoCard key={producto.id} producto={producto} />
          ))}
        </div>
      )}
    </div>
  );
}