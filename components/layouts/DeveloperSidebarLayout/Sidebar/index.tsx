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
  percent: number;
  activeMenu: string;
  role: TRole;
}

const Sidebar = (props: IProps) => {
  const { percent, activeMenu, role } = props;
  const isDeveloper = role === 'developer';
  const menu = [
    {
      key: 'dashboard',
      label: '首页',
      icon: <HomeOutlined />,
      href: '/developers/dashboard',
    },
    {
      key: 'profile',
      label: isDeveloper ? '我的简历' : '个人信息',
      icon: <ProfileOutlined />,
      href: '/developers/profile',
    },
    {
      key: 'recommend',
      label: '推荐挣奖金',
      icon: <MoneyCollectOutlined />,
      href: '/developers/recommend',
    },
  ];
  
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image src='/logo.svg' width={141} height={48} alt='logo' />
      </div>
      <div className={styles.body}>
        {percent === 100 && (
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
        )}

        {isDeveloper && (
          <div className={styles.percentContainer}>
            <div className={styles.text}>
              <div>简历完成度</div>
              <div>{percent}%</div>
            </div>
            <div>
              <Progress
                percent={percent}
                showInfo={false}
                trailColor='white'
                strokeColor='#2656C9'
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
