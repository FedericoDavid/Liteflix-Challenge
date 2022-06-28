import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { VscBellDot } from "react-icons/vsc";
import { Button, Icon } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";

import { Container, LeftContainer, RightContainer } from "./styles/navbar";
import Logo from "../Logo";

const Navbar = () => {
  return (
    <Container style={{ background: "red" }}>
      <LeftContainer>
        <Logo />
        <Button
          leftIcon={<AiOutlinePlus size={21} />}
          colorScheme="whiteAlpha"
          variant="ghost"
          size="md"
          height="18px"
          width="200px"
          textTransform="uppercase"
          fontSize="18px"
          fontWeight="normal"
          letterSpacing="4px"
          lineHeight="18px"
          marginLeft="90px"
        >
          Agregar película
        </Button>
      </LeftContainer>
      <RightContainer>
        <Icon as={HiOutlineMenuAlt3} width={25} height={14} color="white" />
        <Icon as={VscBellDot} width={22} height={14} color="white" />
        <Avatar
          size="sm"
          name="Profile Picture"
          src="https://bit.ly/ryan-florence"
        />
      </RightContainer>
    </Container>
  );
};

export default Navbar;
