// @flow

import React from 'react';
import type { Node, ComponentType } from 'react';

type Props = {
  message: string,
};
function ErrorDisplay({ message }: Props): Node {
  return (
    <p className="error-block" style={{ color: 'red' }}>
      {message}
    </p>
  );
}

ErrorDisplay.displayName = 'ErrorDisplay';

export const MemoizedErrorDisplay: ComponentType<Props> = React.memo(ErrorDisplay);
