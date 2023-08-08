import React from "react";
import styled from "styled-components";

import Card from "../../atoms/card/Card";
import colorSet from "src/styles/color-set";

interface HilightProps {
  hilight: boolean;
}

interface UniProps {
  width: string;
  height: string;
}

interface ContentProps {
  title: string;
  departure: string;
  professor: string;
  lectureCode: string;
}

interface LectureCardProps extends HilightProps, UniProps, ContentProps {}

const LectureCard: React.FC<LectureCardProps> = ({
  hilight,
  width,
  height,
  title,
  departure,
  professor,
  lectureCode,
}) => {
  const InnerText = styled.div<HilightProps & { type: "title" | "detail" }>`
    font-family: Noto Sans KR, sans-serif;
    font-weight: ${(props) => (props.type == "title" ? "700" : "500")};
    font-size: ${(props) => (props.type == "title" ? "32px" : "24px")};
    color: ${(props) =>
      props.hilight
        ? colorSet.galactic_green
        : colorSet.colorless}; // hilight 모드이면 galactic_green, 아니면 colorless
  `;
  return (
    <div>
      <Card
        width={width}
        height={height}
        hilight={hilight}
        style={{ padding: "23px 30px", borderRadius: "25px" }}
      >
        <InnerText
          hilight={hilight}
          type={"title"}
          style={{ marginBottom: "5px" }}
        >
          {title}
        </InnerText>
        <InnerText hilight={hilight} type={"detail"}>
          <span style={{ color: colorSet.titleText, fontWeight: "400" }}>
            분류{" "}
          </span>
          {departure}
        </InnerText>
        <InnerText hilight={hilight} type={"detail"}>
          <span style={{ color: colorSet.titleText, fontWeight: "400" }}>
            교수명{" "}
          </span>
          {professor}
        </InnerText>
        <InnerText hilight={hilight} type={"detail"}>
          <span style={{ color: colorSet.titleText, fontWeight: "400" }}>
            과목코드{" "}
          </span>
          {lectureCode}
        </InnerText>
      </Card>
    </div>
  );
};

export default LectureCard;
