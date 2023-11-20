import styled from "styled-components";

const NavbarLayout = styled.nav`
  display: flex;
  padding: 24px 216px;
  justify-content: center;
  align-items: center;
  gap: 387px;
  background-color: rgba(42, 93, 50, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0);
  backdrop-filter: blur(20px);
  div {
    display: flex;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    gap: 34px;
  }
  ul li {
    color: ${({ theme }) => theme.colors.colorlightGray};
    font-size: 14px;
    font-weight: 400;
  }

  button {
    color: ${({ theme }) => theme.colors.colorblack};
    font-size: 16px;
    font-weight: 700;
    border-radius: 8px;
    background: linear-gradient(86deg, #d4f938 23.09%, #32d875 108.69%);
    box-shadow: 0px 0px 16px 0px rgba(168, 239, 156, 0.8);
    backdrop-filter: blur(5px);
    height: 48px;
    padding: 5px 25px;
    margin-left: 50px;
`;

export default NavbarLayout;
