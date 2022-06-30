import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  min-height: 395px;
  background: linear-gradient(180deg, rgba(36, 36, 36, 0) 0%, #242424 100%);

  @media (min-width: 768px) {
    background: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 95vh;
  }
`;

export const SubTitle = styled.p`
  font-size: 20px;
  text-align: center;
  line-height: 22px;
  margin: 0;
  letter-spacing: 4px;
  color: #fff;
  transform: uppercase;
  font-weight: normal;
  margin-top: 5rem;

  @media (min-width: 768px) {
    text-align: left;
    margin-top: 8.5rem;
    margin-bottom: 0.6rem;
    margin-left: 5rem;
    animation: moveDown 1s ease-out;
  }

  @keyframes moveDown {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  }
`;

export const MainTitleContainer = styled.div`
  width: 95%;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const MainTitle = styled.h1`
  margin: 0;
  font-size: 40px;
  text-transform: uppercase;
  letter-spacing: 12px;
  font-weight: normal;
  color: #64eebc;
  text-align: center;
  line-height: 50px;

  @media (min-width: 768px) {
    font-size: 76px;
    text-align: left;
    margin-left: 5rem;
    letter-spacing: 16px;
    line-height: 85px;
    animation: moveLeft 1s ease-in;
  }

  @media (min-width: 1600px) {
    font-size: 120px;
    line-height: 100px;
    letter-spacing: 16px;
    text-align: left;
  }

  @keyframes moveLeft {
    0% {
      opacity: 0;
      transform: translateX(-50px);
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  animation: moveUp 1s ease-in;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    margin-left: 5rem;
  }

  @keyframes moveUp {
    0% {
      opacity: 0;
      transform: translateY(100px);
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  }
`;