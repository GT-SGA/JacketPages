import React from 'react';
import PropTypes from 'prop-types';

const StatusFilter = (props) => {
  const { name, id } = props;

  return (
    <select name={name} id={id}>
      <option value="1" selected="selected">Created</option>
      <option value="2">Awaiting Author</option>
      <option value="3">Authored</option>
      <option value="4">Agenda</option>
      <option value="5">Conference</option>
      <option value="6">Passed</option>
      <option value="7">Failed</option>
      <option value="8">Tabled</option>
    </select>
  );
};

StatusFilter.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default StatusFilter;
