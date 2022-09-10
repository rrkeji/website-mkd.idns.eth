import React from 'react';
import { Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { isImg } from './utils';

export const Banner00DataSource = {
  wrapper: { className: 'banner0' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title',
    children: (
      <span>
        <span>
          <span>
            <span>
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <p>Micro Keys</p>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    ),
  },
  content: {
    className: 'banner0-content',
    children: (
      <span>
        <span>
          <span>
            <span>
              <p>
                <span>一个键值对的存储</span>
                <br />
              </p>
            </span>
          </span>
        </span>
      </span>
    ),
  },
  button: { className: 'banner0-button', children: 'Learn More' },
};

export const Banner = (props: any) => {
  const dataSource = Banner00DataSource;
  return (
    <div {...dataSource.wrapper}>
      <QueueAnim
        key="QueueAnim"
        type={['bottom', 'top']}
        delay={200}
        {...dataSource.textWrapper}
      >
        <div key="title" {...dataSource.title}>
          {typeof dataSource.title.children === 'string' &&
          dataSource.title.children.match(isImg) ? (
            <img src={dataSource.title.children} width="100%" alt="img" />
          ) : (
            dataSource.title.children
          )}
        </div>
        <div key="content" {...dataSource.content}>
          {dataSource.content.children}
        </div>
        <Button ghost key="button" {...dataSource.button}>
          {dataSource.button.children}
        </Button>
      </QueueAnim>
      <TweenOne
        animation={{
          y: '-=20',
          yoyo: true,
          repeat: -1,
          duration: 1000,
        }}
        className="banner0-icon"
        key="icon"
      >
        <DownOutlined />
      </TweenOne>
    </div>
  );
};
export default Banner;
