import React, { useState } from 'react';
import { Spinner } from '@chakra-ui/react';
import { Container } from './styles/home';
import Navbar from '../../components/Navbar';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) return <Spinner size='xl' />;

  return (
    <Container>
      <Navbar />
    </Container>
  );
};

export default Home;
