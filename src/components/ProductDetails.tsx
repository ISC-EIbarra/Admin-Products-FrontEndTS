import {
  Form,
  useNavigate,
  type ActionFunctionArgs,
  redirect,
  useFetcher,
} from 'react-router-dom';
import type { Product } from '../types';
import { formatCurrency } from '../utils';
import { deleteProduct } from '../services/ProductService';

type ProductDetailsProps = {
  product: Product;
};

export async function action({ params }: ActionFunctionArgs) {
  if (params.id !== undefined) {
    await deleteProduct(+params.id);
    return redirect('/');
  }
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const fetcher = useFetcher();
  const navigate = useNavigate();
  const isAvailability = product.availability;

  return (
    <tr className="border-b ">
      <td className="p-3 text-lg text-gray-800">{product.name}</td>
      <td className="p-3 text-lg text-gray-800">
        {formatCurrency(product.price)}
      </td>
      <td className="p-3 text-lg text-gray-800">
        <fetcher.Form method="POST">
          <button
            type="submit"
            name="id"
            value={product.id}
            className={`${
              isAvailability ? 'text-black' : 'text-red-600'
            } rounded-lg p-2 text-sm font-bold w-full border border-black-100 hover:bg-gray-50`}
          >
            {isAvailability ? 'Disponible' : 'No Disponible'}
          </button>
        </fetcher.Form>
      </td>
      <td className="p-3 text-lg text-gray-800 ">
        <div className="flex gap-4 items-center">
          <button
            onClick={() => navigate(`products/${product.id}/edit`)}
            className="bg-indigo-600 hover:bg-indigo-500 transition-colors text-white rounded-lg w-full p-2 font-bold text-base text-center"
          >
            Editar
          </button>
          <Form
            className="w-full"
            method="POST"
            action={`products/${product.id}/delete`}
            onSubmit={(e) => {
              if (!confirm('¿Eliminar?')) {
                e.preventDefault();
              }
            }}
          >
            <input
              type="submit"
              value="Eliminar"
              className="bg-red-600 hover:bg-red-500 transition-colors text-white rounded-lg w-full p-2 font-bold text-base text-center hover:cursor-pointer"
            />
          </Form>
        </div>
      </td>
    </tr>
  );
}
