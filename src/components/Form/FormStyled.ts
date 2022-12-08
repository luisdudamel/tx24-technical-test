import styled from "styled-components";

export const FormContainerStyled = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: flex-start;
  flex-direction: column;
  padding: 25px 0px;
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
  color: black;
  padding: 0px 10px;
`;

export const FormStyled = styled.form`
  width: 100%;

  padding: 50px 15px;

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
    }

    &-container {
      width: 100%;
      height: 30px;
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
      color: #949494;
      padding-left: 10px;
      margin-bottom: 20px;
    }
  }
`;
