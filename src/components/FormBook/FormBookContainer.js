import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import FormBook from './FormBook';
import { validateFormBook } from './validate';

export default compose(
  connect(
    null,
    null,
    (propsState, propsDispatch, ownProps) => {
      const handleSubmit = (data) => {
        console.log('submit data = ', data);
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
