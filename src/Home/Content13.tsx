import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

export const Feature20DataSource = {
  wrapper: {
    className: 'home-page-wrapper content2-wrapper l7vkzkgp35l-editor_css',
  },
  OverPack: { className: 'home-page content2', playScale: 0.3 },
  imgWrapper: { className: 'content2-img', md: 10, xs: 24 },
  img: {
    children: 'https://zos.alipayobjects.com/rmsportal/tvQTfCupGUFKSfQ.png',
  },
  textWrapper: { className: 'content2-text', md: 14, xs: 24 },
  title: {
    className: 'content2-title',
    children: (
      <span>
        <p>最佳实践</p>
      </span>
    ),
  },
  content: {
    className: 'content2-content',
    children: (
      <span>
        <span>
          <p>
            推荐和IPFS文件系统结合使用，数据存储在IPFS上，CID存在在Micro
            Keys上。同时可以使用sqlite3数据库进行应用数据存储，sqlite3数据与IPFS上文件进行同步，同步后的数据存储在Micro
            Keys上，详细可参见指导手册。
          </p>
        </span>
      </span>
    ),
  },
};

export const Content2 = (props: any) => {
  const { isMobile } = props;

  const dataSource = Feature20DataSource;
  const animType = {
    queue: isMobile ? 'bottom' : 'left',
    one: isMobile
      ? {
          scaleY: '+=0.3',
          opacity: 0,
          type: 'from',
          ease: 'easeOutQuad',
        }
      : {
          x: '+=30',
          opacity: 0,
          type: 'from',
          ease: 'easeOutQuad',
        },
  };
  const img = (
    <TweenOne
      key="img"
      animation={animType.one}
      resetStyle
      {...dataSource.imgWrapper}
      component={Col}
      componentProps={{
        md: dataSource.imgWrapper.md,
        xs: dataSource.imgWrapper.xs,
      }}
    >
      <span {...dataSource.img}>
        <img src={dataSource.img.children} width="100%" alt="img" />
      </span>
    </TweenOne>
  );
  return (
    <div {...dataSource.wrapper}>
      <OverPack {...dataSource.OverPack} component={Row}>
        {isMobile && img}
        <QueueAnim
          type={animType.queue}
          key="text"
          leaveReverse
          ease={['easeOutCubic', 'easeInCubic']}
          {...dataSource.textWrapper}
          component={Col}
          componentProps={{
            md: dataSource.textWrapper.md,
            xs: dataSource.textWrapper.xs,
          }}
        >
          <h2 key="h1" {...dataSource.title}>
            {dataSource.title.children}
          </h2>
          <div key="p" {...dataSource.content}>
            {dataSource.content.children}
          </div>
        </QueueAnim>
        {!isMobile && img}
      </OverPack>
    </div>
  );
};

export default Content2;
