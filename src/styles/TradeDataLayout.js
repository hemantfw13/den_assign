import styled from "styled-components";

export const TradeDataLayout = styled.div`
  display: flex;
  width: 1014px;
  height: 171px;
  justify-content: space-evenly;
  align-items: center;
  border: 0.5px solid rgba(50, 216, 117, 0.96);
  background: rgba(0, 0, 0, 0.05);
  box-shadow: 0px 0px 10px 0px rgba(235, 255, 37, 0.9);
  backdrop-filter: blur(26.25px);
  margin-left: auto;
  margin-right: auto;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .numberData {
    color: var(--electric-green-primary, #ebff25);
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .textData {
    color: #a9a9a9;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
  }
`;
