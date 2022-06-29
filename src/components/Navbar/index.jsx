import React from 'react';
import { useMediaQuery } from '@chakra-ui/react';
import { AiOutlinePlus } from 'react-icons/ai';
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from 'react-icons/hi';
import { VscBellDot } from 'react-icons/vsc';
import { Button, Icon } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/react';

import { Container, LeftContainer, RightContainer } from './styles/navbar';
import Logo from '../Logo';

import profilePicture from '../../assets/default-profile-picture.png';

const Navbar = () => {
  const [isMobile] = useMediaQuery('(min-width: 768px)');

  return (
    <Container style={{ background: 'red' }}>
      <LeftContainer>
        {!isMobile ? (
          <Icon as={HiOutlineMenuAlt2} width={7} height={14} color='white' />
        ) : (
          <Button
            leftIcon={<AiOutlinePlus size={21} />}
            colorScheme='whiteAlpha'
            variant='ghost'
            size='md'
            textTransform='uppercase'
            fontSize='18px'
            fontWeight='normal'
            letterSpacing='4px'
            _hover={{ transform: 'scale(1.2)', transition: '0.6s' }}
          >
            Agregar película
          </Button>
        )}
        <Logo />
      </LeftContainer>
      <RightContainer>
        {isMobile && (
          <>
            <Icon
              as={HiOutlineMenuAlt3}
              width={25}
              height={14}
              color='white'
              _hover={{ transform: 'scale(1.2)', transition: '0.6s' }}
            />
            <Icon
              as={VscBellDot}
              width={25}
              height={14}
              color='white'
              _hover={{ transform: 'scale(1.2)', transition: '0.6s' }}
            />
          </>
        )}
        <Avatar size='sm' name='Profile Picture' src={profilePicture} />
      </RightContainer>
    </Container>
  );
};

export default Navbar;
