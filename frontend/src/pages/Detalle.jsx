import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productos } from '../data/productos';

export default function Detalle() {
  const { id } = useParams();
  const producto = productos.find((p) => p.id === parseInt(id));
  const [imgActual, setImgActual] = useState(0);

  if (!producto) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Producto no encontrado</h2>
        <Link to="/" className="text-blue-600 underline hover:text-blue-800">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden mt-6">
      <div className="md:flex">
        {/* Sección del Slideshow */}
        <div className="md:w-1/2 p-6 border-b md:border-b-0 md:border-r border-gray-100 flex flex-col gap-4">
          <div className="bg-gray-50 flex items-center justify-center h-80 rounded-lg overflow-hidden">
            <img 
              src={producto.imagenes[imgActual]} 
              alt={producto.nombre} 
              className="max-h-full w-auto object-contain transition-opacity duration-300"
            />
          </div>
          <div className="flex gap-2 justify-center">
            {producto.imagenes.map((img, index) => (
              <button 
                key={index}
                onClick={() => setImgActual(index)}
                className={`h-16 w-16 border-2 rounded-md overflow-hidden ${imgActual === index ? 'border-blue-600 opacity-100' : 'border-transparent opacity-60 hover:opacity-100 transition-opacity'}`}
              >
                <img src={img} alt={`Miniatura ${index + 1}`} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Sección de Información */}
        <div className="md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Producto</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-2 mb-4 leading-tight">{producto.nombre}</h2>
            <p className="text-gray-600 leading-relaxed mb-6">{producto.descripcion}</p>
          </div>
          <div className="flex flex-col gap-4 mt-6 pt-6 border-t border-gray-100">
            <div className="flex justify-between items-baseline">
              <span className="text-sm font-semibold text-gray-500">Precio:</span>
              <span className="text-4xl font-black text-blue-700">
                ${producto.precio.toLocaleString('es-AR')}
              </span>
            </div>
            <Link
              to="/"
              className="text-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-4 rounded-lg transition-all"
            >
              Volver al catálogo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}