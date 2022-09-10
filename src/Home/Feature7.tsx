import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender } from './utils';

export const Content00DataSource = {
  wrapper: {
    className: 'home-page-wrapper content0-wrapper l7vk8roah5b-editor_css',
  },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '产品与服务' }],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <span>
                    <p>多种接入方式</p>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>提供网页、桌面应用、手机应用多张方式接入</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>用户键值存储</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <span>
                    <p>提供应用用户的键值存储空间</p>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>应用配置存储</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <span>
                    <p>提供应用通用配置存储、应用用户的配置存储</p>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
};

export const Content = () => {
  const dataSource = Content00DataSource;
  const {
    wrapper,
    titleWrapper,
    page,
    OverPack: overPackData,
    childWrapper,
  } = dataSource;
  return (
    <div {...wrapper} style={{ backgroundColor: 'rgb(250, 250, 250)' }}>
      <div {...page}>
        <div {...titleWrapper}>
          {titleWrapper.children.map(getChildrenToRender)}
        </div>
        <OverPack {...overPackData}>
          <QueueAnim
            type="bottom"
            key="block"
            leaveReverse
            component={Row}
            componentProps={childWrapper}
          >
            {childWrapper.children.map((block, i) => {
              const { children: item, ...blockProps } = block;
              return (
                <Col key={i.toString()} {...blockProps}>
                  <div {...item}>{item.children.map(getChildrenToRender)}</div>
                </Col>
              );
            })}
          </QueueAnim>
        </OverPack>
      </div>
    </div>
  );
};

export default Content;
