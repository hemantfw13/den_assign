import styled from "styled-components";

const ButtonLayout = styled.button`
  color: ${({ theme }) => theme.colors.colorblack};
  font-size: 16px;
  font-weight: 700;
  border-radius: 8px;
  background: linear-gradient(86deg, #d4f938 23.09%, #32d875 108.69%);
  box-shadow: 0px 0px 16px 0px rgba(168, 239, 156, 0.8);
  backdrop-filter: blur(5px);
  height: 48px;
`;

export default ButtonLayout;
