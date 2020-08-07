import styled, {css} from 'styled-components';

export const Container = styled.select`
  ${({theme, disabled}) => css`
    height: ${theme.baseHeight};
    border: 1px solid ${disabled ? theme.disabled : theme.light};
    border-radius: ${theme.baseRadius};
    cursor: ${disabled ? 'no-drop' : 'pointer'};

    &:hover {
      border-color: ${disabled ? theme.disabled : theme.dark};
      color: ${disabled ? theme.disabled : theme.dark};
    }
  `}
  
  padding: 0 8px;
  width: 100%;
  font-size: 16px;
`;
