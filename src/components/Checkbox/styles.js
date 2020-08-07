import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  input[type='checkbox'] {
    -webkit-appearance: none;
    ${({ theme }) => css`
      border: 1px solid ${theme.light};
      border-radius: ${theme.baseRadius};
    `}
    cursor: pointer;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;

    &:checked {
      background-color: transparent !important;
      background-image: url(${({ bgCheck }) => bgCheck});
      background-position: center center;
      background-repeat: no-repeat;
    }
  }

  span {
    font-size: 16px;
  }
`;
