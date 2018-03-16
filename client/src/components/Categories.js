import React from 'react';
import { Button } from 'reactstrap';

const Categories = (props) => {
  const { setTerm } = props;

  return (
    <div>
      <Button value="Greek" onClick={setTerm}>
        Greek
      </Button>
      <Button value="Barbecue" onClick={setTerm}>
        Barbecue
      </Button>
    </div>
  );
};

export default Categories;
