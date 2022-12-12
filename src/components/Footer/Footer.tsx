import {
  DesktopFooter,
  FooterCopyright,
  FooterInfo,
  FooterInfoContainer,
  FooterLogo,
  FooterStyled,
} from "./FooterStyled";

interface footerProps {
  theme: string;
}

const Footer = ({ theme }: footerProps): JSX.Element => {
  return (
    <>
      <FooterStyled>
        Copyright © 2022 FXNET - FZE. All Rights Reserved.
      </FooterStyled>
      <DesktopFooter>
        <FooterInfoContainer>
          <FooterLogo
            src={`img/logos/logo-tx24${theme === "dark" ? "-dark" : ""}.svg`}
            alt="TX-24 Logo"
          />
          <FooterInfo>
            <div className="footer__info__panel">
              <p className="footer__info__list__title">Company</p>
              <ul>
                <li className="footer__info__list__item">Terms & Service</li>
                <li className="footer__info__list__item">Privacy Policy</li>
                <li className="footer__info__list__item">About</li>
                <li className="footer__info__list__item">Careers</li>
              </ul>
            </div>
            <div className="footer__info__panel">
              <p className="footer__info__list__title">About Us</p>
              <ul>
                <li className="footer__info__list__item">The Team</li>
                <li className="footer__info__list__item">Whitepaper</li>
                <li className="footer__info__list__item">Blog</li>
                <li className="footer__info__list__item">Contact</li>
              </ul>
            </div>
          </FooterInfo>
        </FooterInfoContainer>
        <FooterCopyright>
          Copyright © 2022 FXNET - FZE. All Rights Reserved.
        </FooterCopyright>
      </DesktopFooter>
    </>
  );
};

export default Footer;
