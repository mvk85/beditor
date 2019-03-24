import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styles from './styles.scss';

import AddButton from '../../commons/buttons/AddButton/AddButton';

class AddBook extends PureComponent {
  handleClick = () => {
    const { history } = this.props;

    history.push('/book');
  };

  render() {
    return (
      <div className={styles.add}>
        <AddButton handleClick={this.handleClick} />
      </div>
    );
  }
}

AddBook.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(AddBook);
