import React from 'react';
import styled from 'styled-components';

const Tr = styled.tr``

/**
 * ligne de tableau avec nom de la catégorie
 * @param {string} name 
 * @returns {JSX.Element}
 */
const ProductCategoryRow = ({name}) => {
    return (
        <Tr>
            <td><strong>{name}</strong></td>
        </Tr>
    );
};

export default ProductCategoryRow;