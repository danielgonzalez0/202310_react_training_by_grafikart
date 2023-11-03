import React, { useState } from 'react';
import Title from '../../Title';
import BackToHome from '../../BackToHome';
import styled from 'styled-components';
import Input from './forms/Input';
import Checkbox from './forms/Checkbox';
import ProductTable from './ProductTable';

const PRODUCTS = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
];

const SearchBarContainer = styled.div`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

const TpListeDeProduit = () => {
  const [showStockedOnly, setShowStockedOnly] = useState(false);
  const [search, setSearch] = useState('');

  const visibleProducts = PRODUCTS.filter((product) => {
    if (showStockedOnly && !product.stocked) {
      return false;
    }
    if(search && !product.name.includes(search)) {
      return false
    }
    return true;
  });

  return (
    <>
      <Title color={'red'} bgColor={'skyBlue'}>
        {' '}
        TP React: Liste de produit
      </Title>
      <BackToHome />

      <SearchBar
        search={search}
        onSearchChange={setSearch}
        showStockedOnly={showStockedOnly}
        onStockedOnlyChange={setShowStockedOnly}
      />
      <ProductTable products={visibleProducts} />
    </>
  );
};

const SearchBar = ({
  showStockedOnly,
  onStockedOnlyChange,
  search,
  onSearchChange,
}) => {
  return (
    <SearchBarContainer>
      <Input
        value={search}
        onChange={onSearchChange}
        placeholder={'Rechercher ...'}
      />
      <Checkbox
        id={'stocked'}
        checked={showStockedOnly}
        onChange={onStockedOnlyChange}
        label={"N'afficher que les produits en stock"}
      />
    </SearchBarContainer>
  );
};

export default TpListeDeProduit;
