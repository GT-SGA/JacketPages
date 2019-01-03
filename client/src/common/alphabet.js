import React from 'react';
import PropTypes from 'prop-types';

const Alphabet = props => (
  <select onChange={e => props.onChangeSelect(e.target.value)}>
    <option />
    <option>A</option>
    <option>B</option>
    <option>C</option>
    <option>D</option>
    <option>E</option>
    <option>F</option>
    <option>G</option>
    <option>H</option>
    <option>I</option>
    <option>J</option>
    <option>K</option>
    <option>L</option>
    <option>M</option>
    <option>N</option>
    <option>O</option>
    <option>P</option>
    <option>Q</option>
    <option>R</option>
    <option>S</option>
    <option>T</option>
    <option>U</option>
    <option>V</option>
    <option>W</option>
    <option>X</option>
    <option>Y</option>
    <option>Z</option>
  </select>
);

Alphabet.propTypes = {
  onChangeSelect: PropTypes.func.isRequired,
};

export default Alphabet;
