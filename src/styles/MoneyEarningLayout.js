import styled from "styled-components";

export const MoneyEarningLayout = styled.div`
  width: 100%;
  height: 938;
  display: flex;
  padding: 140px 0px;
  flex-direction: column;
  align-items: center;
  gap: 82px;
`;

export const MoneyCardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const MoneyCardLayout = styled.div`
  background: var(--neutrals-grey-9, #19191d);
  border-radius: 20px;
  width: 369px;
  height: 438px;
  position: relative;
  .frame {
    opacity: 0.8;
    position: absolute;
  }
`;

export const MoneyCardData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  margin-left: 20px;
`;

export const CardText = styled.div`
  color: var(--White, #fff);
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: -1px;
  width: 243px;
`;
