import styled from "styled-components";

export const FeedbackLayout = styled.div`
  width: 100%;
  height: 942px;
  background: var(--White, #fff);
  position: relative;
`;

export const FeedbackCardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: absolute;
  margin-top: 120px;
`;

export const FeedbackCardLayout = styled.div`
  background: #f3f3f3;
  border-radius: 20px;
  width: 362px;
  height: 450px;
  position: relative;
  .frame {
    opacity: 0.55;
    mix-blend-mode: soft-light;
    position: absolute;
    margin-left: 230px;
  }
`;

export const FeedbackCardData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  margin-left: 20px;
`;

export const FeedbackTextInfo = styled.div`
  width: 302px;
  color: var(--neutrals-grey-6, #666673);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
`;

export const FeedbackPersonWrapper = styled.div`
  display: flex;
`;
export const PersonInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Personname = styled.div`
  color: var(--White, #0e0e0f);
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -1px;
  width: 60%;
`;

export const PersonDesig = styled.div`
  color: var(--neutrals-grey-6, #666673);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
