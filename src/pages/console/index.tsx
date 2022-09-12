import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

import styles from './index.less';

export const ConsolePage = (props: { className?: string; children: any }) => {
  return (
    <div className={classnames(styles.container, props.className)}>
      {props.children}
    </div>
  );
};

export default ConsolePage;
