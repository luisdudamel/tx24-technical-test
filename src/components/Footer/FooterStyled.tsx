import styled from "styled-components";

export const FooterStyled = styled.footer`
  margin-top: 30px;
  width: 100%;
  background-color: white;
  height: 30px;
  text-align: center;
  padding-bottom: 0px;
  padding-top: 0px;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 30px;
  letter-spacing: 0.035em;
  color: #000000;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const DesktopFooter = styled.footer`
  display: flex;
  margin-top: 30px;
  width: 100%;
  background: #fff4f9;
  height: 215px;
  text-align: center;
  padding-bottom: 0px;
  padding-top: 0px;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 30px;
  letter-spacing: 0.035em;
  color: #000000;

  @media (max-width: 769px) {
    display: none;
  }
`;

export const FooterInfoContainer = styled.div``;

export const FooterInfo = styled.div``;

export const FooterLogo = styled.img``;

export const FooterCopyright = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 30px;
  text-align: center;
  padding-bottom: 0px;
  padding-top: 0px;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 30px;
  letter-spacing: 0.035em;
  color: #000000;
`;
