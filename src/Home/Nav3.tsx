import React, { useState } from 'react';
import { Menu, Tabs } from 'antd';
import classnames from 'classnames';
import { useHistory, useLocation, useParams } from 'umi';
import styles from './nav3.less';
import LOGO_PNG from '@/assets/idns.png';

export const Header = (props: any) => {
  const history: any = useHistory();

  return (
    <div className={classnames(styles.container)}>
      <div className={classnames(styles.content)}>
        <div className={classnames(styles.logo)}>Micro Keys</div>
        <div className={classnames(styles.right)}>
          <div className={classnames(styles.menu_bar)}>
            <div
              className={classnames(styles.item)}
              onClick={() => {
                history.push('/home');
              }}
            >
              首页
            </div>
            <div
              className={classnames(styles.item)}
              onClick={() => {
                history.push('/download');
              }}
            >
              登录
            </div>
            <div
              className={classnames(styles.item)}
              onClick={() => {
                history.push('/about');
              }}
            >
              关于
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
