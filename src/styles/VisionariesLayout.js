import styled from "styled-components";

export const VisionariesLayout = styled.div`
  display: flex;
  padding: 140px 0px;
  flex-direction: column;
  align-items: center;
  gap: 82px;
  width: 100%;
  height: 596;
`;

export const VisionariesCardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const VisionariesCardLayout = styled.div`
  background: var(--neutrals-grey-8, #32333a);
  border-radius: 20px;
  width: 323px;
  height: 380px;
  position: relative;
  .frame {
    opacity: 0.8;
    position: absolute;
  }
`;

export const VisionariesCardData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  margin-left: 20px;
`;

export const VisionariesCardHeader = styled.div`
  width: 239px;
  color: var(--White, #fff);
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: -1px;
`;

export const VisionariesCardSubHeader = styled.div`
  color: var(--neutrals-grey-6, #bbbbc3);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: -1px;
`;

export const VisionariesCardImageWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
`;
