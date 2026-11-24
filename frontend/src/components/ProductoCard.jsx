import { Link } from 'react-router-dom';

export default function ProductoCard({ producto }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100 flex flex-col overflow-hidden h-full">
      {/* Contenedor estricto para la imagen */}
      <div className="h-48 w-full overflow-hidden bg-white flex-shrink-0 flex justify-center items-center">
        <img
          src={producto.imagenes[0]}
          alt={producto.nombre}
          className="h-full w-full object-contain p-2 hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Contenedor del contenido textual */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 h-14">
            {producto.nombre}
          </h3>
          <p className="text-gray-600 mb-4 text-sm line-clamp-2 h-10">
            {producto.descripcion}
          </p>
        </div>
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
          <span className="text-2xl font-black text-blue-700">
            ${producto.precio.toLocaleString('es-AR')}
          </span>
          <Link
            to={`/producto/${producto.id}`}
            className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded transition-colors text-sm"
          >
            Ver detalle
          </Link>
        </div>
      </div>
    </div>
  );
}