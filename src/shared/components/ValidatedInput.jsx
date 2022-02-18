import React from 'react';
import { FormFeedback, FormGroup, Input } from 'reactstrap';

const ValidatedInput = React.forwardRef((props, ref) => (
  <FormGroup>
    <Input {...props} innerRef={ref} />
    <FormFeedback>{props.error}</FormFeedback>
  </FormGroup>
));

export default ValidatedInput;
