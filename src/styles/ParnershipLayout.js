import styled from "styled-components";

export const PartnershipLayout = styled.div`
  margin-top: 120px;
`;

export const PartnerCompany = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 954px;
  height: 301px;
  margin-left: 250px;
  gap: 117px;
  align-items: center;
  margin-top: 140px;
`;

export const CompanyPerson = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1014px;
  height: 446px;
  margin-left: 250px;
  align-items: center;
  margin-top: 140px;
  gap: 40px;
  justify-content: space-around;
`;

export const PersonInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PersonName = styled.div`
  color: var(--White, #fff);
  font-size: 20.48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  section {
    color: var(--neutrals-grey-7, #808090);
    font-size: 12.8px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%;
    text-align: center;
  }
`;
