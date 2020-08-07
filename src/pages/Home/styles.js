import styled, { css, keyframes } from 'styled-components';

const pulse = keyframes `
  0 {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
`;
export const Container = styled.div `
  width: 933px;
  max-width: 100%;
  /* border: 1px solid #aaa; */
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 933px) {
    padding: 0;
  }

  header {
    padding: 15px 0;

    img {
      width: 150px;
    }
  }

  .float-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    border-radius: 24px;
    height: 48px;
    border: 2px solid #fff;
    z-index: 9999;

    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`;

export const ContentContainer = styled.div `
  display: flex;
  flex-direction: column;
  /* max-height: 312px; */
  margin-top: 30px;
`;

export const ContentBody = styled.div `
  display: flex;
  flex-direction: column;
  padding: 40px;
  background: #fff;
  border-bottom-left-radius: ${({ theme }) => theme.baseRadius};
  border-bottom-right-radius: ${({ theme }) => theme.baseRadius};

  form {
    width: 100%;
  }

  .checkbox-row {
    display: flex;
    align-items: center;

    div + div {
      margin-left: 40px;
    }
  }
`;

export const ContentHeader = styled.div `
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    margin: 0 auto;
    @media screen and (min-width: 768px) {
      margin: 0;
    }
  }

  button {
    @media screen and (min-width: 933px) {
      margin-right: 20px;
    }
  }

  .send-car {
    display: none;

    @media screen and (min-width: 768px) {
      display: block;
    }
  }
`;

export const Tab = styled.div `
  display: flex;
  align-items: flex-end;
  padding: 5px 10px;
  border-bottom: 3px solid ${({ theme }) => theme.disabled};
  transition: all 200ms ease;
  cursor: pointer;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    padding: 15px 20px;
  }


  svg {
    transform: scale(1.2);

    #Landing_pageSemBusca {
      fill: ${({ theme }) => theme.light};
    }
    @media screen and (max-width: 380px) {
      display: none;
    }
  }

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.light};

    span {
      margin-bottom: 3px;
    }

    h2 {
      font-weight: normal;
      font-size: 26px;
    }
  }
  ${props =>
    props.active &&
    css`
      border-color: ${props.theme.primary};

      svg #Landing_pageSemBusca {
        fill: ${props.theme.primary};
      }

      div h2 {
        color: ${props.theme.primary};
      }
    `}
`;

export const ActionContainer = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .advanced-search {
    color: ${({ theme }) => theme.primary};
    font-weight: bold;
    font-size: 16px;
  }

  .get-vehicles-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;

    @media screen and (min-width: 565px) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    @media screen and (min-width: 768px) {
      justify-content: flex-end;
      align-items: center;
      margin-top: 0;
    }

    .filters-clean {
      background: transparent;
      outline: 0;
      font-weight: bold;
      font-size: 16px;
      color: ${({ theme }) => theme.light};
      margin-bottom: 30px;

      @media screen and (min-width: 565px) {
        margin-right: 30px;
        margin-bottom: 0;
      }
    }

    .send-button {
      font-size: 20px;
      text-transform: uppercase;
      padding: 10px 60px;
      height: 50px !important;
    }
  }
`;

export const VehiclesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 0px;
  grid-gap: 30px;
  margin-top: 50px;

  @media screen and (min-width: 565px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    padding: 0 40px;
  }

  @media screen and (min-width: 933px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Vehicle = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.baseRadius};
  `}
  position: relative;
  background: #fff;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 300px;

  .image-container {
    overflow: hidden;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 100%;
    }
  }

  .content {
    padding: 10px;

    p {
      text-transform: uppercase;
      font-weight: bold;
    }

    .vehicle-info {
      height: 100px;
    }

    .title,
    .price {
      color: ${({ theme }) => theme.dark};
    }

    .version {
      color: ${({ theme }) => theme.light};
    }

    .price-container {
      .price {
        font-size: 20px;
      }
    }

    .year-km-container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .year {
        display: block;
        margin-top: 5px;
      }
    }
  }
`;

export const Loading = styled.img`
  display: flex;
  opacity: 1;
  margin: 50px auto;
  animation: ${pulse} 1000ms ease infinite;

`;