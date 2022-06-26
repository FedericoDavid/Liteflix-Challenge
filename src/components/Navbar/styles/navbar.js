import styled from '@emotion/styled';

export const Container = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  @media (min-width: 768px) {
    justify-content: space-evenly;
    width: 40%;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  @media (min-width: 768px) {
    width: 300px;
  }
`;
