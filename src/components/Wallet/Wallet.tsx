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

const Wallet = (): JSX.Element => {
  const onCheck = (): void => {
    console.log("CHECK");
  };
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
        <WalletAddress />
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
            onClick={onCheck}
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
            onClick={onCheck}
          />
          <span className="wallet__terms__custom__checkbox"></span>
          <label className="wallet__terms" htmlFor="information">
            All The Personal Information I Have Entered Is Correct.
          </label>
        </div>
      </AgreementsContainer>
      <Button
        buttonClass="formButton"
        buttonText="NEXT STEP"
        buttonType="button"
        isDisabled={true}
      />
    </WalletContainerStyled>
  );
};

export default Wallet;
