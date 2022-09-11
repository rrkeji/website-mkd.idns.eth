import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

import styles from './index.less';

export const AboutPage = (props: { className?: string }) => {
  return (
    <div className={classnames(styles.container, props.className)}>
      IDNS.ETH
    </div>
  );
};

export default AboutPage;
