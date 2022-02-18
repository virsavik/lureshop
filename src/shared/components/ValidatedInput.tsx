import React from 'react';
import { FormFeedback, FormGroup, Input, InputProps } from 'reactstrap';

type ValidatedInputPropsType = {
  error?: string;
} & InputProps;

const ValidatedInput = React.forwardRef<HTMLInputElement, ValidatedInputPropsType>((props, ref) => (
  <FormGroup>
    <Input {...props} innerRef={ref} />
    <FormFeedback>{props.error}</FormFeedback>
  </FormGroup>
));

export default ValidatedInput;
