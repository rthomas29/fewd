import React from 'react';

const FormComponent = (props) => {
  const { sendCategory } = props;
  return (
    <FormComponent onSubmit={sendCategory}>
      <input type="submit" onClick={sendCategory} value="Click for food" />
    </FormComponent>
  );
};

export default FormComponent;
