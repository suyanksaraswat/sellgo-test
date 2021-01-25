import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import { deleteEvent } from "../action/movieActions";
//const image = "https://m.media-amazon.com/images/M/MV5BODZmYjMwNzEtNzVhNC00ZTRmLTk2M2UtNzE1MTQ2ZDAxNjc2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
}

const MovieTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.data);

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <div className="col m4">
      <Table bordered>
        <thead>
          <tr>
            <th className={getClassNamesFor('name')} onClick={() => requestSort('name')}>Name</th>
            <th className={getClassNamesFor('year')} onClick={() => requestSort('year')}>Year</th>
            <th className={getClassNamesFor('movieId')} onClick={() => requestSort('movieId')}>Imdb ID</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map(d => (
            <tr>
              <td>{d.name}</td>
              <td>{d.year}</td>
              <td>{d.movieId}</td>
              <td>
                <i
                  class="fa fa-trash"
                  onClick={() => {
                    props.deleteEvent(d.movieId)
                  }}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

MovieTable.propTypes = {
  deleteEvent: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteEvent }
)(MovieTable);
