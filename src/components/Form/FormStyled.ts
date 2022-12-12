import styled from "styled-components";

export const FormContainerStyled = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: flex-start;
  flex-direction: column;
  padding: 25px 0px;
  padding-top: 60px;
  align-items: center;
  background: ${({ theme }) => theme.colors.appBackground};
`;

export const FormInformationStyled = styled.p`
  font-family: "Sansation Light";
  font-style: normal;
  font-weight: 300;
  font-size: 17px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.mainText};
  padding: 0px 20px;
`;

export const FormStyled = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: center;
  padding-top: 50px;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 70px;

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
      width: 100%;
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
      color: #949494;
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
        width: 100%;
        height: 35px;
        background: rgba(230, 230, 230, 0.35);
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
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    text-align: left;
    width: 100%;
  }

  button {
    margin-top: 50px;
  }
`;
