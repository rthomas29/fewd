import React from 'react';
import { Form } from 'reactstrap';

const FormComponent = (props) => {
  const { sendCategory } = props;
  return (
    <Form onSubmit={sendCategory}>
      <input className="btn btn-primary" type="submit" onClick={sendCategory} value="Click for food" />
    </Form>
  );
};

export default FormComponent;
