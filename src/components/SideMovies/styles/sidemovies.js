import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  background: linear-gradient(360deg, rgba(36, 36, 36, 0) 0%, #242424 100%);
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    background: inherit;
    width: 90%;
  }
`;

export const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    margin-top: 50px;
    width: 150px;
    height: 18px
    display: flex;
    align-items: center;
    background: inherit;
  }
`;
