import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import uuid from 'uuid/v4';
import { withRouter } from 'react-router-dom';
import FormBook from './FormBook';
import { validateFormBook } from './validate';
import { saveNewBook } from '../../actions/book';
import { getListBook } from '../../reducers/book';

export default compose(
  withRouter,
  connect(
    state => ({
      books: getListBook(state),
    }),
    {
      saveNewBook,
    },
    (propsState, propsDispatch, ownProps) => {
      const { books } = propsState;
      const { match: { params } } = ownProps;
      const idEditBook = params.id;
      const cbSuccess = () => {
        const { history } = ownProps;

        history.push('/');
      };
      const handleSubmit = (data) => {
        const { saveNewBook: save } = propsDispatch;
        const id = idEditBook || uuid();
        const newBook = {
          id,
          data,
        };

        save({ book: newBook, cb: cbSuccess });
      };
      let initialValues = {};

      if (idEditBook) {
        const book = books[idEditBook];

        initialValues = { ...book.data };
      }

      return {
        ...propsState,
        ...propsDispatch,
        ...ownProps,

        onSubmit: handleSubmit,

        initialValues,
      };
    },
  ),
  reduxForm({
    form: 'bookForm',
    validate: validateFormBook,
  }),
)(FormBook);
