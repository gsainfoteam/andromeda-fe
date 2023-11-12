import colorSet from "src/styles/color-set";
import styled, { css } from "styled-components";

export enum CardVariant {
  hilightedGreen = "hilightedGreen",
  hilightedPurple = "hilightedPurple",
}

interface CardProps {
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  variant?: CardVariant;
}

const Card = styled.div<CardProps>`
  width: ${({ width }) => width ?? "100%"};
  height: ${({ height }) => height ?? "auto"};

  box-sizing: border-box;
  padding: 15px;

  background-color: ${colorSet.card};
  border-radius: 10px;

  ${({ variant }) => {
    switch (variant) {
      case CardVariant.hilightedGreen:
        return css`
          box-shadow: 0 0 0 3px ${colorSet.galactic_green};
        `;
      case CardVariant.hilightedPurple:
        return css`
          box-shadow: 0 0 0 3px ${colorSet.galactic_purple};
        `;
      default:
        return css`
          box-shadow: 0 0 0 3px ${colorSet.deselected};
        `;
    }
  }}
`;

export default Card;
