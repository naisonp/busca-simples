import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.button`
  ${({ theme, variant, outline }) => css`
    background: ${outline ? 'transparent' : theme[variant]}};
    border-radius: ${theme.baseRadius};
    border: 2px solid ${outline ? theme[variant] : 'transparent'};
    color: ${outline ? theme[variant] : '#fff'};
    height: ${theme.baseHeight};

    &:hover {
      background: ${outline ? theme[variant] : darken(0.05, theme[variant])};
      color: #fff;
    }
  `}
  padding: 0 25px;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;
