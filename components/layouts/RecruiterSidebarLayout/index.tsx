/*
 * @LastEditors: wmy
 * @Description: 功能描述
 * @Date: 2022-05-29 16:19:31
 * @Author: wmy
 * @LastEditTime: 2022-06-21 02:50:42
 */

import { useEffect, useState } from 'react';
import { LayoutOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Sidebar from './Sidebar';
import styles from './styles.module.scss';

interface IProps {
  activeMenu: string;
  children: React.ReactNode;
}

const RecruiterSidebarLayout = (props: IProps) => {
  const { activeMenu, children } = props;
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Sidebar activeMenu={activeMenu} />
      </div>

      <div className={styles.right}>
        <div className={styles.breadcrumb}>
          <div>
            <LayoutOutlined />
          </div>
          <div className={styles.levelOne}>
            Dashboards&nbsp;&nbsp;/&nbsp;&nbsp;
          </div>
          <div>{activeMenu}</div>
        </div>
        <div className={styles.innerContainer}>{children}</div>
      </div>
    </div>
  );
};

export default RecruiterSidebarLayout;
