import React, { useRef } from "react";
import { Button, Icon, Avatar, useMediaQuery } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { VscBellDot } from "react-icons/vsc";

import { Container, LeftContainer, RightContainer } from "./styles/navbar";
import Logo from "../Logo";

import profilePicture from "../../assets/default-profile-picture.png";
import MenuDrawer from "../MenuDrawer";

const Navbar = () => {
  const [isMobile] = useMediaQuery("(min-width: 768px)");

  const btnRef = useRef();

  return (
    <Container>
      <LeftContainer>
        {!isMobile ? (
          <MenuDrawer ref={btnRef} />
        ) : (
          <Button
            leftIcon={<AiOutlinePlus size={20} />}
            variant="ghost"
            size="md"
            textTransform="uppercase"
            fontSize="18px"
            fontWeight="normal"
            letterSpacing="4px"
            marginLeft="64px"
            _hover={{ transform: "scale(1.1)", transition: "0.6s" }}
          >
            Agregar película
          </Button>
        )}
        <Logo />
      </LeftContainer>
      <RightContainer>
        {isMobile && (
          <>
            <MenuDrawer ref={btnRef} isMobile={isMobile} />
            <Icon
              as={VscBellDot}
              width={25}
              height={14}
              color="white"
              _hover={{ transform: "scale(1.2)", transition: "0.6s" }}
            />
          </>
        )}
        <Avatar size="sm" name="Profile Picture" src={profilePicture} />
      </RightContainer>
    </Container>
  );
};

export default Navbar;
