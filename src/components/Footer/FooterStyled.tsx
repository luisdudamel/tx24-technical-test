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
  flex-direction: column;
  margin-top: 30px;
  width: 100%;
  background: #fff4f9;
  height: 230px;
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

export const FooterInfoContainer = styled.div`
  display: flex;
  height: 100%;
  padding-left: 50px;
  align-items: center;
`;

export const FooterInfo = styled.div`
  display: flex;
  width: 100%;
  padding-left: 100px;

  ul {
    list-style: none;
    text-align: left;
    padding-inline-start: 0px;
  }

  .footer__info {
    &__panel {
      padding: 0px 20px;
    }
    &__list {
      &__title {
        font-family: "Sansation Light";
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: 0.035em;
        color: #000000;
        text-align: left;
      }
      &__item {
        font-family: "Sansation Light";
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 25px;
        letter-spacing: 0.035em;
        color: #000000;
        cursor: pointer;
        transition: all ease-in 0.2s;

        :hover {
          color: ${({ theme }) => theme.colors.mainColor};
        }
      }
    }
  }
`;

export const FooterLogo = styled.img`
  width: 150px;
  cursor: pointer;
`;

export const FooterCopyright = styled.div`
  width: 100%;
  height: 30px;
  background: #fff4f9;
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
