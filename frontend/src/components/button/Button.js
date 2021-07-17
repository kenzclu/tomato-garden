import React from 'react';
import classNames from 'classnames'

import './Button.css'

function Button(props) {
  const { children, noUi, opaque } = props
  return (
    <button className={classNames('button', { noUi, opaque })}>
      {children}
    </button>
  );
}

export default Button;