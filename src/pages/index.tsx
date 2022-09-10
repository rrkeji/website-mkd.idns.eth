import React, { useEffect, useState } from 'react';

import Nav3 from '../Home/Nav3';
import Footer1 from '../Home/Footer1';

import '../Home/less/antMotionStyle.less';

export default (props: { children: any }) => {
  return (
    <div className="templates-wrapper">
      <Nav3 />
      {props.children}
      <Footer1 />,
    </div>
  );
};
