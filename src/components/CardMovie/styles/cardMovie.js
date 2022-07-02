import styled from "@emotion/styled";

export const Container = styled.div`
  width: 350px;
  height: 194px;
  display: flex;
  position: relative;
  margin: auto;

  @media (min-width: 768px) {
    background: inherit;
    width: 220px;
    height: 130px;
    position: relative;
  }
`;
