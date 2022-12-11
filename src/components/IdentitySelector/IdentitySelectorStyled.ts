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

export const IdentityDesktopContainerStyled = styled.div`
  display: flex;
  height: 100%;
  flex: 1;
  margin-top: 30px;
  justify-content: space-around;
  width: 60%;
  max-width: 800px;
  align-items: flex-start;
  flex-direction: column;
  align-items: center;
  padding: 25px 0px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: 1px solid #ffffff;
`;

export const IdentityDesktopInformationStyled = styled.p`
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

export const DocumentDesktopSelector = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0px 30px;
  gap: 40px;
  justify-content: space-evenly;
  align-items: center;
  .button__active {
    background-color: ${({ theme }) => theme.colors.appBackground};
    color: ${({ theme }) => theme.colors.mainColor};
    border: solid 1px ${({ theme }) => theme.colors.mainColor};
  }
  button :nth-last-child() {
    position: relative;
    top: 0;
    left: 30%;
  }
`;
