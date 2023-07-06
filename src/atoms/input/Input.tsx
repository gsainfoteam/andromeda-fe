import React, { ChangeEvent } from "react";
import styled from "styled-components";

import Text from "../text/Text";
import Font from "../../styles/fonts";

interface InputProps {
  label?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  width?: string;
  height?: string;
  padding?: string;
  color?: string;
  fontFamily?: string;
  fontWeight?: string;
  fontSize?: string;
}

const InputText = styled.input<InputProps>`
  all: unset;
  color: ${(props) => props.color};
  ::placeholder {
    color: ${(props) => props.color};
  }
`;

const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  placeholder,
  width,
  height,
  padding,
  color,
  fontFamily,
  fontWeight,
  fontSize,
}) => {
  const inputTextStyle: React.CSSProperties = {
    width,
    height,
    padding,
    fontFamily,
    fontSize,
    fontWeight,
  };
  const hrStyle: React.CSSProperties = {
    border: "0px",
    width,
    margin: "0px",
    borderTop: "1px solid",
    borderTopColor: color,
  };
  return (
    <div style={{ width: "305px" }}>
      {label && (
        <Text font={Font.Medium} size="14px">
          {label}
        </Text>
      )}
      <InputText
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={inputTextStyle}
        color={color}
      />
      <hr style={hrStyle} />
    </div>
  );
};

export default Input;
