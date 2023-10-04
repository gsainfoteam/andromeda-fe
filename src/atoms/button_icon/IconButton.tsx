import React from "react";
import Button from "../button/Button";
import Flex from "../containers/flex/Flex";
import Text from "../text/Text";
import colorSet from "src/styles/color-set";
import Font from "src/styles/fonts";

interface IconButtonProps {
  text: string;
  fontSize?: React.CSSProperties["fontSize"];
  icon: React.ReactNode;
}

const IconButton = ({ text, fontSize = "16px", icon }: IconButtonProps) => {
  return (
    <Button>
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
