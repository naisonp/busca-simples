import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Select({ options, prefix, placeholderAlt, onChange, disabled, value, ...props }) {
  const change = useCallback(
    e => {
      return onChange(e.target.value || null);
    },
    [onChange],
  );

  return (
    <Container {...props} onChange={change} disabled={disabled} value={value}>
      <option value="">
        {`${prefix ? `${prefix}:` : ''} ${placeholderAlt}`}
      </option>
      {options.map(({ value: optVal, label }) => (
        <option key={`${prefix}-${optVal}`} value={optVal}>
          {prefix ? `${prefix}: ${label}` : label}
        </option>
      ))}
    </Container>
  );
}

Select.defaultProps = {
  prefix: '',
  value: '',
  placeholderAlt: '',
  options: [],
  disabled: false,
};

Select.propTypes = {
  prefix: PropTypes.string,
  disabled: PropTypes.bool,
  placeholderAlt: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }),
  ),
};

export default Select;
