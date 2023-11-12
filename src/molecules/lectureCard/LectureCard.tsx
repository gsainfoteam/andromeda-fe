import React from "react";
import styled from "styled-components";

import Card, { CardVariant } from "../../atoms/card/Card";
import colorSet from "src/styles/color-set";
import Text from "src/atoms/text/Text";
import Font from "src/styles/fonts";
import { ILectureList } from "src/pages/home/data";

interface LectureCardProps extends HilightProps, UniProps, ContentProps {}

interface HilightProps {
  hilight: boolean;
}
interface UniProps {
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
}
interface ContentProps {
  lecture: ILectureList;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const InfoText = styled(Text)`
  margin-bottom: 6px;
  span {
    color: ${colorSet.titleText};
    font-weight: 400;
    margin-right: 7px;
  }
`;

const LectureCard: React.FC<LectureCardProps> = ({
  hilight,
  width,
  height,
  lecture,
  onClick,
}) => {
  return (
    <Card
      width={width}
      height={height}
      variant={hilight ? CardVariant.hilightedGreen : undefined}
      style={{
        padding: "23px 28px",
        borderRadius: "25px",
      }}
      onClick={onClick}
    >
      <Text
        color={hilight ? colorSet.galactic_green : colorSet.colorless}
        font={Font.Bold}
        size="28px"
        style={{ marginBottom: "10px" }}
      >
        {lecture.title}
      </Text>
      <InfoText
        color={hilight ? colorSet.galactic_green : colorSet.colorless}
        font={Font.Medium}
        size="20px"
      >
        <span>분류</span>
        {lecture.departure}
      </InfoText>
      <InfoText
        color={hilight ? colorSet.galactic_green : colorSet.colorless}
        font={Font.Medium}
        size="20px"
      >
        <span>교수명</span>
        {lecture.professor}
      </InfoText>
      <InfoText
        color={hilight ? colorSet.galactic_green : colorSet.colorless}
        font={Font.Medium}
        size="20px"
      >
        <span>과목코드</span>
        {lecture.lectureCode}
      </InfoText>
    </Card>
  );
};

export default LectureCard;
