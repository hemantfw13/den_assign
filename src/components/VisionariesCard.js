import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import {
  VisionariesCardWrapper,
  VisionariesCardLayout,
  VisionariesCardData,
  VisionariesCardImageWrapper,
  VisionariesCardHeader,
  VisionariesCardSubHeader,
} from "../styles/VisionariesLayout";
const VisionariesCard = () => {
  return (
    <VisionariesCardWrapper>
      <VisionariesCardLayout>
        <StaticImage
          src="../assets/Images/Frame.png"
          alt="phone"
          width={284}
          height={239}
          className="frame"
        />
        <VisionariesCardData>
          <VisionariesCardHeader>Aakash Neeraj Mittal</VisionariesCardHeader>
          <VisionariesCardSubHeader>CEO, Density</VisionariesCardSubHeader>
          <VisionariesCardImageWrapper>
            <StaticImage src="../assets/Images/linkedin.png" alt="linkedin" />
            <StaticImage
              src="../assets/Images/aakash.png"
              alt="aakash"
              width={273}
              height={257}
            />
          </VisionariesCardImageWrapper>
        </VisionariesCardData>
      </VisionariesCardLayout>
      <VisionariesCardLayout>
        <StaticImage
          src="../assets/Images/Frame.png"
          alt="frame"
          width={284}
          height={239}
          className="frame"
        />
        <VisionariesCardData>
          <VisionariesCardHeader>Bhupendra Bule</VisionariesCardHeader>
          <VisionariesCardSubHeader>CTO, Density</VisionariesCardSubHeader>
          <VisionariesCardImageWrapper>
            <StaticImage src="../assets/Images/linkedin.png" alt="linkedin" />
            <StaticImage
              src="../assets/Images/bhupendra.png"
              alt="bhupendra"
              width={273}
              height={300}
            />
          </VisionariesCardImageWrapper>
        </VisionariesCardData>
      </VisionariesCardLayout>
      <VisionariesCardLayout>
        <StaticImage
          src="../assets/Images/Frame.png"
          alt="phone"
          width={284}
          height={239}
          className="frame"
        />
        <VisionariesCardData>
          <VisionariesCardHeader>Deepak Vasman</VisionariesCardHeader>
          <VisionariesCardSubHeader>CBO, Density</VisionariesCardSubHeader>
          <VisionariesCardImageWrapper>
            <StaticImage src="../assets/Images/linkedin.png" alt="linkedin" />
            <StaticImage
              src="../assets/Images/deepak.png"
              alt="deepak"
              width={273}
              height={300}
            />
          </VisionariesCardImageWrapper>
        </VisionariesCardData>
      </VisionariesCardLayout>
    </VisionariesCardWrapper>
  );
};

export default VisionariesCard;
