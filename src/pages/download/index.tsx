import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import {
  AppleOutlined,
  AndroidOutlined,
  WindowsOutlined,
  UserOutlined,
  DownloadOutlined,
  LaptopOutlined,
} from '@ant-design/icons';

import styles from './index.less';
import classNames from 'classnames';

export const DownloadPage = (props: { classNameName?: string }) => {
  return (
    <div className={styles.download_card}>
      <div className={styles.phone}>
        <div className={styles.screen}>
          <div className={styles.dd_download_pic}></div>
          <p>扫描二维码</p>
          <p>下载手机客户端</p>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          <i className={styles.web_font}>立即下载</i>
        </div>
        <div className={styles.desc}>
          让应用轻松的具备多身份、身份可信、去中心化等特点
        </div>
        <div className={styles.list}>
          <div className={classnames(styles.item)}>
            <div className={classnames(styles.modal, styles.front)}>
              <div className={classnames(styles.iconfont)}>
                <AppleOutlined />
              </div>
              <p>Mac</p>
            </div>
            <div className={classnames(styles.modal, styles.back)}>
              <div className={classnames(styles.iconfont)}>
                <DownloadOutlined />
              </div>
              <p>下载Mac客户端</p>
            </div>
          </div>
          <div className={classNames(styles.item, styles.windows_item)}>
            <div className={classnames(styles.modal, styles.front)}>
              <div className={classnames(styles.iconfont)}>
                <WindowsOutlined />
              </div>
              <p>Windows</p>
            </div>
            <div className={classnames(styles.modal, styles.back)}>
              <div className={classnames(styles.iconfont)}>
                <DownloadOutlined />
              </div>
              <p>点击下载Windows客户端</p>
            </div>
          </div>
          <div className={classnames(styles.item)}>
            <div className={classnames(styles.modal, styles.front)}>
              <div className={classnames(styles.iconfont)}>
                <LaptopOutlined />
              </div>
              <p style={{ marginTop: '2px' }}>Linux</p>
            </div>
            <div className={classnames(styles.modal, styles.back)}>
              <div className={classnames(styles.iconfont)}>
                <DownloadOutlined />
              </div>
              <p>查看安装指引</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
