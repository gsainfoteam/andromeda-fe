import React from "react";
import colorSet from "src/styles/color-set";
import styled, { css } from "styled-components";

enum Variant {
  outlined = "outlined",
  deselected = "deselected",
}

interface Props {
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  variant?: Variant;
}

const CTAButton = styled.button<Props>`
  width: ${({ width }) => (width ? width : "60vw")};
  height: 50px;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.1s;

  :active {
    transform: scale(0.95);
  }

  ${({ variant }) => {
    switch (variant) {
      case Variant.outlined:
        return css`
          border: 2px solid ${colorSet.galactic_green};
          background: transparent;
        `;
      case Variant.deselected:
        return css`
          border: 2px solid ${colorSet.deselected};
          background: transparent;
        `;
      default:
        return css`
          border: none;
          background: ${colorSet.galactic_gradient_1};

          :hover {
            box-shadow: inset rgba(0, 0, 0, 0.15) 0px 0px 0px 40px;
          }
        `;
    }
  }}
`;

export default CTAButton;
