import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

type ButtonProps = {
  type?: ButtonHTMLAttributes<HTMLButtonElement> & 'submit';
}

const Button = styled.button.attrs<ButtonProps>((props) => ({
  type: props.type ?? 'button',
}))`
  border: .1rem solid #888;
  background: transparent;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;

  &:disabled {
    filter: grayscale(80%);
    cursor: not-allowed;
  }
`;

export default Button;
