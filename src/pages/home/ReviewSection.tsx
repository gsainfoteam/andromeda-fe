import React from "react";
import Flex from "src/atoms/containers/flex/Flex";
import Text from "src/atoms/text/Text";
import colorSet from "src/styles/color-set";
import Font from "src/styles/fonts";
import ReviewInput from "./ReviewInput";
import ReviewInfo from "./ReviewInfo";
import Divider, { DividerVariant } from "src/atoms/divider/Divider";
import styled from "styled-components";
import { ILectureList, reviewList } from "./data";
import Star from "src/atoms/star/Star";

interface ReviewListProps {
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  lecture: ILectureList;
}

const SectionWrapper = styled(Flex)`
  padding: 30px;
  border: 1px solid ${colorSet.deselected};
  box-sizing: border-box;
  overflow-y: auto;
  flex-wrap: nowrap;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const InfoText = styled(Text)`
  margin-bottom: 10px;
  span {
    color: ${colorSet.titleText};
    font-weight: 400;
    margin-right: 7px;
  }
`;
const ColorAlteringText = styled(Text)`
  span {
    color: ${colorSet.titleText};
    font-weight: 400;
  }
`;

const ReviewSection = ({ width, height, lecture }: ReviewListProps) => {
  return (
    <SectionWrapper
      flexDirection="column"
      gap="30px"
      width={width}
      height={height}
    >
      <Flex flexDirection="column" gap="0px">
        <Text
          color={colorSet.colorless}
          font={Font.Bold}
          size="30px"
          style={{ marginBottom: "20px" }}
        >
          {lecture.title}
        </Text>
        <InfoText color={colorSet.colorless} font={Font.Medium} size="20px">
          <span>분류</span>
          {lecture.departure}
        </InfoText>
        <InfoText color={colorSet.colorless} font={Font.Medium} size="20px">
          <span>교수명</span>
          {lecture.professor}
        </InfoText>
        <InfoText color={colorSet.colorless} font={Font.Medium} size="20px">
          <span>과목코드</span>
          {lecture.lectureCode}
        </InfoText>
      </Flex>
      <Flex flexDirection="column" gap="20px">
        <Flex alignItems="center" justifyContent="space-between">
          <Text color={colorSet.colorless} font={Font.Bold} size="28px">
            평점
          </Text>
          <Flex gap="10px">
            <Star color="green" STAR_RATE={5.0} starsize={30} />
            <Text color={colorSet.galactic_green} font={Font.Bold} size="28px">
              5.0
            </Text>
          </Flex>
        </Flex>
        <Flex flexDirection="column" gap="10px">
          <Flex alignItems="center" justifyContent="space-between">
            <Text color={colorSet.colorless} font={Font.Bold} size="28px">
              수강신청 난이도
            </Text>
            <Flex gap="10px">
              <Star color="purple" STAR_RATE={3.0} starsize={30} />
              <Text
                color={colorSet.galactic_purple}
                font={Font.Bold}
                size="28px"
              >
                3.0
              </Text>
            </Flex>
          </Flex>
          <Flex flexDirection="column" gap="5px">
            <Text color={colorSet.titleText} font={Font.Medium} size="18px">
              <span style={{ color: colorSet.colorless }}>
                23년도 가을학기{" "}
              </span>
              수강신청 당시, 1분반은 정원이 차기까지{" "}
              <span style={{ color: colorSet.galactic_purple }}>2분 11초 </span>
              걸렸어요.
            </Text>
            <Text color={colorSet.titleText} font={Font.Medium} size="18px">
              <span style={{ color: colorSet.colorless }}>
                23년도 가을학기{" "}
              </span>
              수강신청 당시, 2분반은 정원이 차기까지{" "}
              <span style={{ color: colorSet.galactic_purple }}>2분 07초 </span>
              걸렸어요.
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex flexDirection="column" gap="20px">
        <Text color={colorSet.colorless} font={Font.Bold} size="28px">
          총평
        </Text>
        <ReviewInput width="100%" />
      </Flex>
      <Flex flexDirection="column" gap="25px">
        {reviewList.map((review, idx) => {
          return (
            <>
              {idx != 0 && <Divider />}
              <ReviewInfo key={idx} review={review} />
            </>
          );
        })}
      </Flex>
    </SectionWrapper>
  );
};

export default ReviewSection;
