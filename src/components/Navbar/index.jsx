import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { Button } from '@chakra-ui/react';

import { Container, LeftContainer } from './styles/navbar';
import Logo from '../Logo';

const Navbar = () => {
  return (
    <Container style={{ background: 'red' }}>
      <LeftContainer>
        <Logo />
        <Button
          leftIcon={<AiOutlinePlus />}
          colorScheme="whiteAlpha"
          variant="ghost"
          size="md"
          height="48px"
          width="200px"
          textTransform="uppercase"
        >
          Agregar película
        </Button>
      </LeftContainer>
    </Container>
  );
};

export default Navbar;
