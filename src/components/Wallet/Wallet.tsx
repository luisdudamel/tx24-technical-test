import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import FormSteps from "../FormSteps/FormSteps";
import {
  AgreementsDesktopContainer,
  WalletDesktopAddress,
  WalletDesktopAddressContainer,
  WalletDesktopContainerStyled,
  WalletDesktopInformationStyled,
  WalletDesktopSelect,
  WalletDesktopSelectContainer,
} from "./WalletDesktopStyled";
import {
  AgreementsContainer,
  WalletAddress,
  WalletAddressContainer,
  WalletContainerStyled,
  WalletInformationStyled,
  WalletSelect,
  WalletSelectContainer,
} from "./WalletStyled";

interface walletProps {
  width: number;
}

interface wallet {
  walletAddress: string;
}

const Wallet = ({ width }: walletProps): JSX.Element => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [walletAddress, setWalletAddress] = useState<wallet>({
    walletAddress: "",
  });
  const [termsChecked, setTermsChecked] = useState<boolean>(false);
  const [personalInfoChecked, setPersonalInfoChecked] =
    useState<boolean>(false);

  const validateWallet = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setWalletAddress({
      walletAddress: event.target.value,
    });
  };

  const validateTerms = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event?.target.id === "terms" && !termsChecked) {
      setTermsChecked(true);
    } else if (event?.target.id === "information" && !personalInfoChecked) {
      setPersonalInfoChecked(true);
    } else if (event?.target.id === "terms") {
      setTermsChecked(false);
    } else {
      setPersonalInfoChecked(false);
    }
  };

  useEffect(() => {
    if (
      termsChecked &&
      personalInfoChecked &&
      walletAddress.walletAddress.length === 42
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [personalInfoChecked, termsChecked, walletAddress.walletAddress.length]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsDisabled(true);
    setWalletAddress({ walletAddress: "" });
    setTermsChecked(false);
    setPersonalInfoChecked(false);
  };

  return (
    <>
      {width <= 768 ? (
        <WalletContainerStyled onSubmit={handleSubmit}>
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
              value={walletAddress.walletAddress}
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
                checked={termsChecked}
                name="terms"
                value="terms"
                onChange={validateTerms}
              />
              <span className="wallet__terms__custom__checkbox"></span>
              <label className="wallet__terms" htmlFor="terms">
                I Have Read The{" "}
                <span className="wallet__terms__accent">
                  Terms Of Condition
                </span>{" "}
                And{" "}
                <span className="wallet__terms__accent">Privacy Policy</span> .
              </label>
            </div>
            <div className="wallet__terms__container">
              <input
                className="wallet__terms__checkbox"
                type="checkbox"
                id="information"
                checked={personalInfoChecked}
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
            buttonType="submit"
            isDisabled={isDisabled}
          />
        </WalletContainerStyled>
      ) : (
        <WalletDesktopContainerStyled onSubmit={handleSubmit}>
          <FormSteps step={4} />
          <WalletDesktopInformationStyled className="wallet__title">
            Setup your paying wallet
          </WalletDesktopInformationStyled>
          <WalletDesktopInformationStyled className="wallet__subtitle">
            Submit your wallet address that you are going to send funds
          </WalletDesktopInformationStyled>
          <WalletDesktopSelectContainer>
            <label className="wallet__select__label" htmlFor="wallets">
              Select wallet
            </label>
            <WalletDesktopSelect name="wallets" id="wallets">
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
            </WalletDesktopSelect>
          </WalletDesktopSelectContainer>
          <WalletDesktopAddressContainer>
            <label className="wallet__address__label" htmlFor="wallets">
              Your address for tokens
            </label>
            <WalletDesktopAddress
              maxLength={42}
              id="walletAddress"
              onChange={validateWallet}
              value={walletAddress.walletAddress}
            />
            <p className="wallet__address__note">
              Note: Address should be ERC20-compliant
            </p>
          </WalletDesktopAddressContainer>
          <AgreementsDesktopContainer>
            <div className="wallet__terms__container">
              <input
                className="wallet__terms__checkbox"
                type="checkbox"
                id="terms"
                checked={termsChecked}
                name="terms"
                value="terms"
                onChange={validateTerms}
              />
              <span className="wallet__terms__custom__checkbox"></span>
              <label className="wallet__terms" htmlFor="terms">
                I Have Read The{" "}
                <span className="wallet__terms__accent">
                  Terms Of Condition
                </span>{" "}
                And{" "}
                <span className="wallet__terms__accent">Privacy Policy</span> .
              </label>
            </div>
            <div className="wallet__terms__container">
              <input
                className="wallet__terms__checkbox"
                type="checkbox"
                id="information"
                checked={personalInfoChecked}
                name="information"
                value="information"
                onChange={validateTerms}
              />
              <span className="wallet__terms__custom__checkbox"></span>
              <label className="wallet__terms" htmlFor="information">
                All The Personal Information I Have Entered Is Correct.
              </label>
            </div>
          </AgreementsDesktopContainer>
          <Button
            buttonClass="formButton"
            buttonText="SUBMIT"
            buttonType="submit"
            isDisabled={isDisabled}
          />
        </WalletDesktopContainerStyled>
      )}
    </>
  );
};

export default Wallet;
