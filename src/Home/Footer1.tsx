import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import { getChildrenToRender } from './utils';
import { isImg } from './utils';

export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          children: 'https://docs.ipfs.tech/images/ipfs-logo.svg',
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children:
                'IPFS是一个去中心化的文件系统,IDNS的一些应用是建立在IPFS基础之上的.',
            },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '相关产品' },
        childWrapper: {
          children: [
            {
              name: 'link0',
              href: 'https://www.idns.eth',
              children: 'IDNS.ETH',
            },
            {
              name: 'link1',
              href: 'https://disk.idns.eth',
              children: 'IDNS网盘',
            },
            {
              name: 'link2',
              href: 'https://udi.idns.eth',
              children: 'UDI网络',
            },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '关于' },
        childWrapper: {
          children: [
            { href: '#', name: 'link0', children: 'FAQ' },
            { href: '#', name: 'link1', children: '联系我们' },
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '资源' },
        childWrapper: {
          children: [
            { href: '#', name: 'link0', children: 'IDNS社区' },
            { href: '#', name: 'link1', children: 'UDI社区' },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        ©2022 by <a href="https://ipfs.idns.eth">IPFS.IDNS</a> All Rights
        Reserved
      </span>
    ),
  },
};

export const Footer = (props: { className?: string }) => {
  const getLiChildren = (data: any) =>
    data.map((item: any, i: number) => {
      const { title, childWrapper, ...itemProps } = item;
      return (
        <Col key={i.toString()} {...itemProps} title={null} content={null}>
          <h2 {...title}>
            {typeof title.children === 'string' &&
            title.children.match(isImg) ? (
              <img src={title.children} width="100%" alt="img" />
            ) : (
              title.children
            )}
          </h2>
          <div {...childWrapper}>
            {childWrapper.children.map(getChildrenToRender)}
          </div>
        </Col>
      );
    });

  const dataSource = Footer10DataSource;

  const childrenToRender = getLiChildren(dataSource.block.children);

  return (
    <div {...props} {...dataSource.wrapper}>
      <QueueAnim
        type="bottom"
        key="ul"
        leaveReverse
        component={Row}
        {...dataSource.block}
      >
        {childrenToRender}
      </QueueAnim>
      <TweenOne
        animation={{ y: '+=30', opacity: 0, type: 'from' }}
        key="copyright"
        {...dataSource.copyrightWrapper}
      >
        <div {...dataSource.copyrightPage}>
          <div {...dataSource.copyright}>{dataSource.copyright.children}</div>
        </div>
      </TweenOne>
    </div>
  );
};

export default Footer;
