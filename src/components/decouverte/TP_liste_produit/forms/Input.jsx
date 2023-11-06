import React, { useId } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 10px 0;
  .form-control {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    border-radius: 10px;
    border: solid 2px #c9c9c9;
    min-width: 350px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
      'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
`;

/**
 *
 * @param {string} placeholder
 * @param {string} value
 * @param {(s: string)=>void} onChange
 * @returns {JSX.element}
 */
const Input = ({ placeholder, value, onChange, label }) => {
  const id = useId();
  return (
    <Container>
      <label className="form-label" htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        className="form-control"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </Container>
  );
};

export default Input;
