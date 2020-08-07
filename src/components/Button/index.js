import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Button({ variant, outline, children, ...props }) {
  return (
    <Container outline={outline} variant={variant} {...props}>
      {children}
    </Container>
  );
}

Button.defaultProps = {
  variant: 'primary',
  outline: false,
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'warning', 'success']),
  outline: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

export default Button;
