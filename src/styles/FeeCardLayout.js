import styled from "styled-components";

export const FeecardsLayout = styled.div`
  background: var(--neutrals-grey-9, #19191d);
  border-radius: 20px;
  width: 369px;
  height: 438px;
  position: relative;
  .frame {
    opacity: 0.8;
    position: absolute;
  }
  .company {
    opacity: 1;
  }
`;

export const FeemiddlecardsLayout = styled.div`
  background: linear-gradient(
    180deg,
    #daf760 -1.86%,
    rgba(50, 216, 117, 0.96) 146.77%
  );
  box-shadow: 0px 0px 40px 0px rgba(226, 255, 111, 0.8);
  border-radius: 20px;
  width: 369px;
  height: 438px;
  position: relative;
  .frame {
    opacity: 0.8;
    position: absolute;
  }
  .company {
    opacity: 1;
  }
`;

export const FeeCardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const FeeCardData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const CardNumbersData = styled.div`
  color: "#000000";
  font-size: 32px;
  font-weight: 700;
  line-height: 50.625px;
  letter-spacing: -1.687px;
`;

export const CardNumberData = styled.div`
  color: var(--White, #fff);
  font-size: 32px;
  font-weight: 700;
  line-height: 50.625px;
  letter-spacing: -1.687px;
`;
export const CardTextData = styled.div`
  color: var(--White, #fff);
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -1.687px;
  opacity: 0.5;
`;

export const CardTextsData = styled.div`
  color: #000;
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -1.687px;
  opacity: 0.5;
`;
