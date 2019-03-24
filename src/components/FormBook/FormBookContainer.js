import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import uuid from 'uuid/v4';
import FormBook from './FormBook';
import { validateFormBook } from './validate';
import { saveNewBook } from '../../actions/book';

export default compose(
  connect(
    null,
    {
      saveNewBook,
    },
    (propsState, propsDispatch, ownProps) => {
      const handleSubmit = (data) => {
        const { saveNewBook: save } = propsDispatch;
        const newBook = {
          id: uuid(),
          data,
        };

        save(newBook);
      };

      return {
        ...propsState,
        ...propsDispatch,
        ...ownProps,

        onSubmit: handleSubmit,

        // initialValues: {
        //   book: '',
        // },
        //
        // fields: ['book'],
      };
    },
  ),
  reduxForm({
    form: 'bookForm',
    validate: validateFormBook,
  }),
)(FormBook);
