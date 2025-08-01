// @flow

import * as React from 'react';

type Props = {
  message: string,
};
function ErrorDisplay({ message }: Props): React.Node {
  return (
    <p className="error-block" style={{ color: 'red' }}>
      {message}
    </p>
  );
}

ErrorDisplay.displayName = 'ErrorDisplay';

export const MemoizedErrorDisplay: React.ComponentType<Props> = React.memo(ErrorDisplay);
