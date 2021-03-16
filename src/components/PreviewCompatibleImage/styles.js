import styled from "styled-components";

import Img from "gatsby-image";

export const BgImage = styled(Img)`
  width: 100%;
  height: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 1s;
  opacity: 0.9;
  &:hover {
    transform: scale(1.1);
    opacity: 0.3;
  }
`;
