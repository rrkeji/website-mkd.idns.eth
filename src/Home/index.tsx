import React, { useEffect, useState } from 'react';
import { enquireScreen } from 'enquire-js';

import Banner3 from './Banner3';
import Teams from './Teams';
import Feature7 from './Feature7';
import Content13 from './Content13';
import Content5 from './Content5';
import Content1 from './Content1';

import './less/antMotionStyle.less';

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default () => {
  const [isMobile, setisMobile] = useState<boolean>(false);

  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    // 适配手机屏幕;
    enquireScreen((b: any) => {
      setisMobile(!!b);
    });
    setTimeout(() => {
      setShow(true);
    }, 500);
  }, []);

  const children = [
    <Banner3 />,
    <Feature7 />,
    <Content13 />,
    <Content5 />,
    <Content1 />,
  ];
  return <div className="templates-wrapper">{show && children}</div>;
};
