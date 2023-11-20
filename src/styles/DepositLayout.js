import styled from "styled-components";

export const DepositLayout = styled.div`
  width: 100%;
  height: 942px;
  background: var(--White, #fff);
  position: relative;
`;

export const DepositCardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: absolute;
  margin-top: 120px;
`;

export const DepositCardLayout = styled.div`
  background: #f3f3f3;
  border-radius: 20px;
  width: 553px;
  height: 450px;
  position: relative;
  .frame {
    opacity: 0.55;
    mix-blend-mode: soft-light;
    position: absolute;
    margin-left: 230px;
  }
`;

export const DepositCardData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  margin-left: 40px;
`;

export const DepositCardHeader = styled.div`
  width: 175.5px;
  color: var(--White, #0e0e0f);
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 50.625px;
  letter-spacing: -1.687px;
`;

export const DepositCardSubHeader = styled.div`
  width: 70%;
  color: var(--neutrals-grey-6, #666673);
  font-size: 15.75px;
  font-style: normal;
  font-weight: 400;
  line-height: 23.625px;
`;
