import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import iconCheck from '../../assets/images/icon-check.svg';

import { Container } from './styles';

function Checkbox({ label, value, onChange, ...props }) {
  const change = useCallback(() => {
    onChange(!value);
  }, [onChange, value]);
  return (
    <Container bgCheck={iconCheck}>
      <input value={value} type="checkbox" {...props} onChange={change} />
      <span>{label}</span>
    </Container>
  );
}

Checkbox.defaultProps = {
  value: false,
};

Checkbox.propTypes = {
  value: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
