import React from 'react';
import classNames from 'classnames'

import './Button.css'

function Button(props) {
  const { children, noUi } = props
  return (
    <button className={classNames('button', { noUi })}>
      {children}
    </button>
  );
}

export default Button;