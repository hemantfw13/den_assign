import styled from "styled-components";

export const FooterLayout = styled.div`
  display: flex;
  padding: 63px 245px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 100%;
  background: #229851;
`;

export const FooterLinkWrapper = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-evenly;
`;
export const FooterLink = styled.div`
  color: var(--White, #fff);
  font-size: 13.998px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const FooterText = styled.div`
  width: 786.88px;
  color: #ddd;
  text-align: center;
  font-size: 13.998px;
  font-style: normal;
  font-weight: 400;
  line-height: 23.996px;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-evenly;
`;
