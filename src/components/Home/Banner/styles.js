import styled from "styled-components";
import {
  ArrowLeftCircleFill,
  ArrowRightCircleFill,
  ArrowRight,
} from "styled-icons/bootstrap";

import Img from "gatsby-image";

export const LeftIcon = styled(ArrowLeftCircleFill)``;
export const RightIcon = styled(ArrowRightCircleFill)``;
export const RightButtonIcon = styled(ArrowRight)``;
export const BgImage = styled(Img)``;

export const Container = styled.div`
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  ${BgImage} {
    width: 100%;
    height: 100vh;
    &:before {
      width: 100%;
      height: 100%;
      content: " ";
      background: rgba(0, 0, 0, 0.7);
      position: absolute;
      left: 0;
      top: 0;
      z-index: 9;
    }
  }
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
    width: 300px;

    h2,
    h3,
    h4 {
      color: #fff;
      margin: 2.5rem 0;
      text-shadow: 2px 2px 4px rgba(150, 150, 150, 1);
    }
    h2 {
      font-size: 6rem;
    }
    h3 {
      font-size: 1.8rem;
    }
    h4 {
      font-size: 2.1rem;
    }

    a {
      position: relative;
      font-weight: 700;

      width: 20rem;
      margin: 2.5rem auto;
      padding: 1rem;
      border: 0.1rem solid ${({ theme }) => theme.colors.primary};

      font-size: 1.6rem;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.primary};
      background: #fff;

      cursor: pointer;

      > span {
        position: relative;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.primary};
        font-size: 1.9rem;
        background-image: linear-gradient(
          90deg,
          var(${({ theme }) => theme.colors.primary}) 0%,
          var(${({ theme }) => theme.colors.primary}) 50%,
          var(${({ theme }) => theme.colors.primary}) 50%,
          var(${({ theme }) => theme.colors.primary}) 100%
        );
        background-repeat: repeat;
        background-size: 200%;
        background-position: 100% 0;

        background-clip: text;
        transition: 0.5s;
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
        }
        &::before {
          width: 100%;
        }
      }
    }
    @media (min-width: 576px) {
      width: 540px;
    }
    @media (min-width: 768px) {
      width: 650px;
      h2,
      h3,
      h4 {
        color: #fff;
        margin: 2.5rem 0;
      }
      h2 {
        font-size: 8rem;
      }
      h3 {
        font-size: 1.8rem;
      }
      h4 {
        font-size: 2.6rem;
      }
    }
    @media (min-width: 992px) {
      width: 700px;
    }
    @media (min-width: 1200px) {
      width: 1024px;
    }
  }

  .controls {
    position: absolute;
    top: 85%;
    right: 1rem;
    display: flex;

    z-index: 10;

    ${RightIcon}, ${LeftIcon} {
      font-size: 6rem;
      color: #fff;
      cursor: pointer;
      user-select: none;
      width: 5rem;
      margin: 0 1.6rem;
      transition: 0.2s;
      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
    @media (min-width: 576px) {
      top: 82%;
    }
    @media (min-width: 768px) {
      top: 80%;
      right: 5rem;
    }
  }

  .slide {
    opacity: 0;
    transition-duration: 1s ease;
    max-width: 100%;
  }

  .slide.active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);
    max-width: 100%;
  }
`;
