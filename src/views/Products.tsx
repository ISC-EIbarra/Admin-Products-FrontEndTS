import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-black text-[#0068FF]">Productos</h2>
        <Link
          to="products/new"
          className="rounded-lg bg-indigo-600 p-3 font-bold text-white shadow-sm hover:bg-indigo-500 transition-colors"
        >
          Agregar Producto
        </Link>
      </div>
    </>
  );
}
