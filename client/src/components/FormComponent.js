import React from 'react';
import { Form } from 'reactstrap';

const FormComponent = (props) => {
  const { sendCategory } = props;
  return (
    <Form onSubmit={sendCategory}>
      <input type="submit" onClick={sendCategory} value="Click for food" />
    </Form>
  );
};

export default FormComponent;
