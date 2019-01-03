import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

const peopleRow = (person, users, alphabetValue, searchValue) => {
  const user = users[person.user_id];
  const search = searchValue.toLowerCase().trim();

  return user
    && user.first_name.toUpperCase().startsWith(alphabetValue.toUpperCase())
    && String(`${user.first_name.toLowerCase()} ${user.last_name.toLowerCase()}`).includes(search)
    && (
      <tr>
        <td>{`${user.first_name} ${user.last_name}`}</td>
        <td>{person.house}</td>
        <td>{person.department}</td>
        <td>{person.status}</td>
      </tr>
    );
};

const itemLimit = 50;

class PeopleTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offset: 0,
    };

    this.filterPeople = this.filterPeople.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
    this.filterPeople();
  }

  filterPeople() {
    const {
      people,
      houseValue,
      departmentValue,
      statusValue,
    } = this.props;

    return people.filter((p) => {
      const house = p.house.toLowerCase();
      const department = p.department.toLowerCase();
      const status = p.status.toLowerCase();

      return (house.toLowerCase() === houseValue.toLowerCase() && house !== '')
      && (department.toLowerCase() === departmentValue.toLowerCase() && department !== '')
      && (status.toLowerCase() === statusValue.toLowerCase() && status !== '');
    });
  }

  handlePageClick(page) {
    const { selected } = page;
    const offset = Math.ceil(selected * itemLimit);

    this.setState({ offset });
  }

  render() {
    const {
      people,
      users,
      searchValue,
      alphabetValue,
    } = this.props;

    console.log("people", people);

    return (
      <div>
        <table className="listing" id="peopletable">
          <thead>
            <tr className="links">
              <th onClick={this.sort} value="title">Name</th>
              <th onClick={this.sort} value="num">House</th>
              <th onClick={this.sort} value="category">Department</th>
              <th onClick={this.sort} value="status">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* TODO: add pagination */}
            {people.map(p => peopleRow(p, users, alphabetValue, searchValue))}
          </tbody>
        </table>

        {/* <div ref="pagination">
          <ReactPaginate
            previousLabel="previous"
            nextLabel="next"
            breakLabel={<div>...</div>}
            pageCount={people.length / itemLimit}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName="pagination"
            activeClassName="active"
          />
        </div>

        <div>
          {`Showing ${this.filterPeople().length} records out of ${people.length} total,
          starting on record ${this.state.offset + 1}, ending on ${this.state.offset + this.filterPeople().length}`} */}
        {/* </div> */}
      </div>
    );
  }
}

PeopleTable.propTypes = {
  people: PropTypes.arrayOf(PropTypes.shape).isRequired,
  users: PropTypes.shape.isRequired,
  houseValue: PropTypes.string.isRequired,
  departmentValue: PropTypes.string.isRequired,
  statusValue: PropTypes.string.isRequired,
  searchValue: PropTypes.string.isRequired,
  alphabetValue: PropTypes.string.isRequired,
};

export default PeopleTable;
