import styled, { keyframes } from "styled-components";
import { Bell } from "styled-icons/boxicons-regular";

const Ring = keyframes`
  0% { transform: rotate(0); }
  1% { transform: rotate(30deg); }
  3% { transform: rotate(-28deg); }
  5% { transform: rotate(34deg); }
  7% { transform: rotate(-32deg); }
  9% { transform: rotate(30deg); }
  11% { transform: rotate(-28deg); }
  13% { transform: rotate(26deg); }
  15% { transform: rotate(-24deg); }
  17% { transform: rotate(22deg); }
  19% { transform: rotate(-20deg); }
  21% { transform: rotate(18deg); }
  23% { transform: rotate(-16deg); }
  25% { transform: rotate(14deg); }
  27% { transform: rotate(-12deg); }
  29% { transform: rotate(10deg); }
  31% { transform: rotate(-8deg); }
  33% { transform: rotate(6deg); }
  35% { transform: rotate(-4deg); }
  37% { transform: rotate(2deg); }
  39% { transform: rotate(-1deg); }
  41% { transform: rotate(1deg); }
  43% { transform: rotate(0); }
  100% { transform: rotate(0); }
`;
export const BellIcon = styled(Bell)``;

export const Container = styled.div``;

export const FormSubscribe = styled.div`
  width: 100%;
  background: rgb(115, 41, 55);

  background: linear-gradient(
    241deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.secondary} 100%
  );

  padding: 2.5rem;
  margin: auto;
  h4 {
    text-align: center;
    font-size: 2.5rem;
    color: #fff;
  }
  .msg {
    height: 4rem;
    width: 100%;
    margin: auto;
    span {
      font-size: 2rem;
      color: #fff;
      text-align: center;
      width: 100%;
    }
  }
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2.5rem 0;
    flex-direction: column;
    button {
      display: flex;
      justify-content: center;
      align-items: center;

      position: relative;

      width: 16rem;
      margin: 2.5rem auto;
      padding: 0.5rem;
      border: 0.1rem solid ${({ theme }) => theme.colors.primary};

      color: ${({ theme }) => theme.colors.primary};
      background: #fff;
      cursor: pointer;

      > span {
        position: relative;
        display: flex;
        align-items: center;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.primary};
        font-size: 1.6rem;
        background-repeat: repeat;
        background-size: 200%;
        background-position: 100% 0;
        transition: 0.5s;
        ${BellIcon} {
          color: ${({ theme }) => theme.colors.primary};
          width: 1.6rem;
          height: 1.6rem;
          margin: 0 0 0 1rem;
          transition: 0.5s;
          animation: ${Ring} 4s 0.7s ease-in-out infinite;
          transform-origin: 50% 4px;
        }
      }

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background: ${({ theme }) => theme.colors.primary};

        transition: 0.5s;
      }

      &:hover {
        span {
          background-position: 0 0;

          color: #fff;
          ${BellIcon} {
            color: #fff;
          }
        }
        &::before {
          width: 100%;
        }
      }
    }
  }

  input {
    width: 30rem;
    padding: 0.5rem;
    border: 0.1rem solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    background: #fff;
    font-size: 1.6rem;
    margin: 1.6rem;

    color: #000;
    outline: none;
    font-weight: 500;
    &::placeholder {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s;
    -webkit-text-fill-color: #000 !important;
  }

  @media (min-width: 768px) {
    form {
      flex-direction: row;
      button {
        margin: 0 0 0 2.5rem;
      }
    }
  }
`;
