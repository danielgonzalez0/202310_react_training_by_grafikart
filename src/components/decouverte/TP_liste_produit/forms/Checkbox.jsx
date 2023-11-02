import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

/**
 * checkbox avec un libellé sur la droite
 *
 * @param {boolean} checked
 * @param {(v:boolean)=> void }onChange
 * @param {string} label
 * @param {string} id
 * @returns {JSX.Element}
 */
const Checkbox = ({ checked, onChange, label, id }) => {
  return (
    <Container>
      <input
        type="checkbox"
        className="form-check-input"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label className="form-check-label">{label}</label>
    </Container>
  );
};

export default Checkbox;
