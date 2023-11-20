import styled from "styled-components";

export const AccountOpenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  gap: 60px;
  margin-left: 190px;
  .lineImg {
    stroke-width: 1px;
    stroke: rgba(255, 255, 255, 0);
    opacity: 1;
  }
`;

export const AccountWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const StepsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
`;

export const StepsHeader = styled.div`
  color: var(--White, #fff);
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const StepsSubHeader = styled.div`

  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
`;
