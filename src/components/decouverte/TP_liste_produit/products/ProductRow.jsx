import React from 'react';
import styled from 'styled-components'

const Container = styled.tr``

/**
 * ligne produit dans un tableau à 2 colonnes (nom / prix)
 * @param {{name: string, stocked: boolean, price, string}} product 
 * @returns {JSX.Element}
 */
const ProductRow = ({product}) => {

    const style = product.stocked ? undefined : {color: 'red'}
    return (
        <Container>
            <td style={style}>{product.name}</td>
            <td>{product.price}</td>
        </Container>
    );
};

export default ProductRow;