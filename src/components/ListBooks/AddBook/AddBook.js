import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import AddButton from '../../commons/buttons/AddButton/AddButton';

class AddBook extends PureComponent {
  handleClick = () => {
    const { history } = this.props;

    history.push('/book');
    console.log('add');
  };

  render() {
    return (
      <div>
        <AddButton handleClick={this.handleClick} />
      </div>
    );
  }
}

AddBook.propTypes = {
  // match: PropTypes.object.isRequired,
  // location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(AddBook);
