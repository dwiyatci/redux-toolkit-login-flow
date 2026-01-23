/**
 * @typedef {Object} ErrorDisplayProps
 * @property {string} message
 */
/**
 * @param {ErrorDisplayProps} props
 */
export function ErrorDisplay({ message }) {
  return (
    <p className="error-block" style={{ color: 'red' }}>
      {message}
    </p>
  );
}

ErrorDisplay.displayName = 'ErrorDisplay';
