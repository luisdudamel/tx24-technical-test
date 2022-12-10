import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import {
  AgreementsContainer,
  WalletAddress,
  WalletAddressContainer,
  WalletContainerStyled,
  WalletInformationStyled,
  WalletSelect,
  WalletSelectContainer,
} from "./WalletStyled";

interface wallet {
  walletAddress: string;
}

const Wallet = (): JSX.Element => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [walletAddress, setWalletAddress] = useState<wallet>({
    walletAddress: "",
  });
  const [termsChecked, setTermsChecked] = useState<number>(0);

  const validateWallet = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setWalletAddress({
      walletAddress: event.target.value,
    });
  };

  const validateTerms = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event?.target.checked === true && termsChecked >= 0) {
      setTermsChecked(termsChecked + 1);
    }
    if (event?.target.checked === false) {
      setTermsChecked(termsChecked - 1);
    }
  };

  useEffect(() => {
    if (termsChecked === 2 && walletAddress.walletAddress.length === 42) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [termsChecked, walletAddress.walletAddress.length]);

  return (
    <WalletContainerStyled>
      <WalletInformationStyled>
        Setup your paying wallet
      </WalletInformationStyled>
      <WalletInformationStyled>
        Submit your wallet address that you are going to send funds
      </WalletInformationStyled>
      <WalletSelectContainer>
        <label className="wallet__select__label" htmlFor="wallets">
          Select wallet
        </label>
        <WalletSelect name="wallets" id="wallets">
          <option className="wallet__select__option" value="Ethereum">
            Ethereum
          </option>
          <option className="wallet__select__option" value="Bitcoin">
            Bitcoin
          </option>
          <option className="wallet__select__option" value="TXT">
            TXT
          </option>
          <option className="wallet__select__option" value="BNB">
            BNB
          </option>
        </WalletSelect>
      </WalletSelectContainer>
      <WalletAddressContainer>
        <label className="wallet__address__label" htmlFor="wallets">
          Your address for tokens
        </label>
        <WalletAddress
          maxLength={42}
          id="walletAddress"
          onChange={validateWallet}
        />
        <p className="wallet__address__note">
          Note: Address should be ERC20-compliant
        </p>
      </WalletAddressContainer>
      <AgreementsContainer>
        <div className="wallet__terms__container">
          <input
            className="wallet__terms__checkbox"
            type="checkbox"
            id="terms"
            name="terms"
            value="terms"
            onChange={validateTerms}
          />
          <span className="wallet__terms__custom__checkbox"></span>
          <label className="wallet__terms" htmlFor="terms">
            I Have Read The Terms Of Condition And Privacy Policy.
          </label>
        </div>
        <div className="wallet__terms__container">
          <input
            className="wallet__terms__checkbox"
            type="checkbox"
            id="information"
            name="information"
            value="information"
            onChange={validateTerms}
          />
          <span className="wallet__terms__custom__checkbox"></span>
          <label className="wallet__terms" htmlFor="information">
            All The Personal Information I Have Entered Is Correct.
          </label>
        </div>
      </AgreementsContainer>
      <Button
        buttonClass="formButton"
        buttonText="SUBMIT"
        buttonType="button"
        isDisabled={isDisabled}
      />
    </WalletContainerStyled>
  );
};

export default Wallet;
