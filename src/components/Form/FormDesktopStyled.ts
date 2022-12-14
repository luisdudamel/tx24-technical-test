import styled from "styled-components";

export const FormDesktopContainerStyled = styled.div`
  display: flex;
  width: 60%;
  align-items: flex-start;
  flex-direction: column;
  padding: 25px 0px;
  margin-top: 30px;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.appBackground};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  max-width: 800px;
  background: ${({ theme }) => theme.colors.headerBackground};
`;

export const FormDesktopInformationStyled = styled.p`
  font-family: "Sansation Light";
  font-style: normal;
  font-weight: 300;
  font-size: 17px;
  line-height: 30px;
  text-align: left;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.mainText};
  max-width: 710px;

  @media (max-width: 1200px) {
    padding: 0px 25px;
  }
`;

export const FormDesktopStyled = styled.form`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
  align-items: center;
  padding-top: 50px;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 10px;

  .form__input {
    &-label {
      font-family: "Sansation Light";
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 20px;
      display: flex;
      align-items: center;
      letter-spacing: 0.05em;
      padding-bottom: 5px;
      text-align: left;
      width: 100%;
      color: ${({ theme }) => theme.colors.mainText};
    }

    &-container {
      width: 340px;
      height: 35px;
      border: 1px solid;
      border-color: ${({ theme }) => theme.colors.mainColor};
      border-radius: 5px;
      font-family: "Sansation Light";
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 20px;
      display: flex;
      align-items: center;
      letter-spacing: 0.05em;
      padding-left: 10px;
      margin-bottom: 20px;
      background: ${({ theme }) => theme.colors.appBackground};
      color: ${({ theme }) => theme.colors.mainText};

      :focus-visible {
        outline: none;
        border: solid 2px;
        border-color: ${({ theme }) => theme.colors.mainColor};
      }

      &-disabled {
        width: 340px;
        height: 35px;
        background: rgba(133, 133, 133, 0.35);
        border: 1px solid;
        border-color: ${({ theme }) => theme.colors.mainColor};
        border-radius: 5px;
        font-family: "Sansation Light";
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.05em;
        color: ${({ theme }) => theme.colors.inactivePlaceholderText};
        padding-left: 10px;
        margin-bottom: 20px;
        background-color: ${({ theme }) =>
          theme.colors.inactivePlaceholderBackground};
        ::placeholder {
          color: ${({ theme }) => theme.colors.inactivePlaceholderText};
        }
      }
    }
  }

  .form__address {
    padding-top: 40px;
    padding-left: 0px;
    font-family: "Sansation Light";
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-align: left;
    width: 100%;
    @media (max-width: 1200px) {
      padding: 0px 25px;
    }
  }

  button {
    margin-top: 50px;

    @media (min-width: 1200px) {
      position: relative;
      top: 0;
      left: 30%;
    }
  }

  .personal__details {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
  }
  .address {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
