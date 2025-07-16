import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout';
import Products, {
  loader as productsLoader,
  action as updateProductAvailabilityAction,
} from './views/Products';
import NewProduct, { action as newProductAction } from './views/NewProduct';
import EditProduct, {
  loader as editProductLoader,
  action as editProductAction,
} from './views/EditProduct';
import { action as deleteProductDetailsAction } from './components/ProductDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
        loader: productsLoader,
        action: updateProductAvailabilityAction,
      },
      {
        path: 'products/new',
        element: <NewProduct />,
        action: newProductAction,
      },
      {
        // ROA Pattern: Resource-oriented design
        path: 'products/:id/edit',
        element: <EditProduct />,
        loader: editProductLoader,
        action: editProductAction,
      },
      {
        // ROA Pattern: Resource-oriented design
        path: 'products/:id/delete',
        action: deleteProductDetailsAction,
      },
    ],
  },
]);
