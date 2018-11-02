import React from 'react';

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

export default StatusFilter;
