import styled from "styled-components";

export const IdentityContainerStyled = styled.div`
  display: flex;
  height: 100%;
  flex: 1;
  justify-content: space-around;
  width: 100%;
  align-items: flex-start;
  flex-direction: column;
  align-items: center;
`;

export const IdentityInformationStyled = styled.p`
  font-family: "Sansation Light";
  font-style: normal;
  font-weight: 300;
  font-size: 17px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: justify;
  letter-spacing: 0.05em;
  color: black;
  padding: 0px 20px;
  margin-top: 50px;
`;

export const DocumentSelector = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  .button__active {
    background-color: ${({ theme }) => theme.colors.appBackground};
    color: ${({ theme }) => theme.colors.mainColor};
    border: solid 1px ${({ theme }) => theme.colors.mainColor};
  }
`;
