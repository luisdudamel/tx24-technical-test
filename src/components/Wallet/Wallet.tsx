import Button from "../Button/Button";
import {
  WalletContainerStyled,
  WalletInformationStyled,
  WalletSelect,
  WalletSelectContainer,
} from "./WalletStyled";

const Wallet = (): JSX.Element => {
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
