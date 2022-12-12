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
  margin-top: 30px;
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
    letter-spacing: 0.05em;
    color: #000000;

    &--item {
      padding: 10px 0px;
    }

    &--item:before {
      content: "✓ ";
    }
  }

  .documentUpload__container {
    display: flex;
    flex-direction: column;
    width: 100%;
    flex: 1;
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
  font-size: 20px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: justify;
  letter-spacing: 0.05em;
  color: black;
  padding: 0px 20px;
  margin-top: 30px;
`;

export const DocumentDesktopUploader = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  flex-direction: row;
  padding-bottom: 50px;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
  justify-content: space-around;

  button {
    width: 141.16px;
    height: 28.68px;
    font-size: 12px;
  }

  .documentUpload__selector {
    background: #ffffff;
    border: 1px solid #949494;
    border-radius: 10px;
    width: 477.16px;
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &--information {
      font-family: "Sansation Light";
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 20px;
      text-align: left;
      padding-left: 10px;
      letter-spacing: 0.05em;
    }

    &--drag {
      font-family: "Sansation Light";
      font-style: normal;
      font-weight: 300;
      font-size: 12px;
      line-height: 20px;
      text-align: center;
      letter-spacing: 0.025em;
      line-height: 2em;
      color: rgba(0, 0, 0, 0.25);
    }

    &__filenameContainer {
      display: flex;
      justify-content: space-around;
      width: 100%;
      gap: 20px;
      height: 180px;
      align-items: center;
      padding: 0px 10px;

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

      .uploadedDocument {
        display: flex;
        border: 1px solid #949494;
        border-radius: 10px;
        width: 477.16px;
        height: 180px;
        justify-content: space-around;
        align-items: center;
      }
    }
  }
`;
