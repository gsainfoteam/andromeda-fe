import React from "react";
import colorSet from "src/styles/color-set";
import styled, { css } from "styled-components";

enum Variant {
  outlined = "outlined",
  contained = "contained",
}

interface Props {
  variant?: Variant;
}

const CTAButton = styled.button<Props>`
  width: 60vw;
  height: 3rem;
  border-radius: 30px;
  border: none;
  background: ${colorSet.galactic_gradient_1};
`;

export default CTAButton;
