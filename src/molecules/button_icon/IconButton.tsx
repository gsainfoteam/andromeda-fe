import React from "react";
import Button from "../../atoms/button/Button";
import Flex from "../../atoms/containers/flex/Flex";
import Text from "../../atoms/text/Text";
import colorSet from "src/styles/color-set";
import Font from "src/styles/fonts";

interface IconButtonProps {
  text: string;
  fontSize?: React.CSSProperties["fontSize"];
  icon: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const IconButton = ({
  text,
  fontSize = "16px",
  icon,
  onClick,
}: IconButtonProps) => {
  return (
    <Button onClick={onClick}>
      <Flex gap="5px" alignItems="center">
        <Text color={colorSet.titleText} font={Font.Medium} size={fontSize}>
          {text}
        </Text>
        {icon}
      </Flex>
    </Button>
  );
};

export default IconButton;
