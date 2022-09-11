import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './index.less';

import API_MARKDOWN from './api-markdown.md';

export const GuidePage = (props: { className?: string }) => {
  return (
    <div className={classnames(styles.container, props.className)}>
      <ReactMarkdown
        children={API_MARKDOWN}
        remarkPlugins={[remarkGfm]}
      ></ReactMarkdown>
    </div>
  );
};

export default GuidePage;
