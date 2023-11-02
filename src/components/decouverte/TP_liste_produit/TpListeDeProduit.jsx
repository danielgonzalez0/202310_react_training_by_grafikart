import React from 'react';
import Title from '../../Title';
import BackToHome from '../../BackToHome';
import styled from 'styled-components';
import Input from './forms/Input';
import Checkbox from './forms/Checkbox';

const PRODUCTS = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
];

const SearchBar = styled.div``;

const TpListeDeProduit = () => {
  return (
    <>
      <Title color={'red'} bgColor={'skyBlue'}>
        {' '}
        TP React: Liste de produit
      </Title>
      <BackToHome />

      <SearchBar>
        <Input value="" onChange={() => null} placeholder={'Rechercher ...'} />
        <Checkbox checked={false} onChange={()=>null} label={"N'afficher que les produits en stock"}/>
      </SearchBar>
    </>
  );
};

export default TpListeDeProduit;
