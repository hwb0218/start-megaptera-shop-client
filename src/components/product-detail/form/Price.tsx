import { useEffect } from 'react';
import styled from 'styled-components';

import useProductDetailStore from '../../../hooks/useProductDetailStore';
import useProductFormStore from '../../../hooks/useProductFormStore';

import numberFormat from '../../../utils/numberFormat';

const Container = styled.div`
  input: {
    width: 5rem;
    text-align: center;
  }
`;

export default function Price() {
  const [, productFormStore] = useProductFormStore();

  return (
    <Container>
      {numberFormat(productFormStore.price)}
      원
    </Container>
  );
}
