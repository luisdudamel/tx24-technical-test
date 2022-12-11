import styled from "styled-components";

export const DocumentUploadContainer = styled.div`
  display: flex;
  height: 100%;
  flex: 1;
  justify-content: flex-start;
  width: 100%;
  align-items: flex-start;
  flex-direction: column;
  align-items: center;

  .documentUpload__list {
    list-style: none;
    font-family: "Sansation Light";
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 30px;

    align-items: center;
    letter-spacing: 0.05em;
    color: #000000;

    &--item {
      padding: 10px 0px;
    }

    &--item:before {
      content: "✓ ";
    }
  }
`;

export const DocumentUploadInformation = styled.p`
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

export const DocumentUploader = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-bottom: 50px;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;

  .documentUpload__selector {
    &--information {
      font-family: "Sansation Light";
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 20px;
      text-align: center;
      letter-spacing: 0.05em;
    }

    &__filenameContainer {
      display: flex;
      justify-content: space-between;
      width: 80%;
      gap: 20px;

      p {
        font-family: "Sansation Light";
        overflow: hidden;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.05em;
        color: #000000;
        overflow-wrap: break-word;
      }
      button {
        font-family: "Sansation Light";
        font-style: normal;
        font-size: 18px;
        border: none;
        background: none;
        cursor: pointer;
      }
    }
  }
`;
export const DocumentDesktopUploadContainer = styled.div`
  display: flex;
  height: 100%;
  flex: 1;
  justify-content: flex-start;
  width: 60%;
  max-width: 800px;
  align-items: flex-start;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: 1px solid #ffffff;
  padding: 25px 0px;

  .documentUpload__list {
    list-style: none;
    font-family: "Sansation Light";
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 30px;

    align-items: center;
    letter-spacing: 0.05em;
    color: #000000;

    &--item {
      padding: 10px 0px;
    }

    &--item:before {
      content: "✓ ";
    }
  }
  div + button {
    position: relative;
    top: 0;
    left: 30%;
  }
`;

export const DocumentDesktopUploadInformation = styled.p`
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

export const DocumentDesktopUploader = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-bottom: 50px;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;

  .documentUpload__selector {
    &--information {
      font-family: "Sansation Light";
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 20px;
      text-align: center;
      letter-spacing: 0.05em;
    }

    &__filenameContainer {
      display: flex;
      justify-content: space-between;
      width: 80%;
      gap: 20px;

      p {
        font-family: "Sansation Light";
        overflow: hidden;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.05em;
        color: #000000;
        overflow-wrap: break-word;
      }
      button {
        font-family: "Sansation Light";
        font-style: normal;
        font-size: 18px;
        border: none;
        background: none;
        cursor: pointer;
      }
    }
  }
`;
