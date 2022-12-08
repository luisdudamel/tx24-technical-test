import styled from "styled-components";

export const ButtonStyled = styled.button`
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
