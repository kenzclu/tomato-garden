import React from 'react';
import classNames from 'classnames'

import './Button.css'

function Button(props) {
  const { children, noUi, opaque, onClick } = props
  return (
    <button className={classNames('button', { noUi, opaque })} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;