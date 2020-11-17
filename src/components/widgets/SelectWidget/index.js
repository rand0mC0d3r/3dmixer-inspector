import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import { StyledSelect } from './styles.jsx';

export default ({
  name = '',
  onChange = () => {},
  options = [],
  value = ''
}) => {
  const _onChange = event => {
    onChange(name, event.target.value);
  };

  return <FormControl>
    <StyledSelect
      value={value || ''}
      onChange={_onChange}
    >
      <MenuItem value={value}>{value}</MenuItem>)
      {options.map((option, i) => (
        <MenuItem key={i} value={option}>{option}</MenuItem>)
      )}
    </StyledSelect>
  </FormControl>;
};