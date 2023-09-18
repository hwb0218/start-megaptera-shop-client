import { render, screen } from '@testing-library/react';

import { container } from 'tsyringe';

import ProductDetailStore from '../../stores/ProductDetailStore';

import ProductDetail from './ProductDetail';

import fixtures from '../../../fixtures';

const [product] = fixtures.products;

test('<ProductDetail />', async () => {
  const store = container.resolve(ProductDetailStore);

  await store.fetchProduct({ productId: product.id });

  render(<ProductDetail />);
  screen.getByText(product.name);
});
