import React from 'react';
import styled from 'styled-components';
import ProductCategoryRow from './products/ProductCategoryRow';
import ProductRow from './products/ProductRow';

const Table = styled.table`
  min-width: 350px;
  margin: 20px 0;
  border-collapse: collapse;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 1rem;
  tr {
    border-bottom: solid 2px #c9c9c9;
    font-size: 1.3rem;
  }
  th, td {
    padding: 10px;
    text-align: left;
  }
  td {
    font-size: 1rem;
  }
`;

const ProductTable = ({ products }) => {
  const rows = [];
  let lastCategory = null;

  for (let product of products) {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow key={product.category} name={product.category} />
      );
    }
    lastCategory = product.category;
    rows.push(<ProductRow product={product} key={product.name} />);
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prix</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default ProductTable;
