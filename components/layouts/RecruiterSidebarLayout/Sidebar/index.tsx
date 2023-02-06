/*
 * @LastEditors: wmy
 * @Description: 功能描述
 * @Date: 2022-05-28 15:57:49
 * @Author: wmy
 * @LastEditTime: 2022-06-12 00:51:45
 */

import Image from 'next/image';

import styles from './styles.module.scss';
import { Progress } from 'antd';
import {
  HomeOutlined,
  ProfileOutlined,
  MoneyCollectOutlined,
} from '@ant-design/icons';
import classnames from 'classnames';
import Link from 'next/link';
import { TRole } from 'utils/type';

interface IProps {
  activeMenu: string;
}

const Sidebar = (props: IProps) => {
  const { activeMenu } = props;

  const menu = [
    {
      key: 'basic_info',
      label: 'Basic Info',
      icon: <HomeOutlined />,
      href: '/recruiters/basic_info',
    },
    {
      key: 'candidates',
      label: 'My Candidates',
      icon: <ProfileOutlined />,
      href: '/recruiters/candidates',
    },
    {
      key: 'jobs',
      label: 'My Jobs',
      icon: <MoneyCollectOutlined />,
      href: '/developers/jobs',
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image src='/logo.svg' width={141} height={48} alt='logo' />
      </div>
      <div className={styles.body}>
        <div className={styles.menuContainer}>
          {menu.map((item) => {
            return (
              <Link key={item.key} href={item.href}>
                <a
                  className={classnames(
                    {
                      [styles.selected]: item.key === activeMenu,
                    },
                    styles.menu
                  )}
                >
                  {item.icon} {item.label}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
