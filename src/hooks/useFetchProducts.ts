import { useEffect } from 'react';
import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';

import ProductStore from '../stores/ProductsStore';

export default function useFetchProducts({ categoryId }: {
  categoryId?: string;
}) {
  const store = container.resolve(ProductStore);

  const [{ products }] = useStore(store);

  useEffect(() => {
    store.fetchProducts({ categoryId });
  }, [store, categoryId]);

  return {
    products,
  };
}
