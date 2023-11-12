import React, { ChangeEvent, useState } from "react";
import Card from "src/atoms/card/Card";
import SelectButton from "src/molecules/button_select/SelectButton";
import Text from "src/atoms/text/Text";
import Flex from "src/atoms/containers/flex/Flex";
import colorSet from "src/styles/color-set";
import Font from "src/styles/fonts";
import Input from "src/atoms/input/Input";
import Button, { ButtonVariant } from "src/atoms/button/Button";
import Spacer from "src/atoms/spacer/Spacer";
import { IReviewList, reviewList } from "./data";
import StarInput from "src/atoms/starinput/StarInput";
// import Textarea from "src/atoms/textarea/Textarea";

interface ReviewInputProps {
  width: React.CSSProperties["width"];
}

const ReviewInput = ({ width }: ReviewInputProps) => {
  const yearList = ["18", "19", "20", "21", "22", "23"];
  const semesterList = ["봄", "여름", "가을", "겨울"];
  const [currentReview, setCurrentReview] = useState<IReviewList>({
    year: 23,
    semester: "봄",
    content: "",
  });

  return (
    <Card
      width={width}
      height="220px"
      style={{
        padding: "20px",
        borderRadius: "25px",
        boxSizing: "border-box",
      }}
    >
      <Flex height="100%" flexDirection="column" justifyContent="space-between">
        <Flex justifyContent="space-between">
          <Flex gap="10px" alignItems="center">
            <SelectButton
              minWidth="120px"
              placeholder={yearList[yearList.length - 1]}
              options={yearList}
            />
            <Text
              color={colorSet.colorless}
              font={Font.Bold}
              size="20px"
              style={{ marginRight: "15px" }}
            >
              년도
            </Text>
            <SelectButton
              minWidth="120px"
              placeholder={semesterList[0]}
              options={semesterList}
            />
            <Text
              color={colorSet.colorless}
              font={Font.Bold}
              size="20px"
              style={{ marginRight: "15px" }}
            >
              학기
            </Text>
            <Text color={colorSet.colorless} font={Font.Bold} size="20px">
              수강
            </Text>
          </Flex>
          <StarInput color="green" starsize={20} />
        </Flex>

        <Input
          hilight={false}
          height="15px"
          placeholder="여기에 총평을 적어주세요."
          value={currentReview.content}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const newReview: IReviewList = {
              year: currentReview.year,
              semester: currentReview.semester,
              content: event.target.value,
            };
            setCurrentReview(newReview);
          }}
        />
        <Spacer height="40px" />
        {/* <Textarea
          height="50px"
          placeholder="여기에 총평을 적어주세요."
          maxLength={50}
        /> */}
        <Button width="115px" variant={ButtonVariant.contained}>
          <Text color={colorSet.colorless} font={Font.Bold} size="20px">
            제출하기
          </Text>
        </Button>
      </Flex>
    </Card>
  );
};

export default ReviewInput;
