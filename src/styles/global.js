import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased !important;
    transition: background-color 200ms, color 200ms,  border-color 200ms ease;
    color: ${({ theme }) => theme.light};
  }

  body {
    background: #f3f5f8;
  }

  html, body, input, button, select, option {
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
    font-size: 14px;
    line-height: 18px
  }

  button {
    border: 0;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  /* helpers */

  .row {
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    margin-top: 15px;

    @media screen and (min-width: 933px) {
      flex-direction: row;

      & + .row {
        margin-top: 15px;
      }
    }
  }

  .col {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;

    & + .col {
      margin-top: 15px;
    }

    @media screen and (min-width: 933px) {
      & + .col {
        margin-top: 0;
        margin-left: 15px;
      }
    }
  }

  .mt-0 {
    margin-top: 0 !important;
  }


`;
