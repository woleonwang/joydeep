/* eslint-disable @next/next/no-img-element */
/*
 * @LastEditors: wmy
 * @Description: 功能描述
 * @Date: 2022-05-28 15:57:49
 * @Author: wmy
 * @LastEditTime: 2022-06-12 00:51:45
 */

import Image from 'next/image';

import styles from './styles.module.scss';
import { Dropdown, Menu } from 'antd';
import { HomeOutlined, ProfileOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import Link from 'next/link';
import context from 'context/context';
import request from 'utils/request';
import router from 'next/router';

interface IProps {
  activeMenu: string;
}

const Sidebar = (props: IProps) => {
  const { activeMenu } = props;
  const { userInfo } = context.useGlobalContext();

  const menu = [
    {
      key: 'profile',
      label: 'Profile',
      icon: <HomeOutlined />,
      href: '/recruiters/profile',
    },
    {
      key: 'endorsements',
      label: 'Endorsements',
      icon: <ProfileOutlined />,
      href: '/recruiters/endorsements',
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image src='/logo.svg' width={121} height={38} alt='logo' />
        <div className={styles.tag}>Recruiter</div>
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
      <div className={styles.footer}>
        <Dropdown
          placement='top'
          overlay={
            <Menu
              style={{ width: 150 }}
              onClick={async (item) => {
                if (item.key === 'logout') {
                  const { message } = await request.get('recruiters.signOut');
                  if (message && !message.err_code) {
                    router.replace('/recruiters/sign_in');
                  }
                }
              }}
              items={[
                {
                  key: 'logout',
                  label: 'Logout',
                },
              ]}
            />
          }
        >
          <div className={styles.menuWrapper}>
            <img src={userInfo.avatar || '/logo.svg'} alt='' />
            <div className={styles.nameWrapper}>{userInfo.userName}</div>
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default Sidebar;
