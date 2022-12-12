import styled from "styled-components";

export const FormStepIconsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px dashed rgba(148, 148, 148, 0.25);
  padding-bottom: 20px;
  @media (max-width: 1200px) {
    padding: 0px 25px;
  }
`;

export const FormStepIcon = styled.div`
  font-family: "Sansation Light";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.mainText};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  .step__icon__unchecked {
    width: 40px;
    height: 40px;
    border: solid 1px ${({ theme }) => theme.colors.mainColor};
    border-radius: 50%;
  }
  .step__icon__checked {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: solid 1px ${({ theme }) => theme.colors.mainColor};
    background-color: ${({ theme }) => theme.colors.stepIconBackground};
    border-radius: 50%;
    font-size: 30px;
    color: white;
    font-weight: 500;

    :before {
      content: "✓ ";
    }
  }
`;
