import React from 'react';
import PropTypes from 'prop-types';

ErrorComponent.propTypes = {
  message: PropTypes.string.isRequired,
};
function ErrorComponent({ message }) {
  return (
    <p className="error-block" style={{ color: 'red' }}>
      {message}
    </p>
  );
}

ErrorComponent.displayName = 'Error';

export const Error = React.memo(ErrorComponent);
