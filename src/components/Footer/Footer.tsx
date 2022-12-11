import {
  DesktopFooter,
  FooterCopyright,
  FooterInfoContainer,
  FooterStyled,
} from "./FooterStyled";

const Footer = (): JSX.Element => {
  return (
    <>
      <FooterStyled>
        Copyright © 2022 FXNET - FZE. All Rights Reserved.
      </FooterStyled>
      <DesktopFooter>
        <FooterInfoContainer></FooterInfoContainer>
        <FooterCopyright>
          Copyright © 2022 FXNET - FZE. All Rights Reserved.
        </FooterCopyright>
      </DesktopFooter>
    </>
  );
};

export default Footer;
