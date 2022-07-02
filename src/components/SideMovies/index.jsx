import React, { useState } from 'react';
import { Select, Spinner, Text } from '@chakra-ui/react';
import { FiChevronDown } from 'react-icons/fi';

import { Container, SelectContainer } from './styles/sidemovies';

const SideMovies = () => {
  const defaultCategoryId = 1;

  const [categoryId, setCategoryId] = useState(defaultCategoryId);
  const [isLoading, setIsLoading] = useState(false);

  const categoryOptions = [
    { id: 1, name: 'Populares' },
    { id: 2, name: 'Mis peliculas' },
  ];

  const renderSelectCategory = () => (
    <SelectContainer>
      <Text fontSize='20px' paddingRight='10px'>
        Ver:
      </Text>
      <Select
        icon={<FiChevronDown />}
        variant='unstyled'
        fontSize='20px'
        transform='uppercase'
        value={categoryId}
        onChange={({ value }) => setCategoryId(value)}
      >
        {categoryOptions.map((c) => (
          <option style={{ background: '#242424', border: 'none' }} key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </Select>
    </SelectContainer>
  );

  if (isLoading) return <Spinner />;

  return <Container>{renderSelectCategory()}</Container>;
};

export default SideMovies;
