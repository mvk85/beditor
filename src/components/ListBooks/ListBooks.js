import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AddButton from "../commons/buttons/AddButton/AddButton";
import ItemBook from "./ItemBook";
import './styles.scss';

class ListBooks extends Component {
  render() {
    return (
      <div className="container">
        <AddButton />
        <ItemBook />
      </div>
    );
  }
}

ListBooks.propTypes = {};

export default ListBooks;