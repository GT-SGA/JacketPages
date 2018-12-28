import React from 'react';
import PropTypes from 'prop-types';

const Alphabet = props => (
  <select onChange={e => props.onChangeSelect(e.target.value)}>
    <option>
      <a href="/sga_people/index/a">A</a>
      &nbsp;
    </option>
    <option>
      <a href="/sga_people/index/b">B</a>
      &nbsp;
    </option>
    <option>
      <a href="/sga_people/index/c">C</a>
      &nbsp;
    </option>
    <option>
      <a href="/sga_people/index/d">D</a>
      &nbsp;
    </option>
    <option>
      <a href="/sga_people/index/e">E</a>
      &nbsp;
    </option>
    <option>
      <a href="/sga_people/index/f">F</a>
      &nbsp;
    </option>
    <option>
      <a href="/sga_people/index/g">G</a>
      &nbsp;
    </option>
    <option>
      <a href="/sga_people/index/h">H</a>
      &nbsp;
    </option>
    <option>
      <a href="/sga_people/index/i">I</a>
      &nbsp;
    </option>
    <option>
      <a href="/sga_people/index/j">J</a>
      &nbsp;
    </option>
    <option>
      <a href="/sga_people/index/k">K</a>
      &nbsp;
    </option>
    <option>
      <a href="/sga_people/index/l">L</a>
      &nbsp;
    </option>
    <option>
      <a href="/sga_people/index/m">M</a>
      &nbsp;
    </option>
    <option>
      <a href="/sga_people/index/n">N</a>
      &nbsp;
    </option>
    <option>
      <a href="/sga_people/index/o">O</a>
      &nbsp;
    </option>
    <option>
      <a href="/sga_people/index/p">P</a>
      &nbsp;
    </option>
    <option>
      <a href="/sga_people/index/q">Q</a>
      &nbsp;
    </option>
    <option>
      <a href="/sga_people/index/r">R</a>
      &nbsp;
    </option>
    <option>
      <a href="/sga_people/index/s">S</a>
      &nbsp;
    </option>
    <option>
      <a href="/sga_people/index/t">T</a>
      &nbsp;
    </option>
    <option>
      <a href="/sga_people/index/u">U</a>
      &nbsp;
    </option>
    <option>
      <a href="/sga_people/index/v">V</a>
      &nbsp;
    </option>
    <option>
      <a href="/sga_people/index/w">W</a>
      &nbsp;
    </option>
    <option>
      <a href="/sga_people/index/x">X</a>
      &nbsp;
    </option>
    <option>
      <a href="/sga_people/index/y">Y</a>
      &nbsp;
    </option>
    <option>
      <a href="/sga_people/index/z">Z</a>
      &nbsp;
    </option>
    <option>
      <a href="/sga_people">ALL</a>
    </option>
  </select>
);

Alphabet.propTypes = {
  onChangeSelect: PropTypes.func.isRequired,
};

export default Alphabet;
