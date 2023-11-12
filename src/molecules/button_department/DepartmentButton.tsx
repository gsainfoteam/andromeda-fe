import React from "react";
import Button from "src/atoms/button/Button";
import Card, { CardVariant } from "src/atoms/card/Card";
import Flex from "src/atoms/containers/flex/Flex";
import Text from "src/atoms/text/Text";
import colorSet from "src/styles/color-set";
import Font from "src/styles/fonts";

export enum DepartmentButtonVariant {
  deselected = "deselected",
  selectedMajor = "selectedMajor",
  selectedMinor = "selectedMinor",
}

interface DepartmentButtonProps {
  departmentCode: string;
  departmentName: string;
  variant?: DepartmentButtonVariant;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const DepartmentButton = ({
  departmentCode,
  departmentName,
  variant = DepartmentButtonVariant.deselected,
  onClick,
}: DepartmentButtonProps) => {
  let cardVariant;
  let textColor;
  switch (variant) {
    case DepartmentButtonVariant.selectedMajor:
      cardVariant = CardVariant.hilightedGreen;
      textColor = colorSet.galactic_green;
      break;
    case DepartmentButtonVariant.selectedMinor:
      cardVariant = CardVariant.hilightedPurple;
      textColor = colorSet.galactic_purple;
      break;
    case DepartmentButtonVariant.deselected:
    default:
      cardVariant = undefined;
      textColor = colorSet.deselected;
      break;
  }

  return (
    <Button
      width="76px"
      height="102px"
      style={{ padding: "0px" }}
      onClick={onClick}
    >
      <Card
        width="76px"
        height="102px"
        variant={cardVariant}
        style={{ borderRadius: "15px", paddingInline: "10px" }}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-end"
          alignItems="center"
          gap="5px"
          height="100%"
        >
          <Text color={textColor} font={Font.Schweiz} size="31px">
            {departmentCode}
          </Text>
          <Text color={textColor} font={Font.Bold} size="14px">
            {departmentName}
          </Text>
        </Flex>
      </Card>
    </Button>
  );
};

export default DepartmentButton;
