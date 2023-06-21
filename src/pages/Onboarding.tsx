import { Belt, Galaxy } from "src/assets/Galaxy";
import CTAButton from "src/atoms/button_CTA/CTAButton";
import Text from "src/atoms/text/Text";
import colorSet from "src/styles/color-set";
import Font from "src/styles/fonts";
import styled, { keyframes } from "styled-components";

import TextAnim from "../assets/ANDROMEDA_TEXT_ANIMATION_ONCE.gif";
import Area from "../atoms/containers/area/Area";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const CTABtnWrap = styled.div`
  opacity: 0;
  animation: ${fadeIn} 1s forwards;
  animation-delay: 4s;
  transform: translateY(210px);
`;

const moveY = keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(90px);
  }
`;

const TextAnimation = styled.img`
  width: 300px;
  position: absolute;
  animation: ${moveY} 0.5s ease-out forwards;
  animation-delay: 4s;
`;

const TextDes = styled(Text)`
  opacity: 0;
  position: absolute;
  transform: translateY(125px);
  animation: ${fadeIn} 1s forwards;
  animation-delay: 4.5s;
`;

const GalaxySvg = styled(Area)`
  svg {
    position: absolute;
  }
`;

const Onboarding = () => {
  return (
    <Area
      style={{
        height: "100vh",
      }}
    >
      <GalaxySvg style={{ zIndex: 2 }}>
        <Galaxy />
        <Belt />
      </GalaxySvg>
      <TextAnimation src={TextAnim} />
      <TextDes
        font={Font.Bold}
        size="0.9rem"
        color={colorSet.colorless}
        style={{ zIndex: 1 }}
      >
        지스트 수강평가의 새로운 지평
      </TextDes>
      <CTABtnWrap>
        <CTAButton style={{ zIndex: 1 }}>
          <Text font={Font.Bold} color={colorSet.colorless} size="1.2rem">
            시작하기
          </Text>
        </CTAButton>
      </CTABtnWrap>
    </Area>
  );
};

export default Onboarding;
