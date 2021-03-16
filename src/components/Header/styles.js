import styled, { css, keyframes } from "styled-components";
import media from "styled-media-query";

import Img from "gatsby-image";

// KEYFRAMES

const togglePulseActive = keyframes`
	0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(143, 113,87, 0.3);
	}

	70% {
		transform: scale(1);
		box-shadow: 0 0 0 2rem rgba(143, 113,87, 0);
	}

	100% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(143, 113,87, 0);
	}
`;

export const Logo = styled(Img)``;

export const Component = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  border-bottom: 0.01rem solid #8f71574a;
  background: #fff;
  z-index: 99999;
  transition: all 0.5s;

  .logo {
    transition: width 0.5s;
    padding: 1rem 0;
    ${(props) =>
      props.scroll > 50
        ? css`
            width: 14rem;
          `
        : css`
            width: 17rem;
          `}
    ${media.greaterThan("large")`
        ${(props) =>
          props.scroll > 100
            ? css`
                width: 18rem;
              `
            : css`
                width: 22rem;
              `} 
        `}
  }

  nav {
    display: block;
    ul {
      position: relative;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      list-style: none;
      margin-bottom: 0;

      li {
        position: relative;
        padding: 0 0 0 2rem;
        cursor: pointer;

        a,
        span {
          font-size: 1.3rem;
          font-weight: 600;
          text-decoration: none;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.text};

          letter-spacing: 1px;
          &:hover {
            color: ${({ theme }) => theme.colors.primary};
          }
        }
      }
    }
  }
`;

export const ToggleArea = styled.button`
  vertical-align: center;

  height: 4rem;
  width: 4rem;
  margin: auto 1.4rem auto;
  border: none;
  background: transparent;
  border-radius: 50%;
  outline: none;
  &:active {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
    transform: scale(1);
    animation: ${togglePulseActive} 1s;
  }
  .toggle {
    position: relative;
    height: 2rem;
    z-index: 1;

    span:nth-child(n) {
      width: 2.5rem;
      height: 0.25rem;
      position: absolute;
      background: ${({ theme }) => theme.colors.primary};
      transition: transform ease-out 0.2s;
      box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.12),
        0 0.1rem 0.2rem rgba(0, 0, 0, 0.24);
    }

    span:nth-child(1) {
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    span:nth-child(2) {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    span:nth-child(3) {
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }

    ${(props) =>
      props.menu === true &&
      css`
        span:nth-child(n) {
          position: absolute;
          top: 0.9rem;
          transition: transform ease-out 0.2s;
          opacity: 1;

          background: ${({ theme }) => theme.colors.primary};
        }
        span:nth-child(1) {
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
        }
        span:nth-child(2) {
          opacity: 0;
        }
        span:nth-child(3) {
          left: 50%;
          transform: translateX(-50%) rotate(-45deg);
        }
      `};
  }
`;
