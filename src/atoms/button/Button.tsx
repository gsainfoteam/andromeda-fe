import React from "react";
import styled, { css } from "styled-components";

import colorSet from "../../styles/color-set";

export enum ButtonVariant {
  outlined = "outlined",
  deselected = "deselected",
  contained = "contained",
}

interface ButtonProps {
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  gradient?: React.CSSProperties["backgroundColor"];
  gradientBorder?: React.CSSProperties["backgroundColor"];
  variant?: ButtonVariant;
}

const Button = styled.button<ButtonProps>`
  width: ${({ width }) => (width ? width : undefined)};
  height: ${({ height }) => (height ? height : undefined)};
  background-color: transparent;
  transition: 0.1s;
  border-radius: 6px;
  padding: 10px 20px;
  border: none;

  :active {
    transform: scale(0.95);
  }

  ${({ variant }) => {
    switch (variant) {
      case ButtonVariant.contained:
        return css`
          border: none;
          box-shadow: none;
          background: ${colorSet.galactic_green};
          color: ${colorSet.colorless};

          :hover {
            box-shadow: inset rgba(0, 0, 0, 0.15) 0px 0px 0px 40px;
          }
        `;

      case ButtonVariant.outlined:
        return css`
          background: transparent;
          box-shadow: 0 0 0 2px ${colorSet.galactic_green} inset;
        `;

      case ButtonVariant.deselected:
        return css`
          box-shadow: none;
          background: ${colorSet.background};
          color: ${colorSet.deselected};
        `;

      default:
        return css`
          box-shadow: none;
          background: transparent;
        `;
    }
  }}
  :hover {
    cursor: pointer;
  }
`;

export default Button;
