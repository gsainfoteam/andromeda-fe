import React from "react";
import styled, { css } from "styled-components";

import colorSet from "../../styles/color-set";

enum ButtonVariant {
  outlined = "outlined",
  contained = "contained",
}

interface ButtonProps {
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  border?: React.CSSProperties["border"];
  borderRadius?: React.CSSProperties["borderRadius"];
  disabled?: boolean;
  variant?: ButtonVariant;
}

const Button = styled.button<ButtonProps>`
  width: ${({ width }) => (width ? width : undefined)};
  height: ${({ height }) => (height ? height : undefined)};
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  transition: 0.1s;

  ${({ variant }) => {
    switch (variant) {
      case ButtonVariant.outlined:
        return css`
          border-image: 1px solid ${colorSet.galactic_gradient_1};
          border-radius: 5px;
          padding: 10px 20px;
          color: ${colorSet.galactic_gradient_1};

          :hover {
            background-color: ${colorSet.deselected};
          }
        `;
      case ButtonVariant.contained:
        return css`
          background: ${colorSet.galactic_gradient_1};
          border-radius: 5px;
          padding: 10px 20px;
          color: ${colorSet.colorless};

          :hover {
            box-shadow: inset rgba(0, 0, 0, 0.15) 0px 0px 0px 40px;
          }
        `;
    }
  }}
  ${({ border }) => css`
    border: ${border};
  `}
  :hover {
    cursor: pointer;
  }
`;

export default Button;
