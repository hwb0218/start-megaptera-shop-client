import styled from 'styled-components';

import { ProductSummary } from '../../types';
import numberFormat from '../../utils/numberFormat';

const Container = styled.div`
  word-break: keep-all;
 
  & div {
    overflow: hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
`;

const Thumbnail = styled.img.attrs({
  alt: 'Thumbnail',
})`
  display: block;
  width: 100%;
  aspect-ratio: 1/1;
`;

export default function Product({ product }: {product: ProductSummary}) {
  return (
    <Container>
      <Thumbnail src={product.thumbnail.url} />
      <div>{product.name}</div>
      <div>{`${numberFormat(product.price)}`}</div>
    </Container>
  );
}
