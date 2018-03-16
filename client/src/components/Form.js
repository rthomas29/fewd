import React, { Component } from 'react';

const Form = (props) => {
  const { data } = props;
  return (
    <div>
      {data.name}
    </div>
  );
};

export default Form;
