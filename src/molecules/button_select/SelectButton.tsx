import React, { useState } from "react";
import Icons from "src/assets/Icons";
import Font from "src/styles/fonts";
import styled from "styled-components";

import colorSet from "../../styles/color-set";
import Text from "../../atoms/text/Text";

interface SelectProps {
  minWidth?: React.CSSProperties["width"];
  placeholder?: string;
  options: string[];
}

const Item = styled.button<{
  isSelected: boolean;
}>`
  border: none;
  padding: 7px 15px;
  background-color: ${({ isSelected }) =>
    isSelected ? colorSet.deselected : colorSet.card};
  transition: 0.1s;
  :hover {
    cursor: pointer;
  }
`;

const Button = styled(Item)<{ minWidth: React.CSSProperties["width"] }>`
  min-width: ${({ minWidth }) => (minWidth ? minWidth : undefined)};
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  padding-right: 12px;
  :active {
    transform: scale(0.95);
  }
`;

const Option = styled(Item)`
  text-align: left;
  :hover {
    background-color: ${colorSet.titleText};
  }
`;

const DropdownWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  z-index: 1;
  :focus {
    outline: none;
    border: none;
    box-shadow: none;
  }
`;

const SelectButton = ({
  minWidth,
  placeholder = "select",
  options,
}: SelectProps) => {
  const [selected, setSelected] = useState(placeholder);
  const [isActive, setIsActive] = useState(false);
  const handleClickButton = () => {
    setIsActive(!isActive);
  };
  const handleClickOption = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelected(e.currentTarget.value);
    setIsActive(false);
  };

  return (
    <div style={{ width: "fit-content", position: "relative" }}>
      <Button
        value={selected}
        onClick={handleClickButton}
        onBlur={() => setIsActive(false)}
        minWidth={minWidth}
        isSelected={true}
      >
        <Text font={Font.Medium} size="20px" color={colorSet.colorless}>
          {selected}
        </Text>
        <Icons.Arrow size="22px" direction="DOWN" fill={colorSet.colorless} />
      </Button>
      {isActive && (
        <DropdownWrapper
          onMouseDown={(e) => {
            e.preventDefault();
          }}
        >
          {options.map((option, idx) => {
            return (
              <Option
                key={idx}
                value={option}
                onClick={handleClickOption}
                isSelected={option === selected}
              >
                <Text font={Font.Medium} size="20px" color={colorSet.colorless}>
                  {option}
                </Text>
              </Option>
            );
          })}
        </DropdownWrapper>
      )}
    </div>
  );
};

export default SelectButton;
