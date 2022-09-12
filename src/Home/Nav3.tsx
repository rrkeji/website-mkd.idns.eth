import React, { useEffect, useState } from 'react';
import { Menu, Tabs } from 'antd';
import classnames from 'classnames';
import { useHistory, useLocation, useParams } from 'umi';
import styles from './nav3.less';
import LOGO_PNG from '@/assets/idns.png';

export const Header = (props: any) => {
  const history: any = useHistory();

  const location: any = useLocation();

  const params: any = useParams();

  const [active, setActive] = useState<string>(location.pathname);

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  return (
    <div className={classnames(styles.container)}>
      <div className={classnames(styles.content)}>
        <div className={classnames(styles.logo)}>Micro Keys</div>
        <div className={classnames(styles.right)}>
          <div className={classnames(styles.menu_bar)}>
            <div
              className={classnames(
                styles.item,
                active === '/home' ? styles.selected : undefined,
              )}
              onClick={() => {
                history.push('/home');
              }}
            >
              首页
            </div>
            <div
              className={classnames(
                styles.item,
                active === '/guide' ? styles.selected : undefined,
              )}
              onClick={() => {
                history.push('/guide');
              }}
            >
              开发向导
            </div>
            <div
              className={classnames(
                styles.item,
                active === '/console' ? styles.selected : undefined,
              )}
              onClick={() => {
                history.push('/console');
              }}
            >
              控制台
            </div>
            <div
              className={classnames(
                styles.item,
                active === '/about' ? styles.selected : undefined,
              )}
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
