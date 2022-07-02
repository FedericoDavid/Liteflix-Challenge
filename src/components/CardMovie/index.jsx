import React from "react";
import { useMediaQuery } from "@chakra-ui/react";
import { ImgOverlay } from "image-overlay-react";

import { Container } from "./styles/cardMovie";

const CardMovie = () => {
  const [isMobile] = useMediaQuery("(min-width: 768px)");

  return (
    <Container>
      <ImgOverlay
        imgSrc="https://picsum.photos/200/300"
        bgColor="pink"
        position="right"
        width={isMobile ? "220px" : "350px"}
        height={isMobile ? "130px" : "194px"}
        fSize="48px"
        fColor="gray"
      >
        It's a text
      </ImgOverlay>
    </Container>
  );
};

export default CardMovie;
