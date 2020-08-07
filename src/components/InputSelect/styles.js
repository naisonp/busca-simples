import styled, { css } from 'styled-components';


export const Container = styled.div`
  ${({theme, disabled}) => css`
    /* height: ${theme.baseHeight}; */
    border-radius: ${theme.baseRadius};
  `}

  background: transparent;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 933px) {
    flex-direction: row;
    border: 1px solid ${({theme}) => theme.light};
  }

  .input-container {
    position: relative;
    flex: 1;
    overflow: hidden;
    max-height: 100%;

    height: ${({theme}) => theme.baseHeight};
    border: 1px solid ${({theme}) => theme.light};
    border-radius: ${({theme}) => theme.baseRadius};
    background: transparent;

    @media screen and (min-width: 933px) {
      border: 0;
    }
    
    input {
      border: 0;
      width: 100%;
      height: 100%;
      padding-left: 35px;
      font-weight: bold;
      color: ${({theme}) => theme.dark};
      min-height: ${({theme}) => theme.baseHeight};
    }

    svg {
      position: absolute;
      left: 8px;
      top: 8px;
    }

  }

  .distance-select {
    width: 100%;
    height: 100%;
    border: 0;
    padding-left: 10px;
    font-weight: bold;

    ${({theme}) => css`
      border-top-right-radius: ${theme.baseRadius};
      border-bottom-right-radius: ${theme.baseRadius};
      border: 1px solid ${theme.light};
      margin-top: 15px;
      max-height: 100%;
      height: ${({theme}) => theme.baseHeight};
      min-height: ${({theme}) => theme.baseHeight};
      border-radius: ${theme.baseRadius};
    `}

    @media screen and (min-width: 933px) {
      width: 130px;
      margin: 0;
      border: 0;
      border-left: 1px solid ${({theme}) => theme.light};
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`;
