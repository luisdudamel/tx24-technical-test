import styled from "styled-components";

export const WalletContainerStyled = styled.div`
  display: flex;
  height: 100%;
  flex: 1;
  justify-content: space-around;
  width: 100%;
  align-items: flex-start;
  flex-direction: column;
  align-items: center;
  padding: 0px 20px;
`;

export const WalletInformationStyled = styled.p`
  font-family: "Sansation Light";
  font-style: normal;
  font-weight: 300;
  font-size: 17px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.05em;
  color: black;
  width: 100%;
`;

export const WalletSelectContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 20px 0px;
  .wallet {
    &__select {
      &__label {
        font-family: "Sansation Light";
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 20px;
        letter-spacing: 0.05em;
        color: #000000;
      }
    }
  }
`;

export const WalletSelect = styled.select`
  width: 100%;
  height: 51.23px;
  left: 17px;
  top: 278.66px;
  background: #ffffff;
  border: 1px solid #ff1282;
  border-radius: 5px;
  font-family: "Sansation Light";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0.05em;
  color: #000000;
  padding-left: 10px;
  margin-top: 10px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: url("img/down-arrow.svg") no-repeat;
  background-size: 21px;
  cursor: pointer;
  background-position: right 5px top 50%;
`;

export const WalletAddressContainer = styled.div`
  width: 100%;
  .wallet {
    &__address {
      &__label {
        font-family: "Sansation Light";
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 20px;
        letter-spacing: 0.05em;
        color: #000000;
      }
      &__note {
        font-family: "Sansation Light";
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        letter-spacing: 0.05em;

        color: #c4c4c4;
      }
    }
  }
`;

export const WalletAddress = styled.textarea`
  width: 100%;
  height: 51.23px;
  left: 17px;
  top: 278.66px;
  background: #ffffff;
  border: 1px solid #ff1282;
  border-radius: 5px;
  font-family: "Sansation Light";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0.05em;
  color: #000000;
  padding-left: 10px;
  padding-top: 10px;
  margin-top: 10px;
  -moz-appearance: none;
  -webkit-appearance: none;
`;

export const AgreementsContainer = styled.div`
  width: 100%;
  font-family: "Sansation Light";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.05em;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 30px;

  color: #000000;
  .wallet__terms {
    padding-left: 10px;

    &__container {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  }
`;
