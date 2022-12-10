import styled from "styled-components";

export const FormButtonStyled = styled.button`
  width: 200px;
  height: 46.88px;
  left: 88px;
  top: 1112.02px;
  color: ${({ theme }) => theme.colors.buttonText};
  background: ${({ theme }) => theme.colors.mainColor};
  border-radius: 5px;
  border: none;
  width: 200px;
  height: 46.88px;
  cursor: pointer;
  font-family: "Sansation Light";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.05em;

  &:active {
    background-color: ${({ theme }) => theme.colors.appBackground};
    color: ${({ theme }) => theme.colors.mainColor};
    border: solid 1px ${({ theme }) => theme.colors.mainColor};
  }
  &:disabled {
    background-color: #c4c4c4;
    &:active {
      background-color: none;
      color: white;
      border: none;
    }
  }
`;

export const IdentityButtonStyled = styled.button`
  display: flex;
  padding-left: 15px;
  gap: 10px;
  color: ${({ theme }) => theme.colors.inactiveColor};
  background: ${({ theme }) => theme.colors.mainColor};
  font-family: "Sansation Light";
  width: 280px;
  height: 70px;
  left: 48px;
  top: 208px;
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors.inactiveColor};
  border-radius: 10px;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  cursor: pointer;

  &:active {
    background-color: ${({ theme }) => theme.colors.appBackground};
    color: ${({ theme }) => theme.colors.mainColor};
    border: solid 1px ${({ theme }) => theme.colors.mainColor};
  }
  &:disabled {
    background-color: #c4c4c4;
    &:active {
      background-color: none;
      color: white;
      border: none;
    }
  }
`;
