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

const moveY = keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(80px);
  }
`;

const TextAnimation = styled.img`
  width: 300px;
  position: absolute;
  animation: ${moveY} 1s ease-in-out forwards;
  animation-delay: 4s;
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
      <GalaxySvg style={{ zIndex: 1 }}>
        <Galaxy fill={colorSet.galactic_gradient_1} />
        <Belt fill={colorSet.galactic_gradient_1} />
      </GalaxySvg>
      <TextAnimation src={TextAnim} />
      <CTAButton style={{ zIndex: 1 }}>
        <Text font={Font.Bold} color={colorSet.colorless} size="1rem">
          시작하기
        </Text>
      </CTAButton>
    </Area>
  );
};

export default Onboarding;
