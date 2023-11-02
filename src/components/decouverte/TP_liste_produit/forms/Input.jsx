import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 10px 0;
  .form-control {
    padding: 10px;
    border-radius: 10px;
    border: solid 2px rgba(119, 104, 104, 0.829);
    min-width: 350px;
  }
`;

/**
 *
 * @param {string} placeholder
 * @param {string} value
 * @param {(s: string)=>void} onChange
 * @returns {JSX.element}
 */
const Input = ({ placeholder, value, onChange }) => {
  return (
    <Container>
      <input
        type="text"
        className="form-control"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </Container>
  );
};

export default Input;
