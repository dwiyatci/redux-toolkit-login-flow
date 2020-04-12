import React from 'react';

export const Error = React.memo(({ message }) => {
  return (
    <p className="error-block" style={{ color: 'red' }}>
      {message}
    </p>
  );
});
