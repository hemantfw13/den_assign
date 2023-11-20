import styled from "styled-components";

export const HeroLayout = styled.div`
  display: flex;
  padding: 80px 0px 120px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 76px;

  section {
    color: #e7e7ea;
    text-align: center;
    font-size: 24px;
    font-weight: 400;
    line-height: normal;
  }
`;

export const HeroText = styled.article`
  color: ${({ theme }) => theme.colors.colorlightGray};
  text-align: center;
  font-size: 96px;
  font-weight: 700;
  line-height: 100px;
  letter-spacing: -4.19px;
  height: 200px;
  width: 693px;

  strong {
    background: linear-gradient(97deg, #78e65d 47.68%, #d5fa39 70.85%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

// export const HeroImageWrapper = styled.div`
//   width: 779.594px;
//   height: 668.698px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
