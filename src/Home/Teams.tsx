import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col, Avatar } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender, isImg } from './utils';
import {
  AppleOutlined,
  AndroidOutlined,
  SoundOutlined,
  UserOutlined,
} from '@ant-design/icons';

export const Teams10DataSource = {
  wrapper: { className: 'home-page-wrapper teams1-wrapper' },
  page: { className: 'home-page teams1' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '团队成员' }],
  },
  block: {
    className: 'block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children: (
                <div>
                  <Avatar
                    size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                    icon={<UserOutlined />}
                  />
                </div>
              ),
            },
            {
              name: 'title',
              className: 'teams1-title',
              children: (
                <span>
                  <p>Jinisu</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams1-job',
              children: 'IDNS+CTO 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
                'IDNS致力于去中心化的身份认证,以及在其基础之上实现一个基于身份的网络。',
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children: (
                <div>
                  <Avatar
                    size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                    icon={<UserOutlined />}
                  />
                </div>
              ),
            },
            {
              name: 'title',
              className: 'teams1-title',
              children: (
                <span>
                  <p>Bob</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams1-job',
              children: 'UDI+CTO 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
                'IDNS致力于去中心化的身份认证,以及在其基础之上实现一个基于身份的网络。',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children: (
                <div>
                  <Avatar
                    size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                    icon={<UserOutlined />}
                  />
                </div>
              ),
            },
            {
              name: 'title',
              className: 'teams1-title',
              children: (
                <span>
                  <p>Jason</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams1-job',
              children: 'UDI+CEO 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
                'IDNS致力于去中心化的身份认证,以及在其基础之上实现一个基于身份的网络。',
            },
          ],
        },
      },
    ],
  },
};

export const Teams = (props: any) => {
  const getBlockChildren = (data: any) =>
    data.map((item: any, i: number) => {
      const { titleWrapper, ...$item } = item;
      return (
        <Col key={i.toString()} {...$item}>
          {titleWrapper.children.map(getChildrenToRender)}
        </Col>
      );
    });

  const dataSource = Teams10DataSource;

  const listChildren = getBlockChildren(dataSource.block.children);
  return (
    <div {...props} {...dataSource.wrapper}>
      <div {...dataSource.page}>
        <div {...dataSource.titleWrapper}>
          {dataSource.titleWrapper.children.map(getChildrenToRender)}
        </div>
        <OverPack {...dataSource.OverPack}>
          <QueueAnim
            type="bottom"
            key="block"
            leaveReverse
            {...dataSource.block}
            component={Row}
          >
            {listChildren}
          </QueueAnim>
        </OverPack>
      </div>
    </div>
  );
};

export default Teams;
