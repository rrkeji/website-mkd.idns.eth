import React from 'react';
import { Row, Col } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender as getChildrenToRenderFunc } from './utils';
import {
  AppleOutlined,
  AndroidOutlined,
  SoundOutlined,
  UserOutlined,
} from '@ant-design/icons';

import APP_SVG from '@/assets/app.svg';

const Content5 = (props: any) => {
  const getChildrenToRender = (data: any) =>
    data.map((item: any) => {
      return (
        <Col key={item.name} {...item}>
          <a {...item.children.wrapper}>
            <span {...item.children.img}>
              <img src={item.children.img.children} height="100%" alt="img" />
            </span>
            <p {...item.children.content}>{item.children.content.children}</p>
          </a>
        </Col>
      );
    });

  const dataSource = Content50DataSource;

  const childrenToRender = getChildrenToRender(dataSource.block.children);
  return (
    <div {...props} {...dataSource.wrapper}>
      <div {...dataSource.page}>
        <div key="title" {...dataSource.titleWrapper}>
          {dataSource.titleWrapper.children.map(getChildrenToRenderFunc)}
        </div>
        <OverPack
          className={`content-template ${props.className}`}
          {...dataSource.OverPack}
        >
          <TweenOneGroup
            component={Row}
            key="ul"
            enter={{
              y: '+=30',
              opacity: 0,
              type: 'from',
              ease: 'easeInOutQuad',
            }}
            leave={{ y: '+=30', opacity: 0, ease: 'easeInOutQuad' }}
            {...dataSource.block}
          >
            {childrenToRender}
          </TweenOneGroup>
        </OverPack>
      </div>
    </div>
  );
};

export const Content50DataSource = {
  wrapper: { className: 'home-page-wrapper content5-wrapper' },
  page: { className: 'home-page content5' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>UDI????????????</p>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <span>
            <p>????????????????????????????????????????????????????????????????????????</p>
          </span>
        ),
      },
    ],
  },
  block: {
    className: 'content5-img-wrapper',
    gutter: 16,
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children: APP_SVG,
          },
          content: {
            children: [
              <span>
                <p>????????????</p>
              </span>,
            ],
          },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children: APP_SVG,
          },
          content: {
            children: (
              <span>
                <p>????????????</p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children: APP_SVG,
          },
          content: {
            children: (
              <span>
                <p>????????????</p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children: APP_SVG,
          },
          content: {
            children: (
              <span>
                <span>
                  <p>????????????</p>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children: APP_SVG,
          },
          content: {
            children: (
              <span>
                <p>????????????</p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children: APP_SVG,
          },
          content: {
            children: (
              <span>
                <span>
                  <p>????????????</p>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block6',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children: APP_SVG,
          },
          content: {
            children: (
              <span>
                <p>????????????</p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block7',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children: APP_SVG,
          },
          content: {
            children: (
              <span>
                <p>????????????</p>
              </span>
            ),
          },
        },
      },
    ],
  },
};

export default Content5;
