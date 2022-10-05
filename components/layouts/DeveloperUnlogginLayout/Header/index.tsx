/*
 * @Author: wmy
 * @Date: 2022-02-19 23:20:57
 * @LastEditTime: 2022-06-12 22:28:05
 * @LastEditors: wmy
 * @Description: 功能描述
 */
import Link from 'next/link';
import Image from 'next/image';
import styles from './style.module.scss';
import React, { useMemo } from 'react';
import { isMobile } from 'utils/helper';

interface LinkItem {
  name?: string;
  href?: string;
  type?: string;
  key: string;
}

const DeveloperHeader = () => {
  const useMobile = useMemo(() => isMobile(), []);
  const links: LinkItem[] = [
    {
      name: '常见问题',
      href: '/developers/faq',
      key: 'faq',
    },
    {
      name: '如何推荐挣奖金',
      href: '/recommend',
      key: 'earn',
    },
    {
      name: '登录',
      href: '/developers/sign_in',
      key: 'login',
    },
    {
      name: 'For Employers',
      href: '/employer',
      key: 'home',
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div>
          <Link href='/'>
            <a>
              <Image src='/logo.svg' width={141} height={48} alt='logo'></Image>
            </a>
          </Link>
        </div>
        {useMobile ? (
          <div></div>
        ) : (
          <div className={styles.headerContainer}>
            {links.map((link) => {
              return (
                <React.Fragment key={link.key}>
                  {link.name === '登录' && <div className={styles.splitter} />}
                  <div key={link.href} className={styles.linkItem}>
                    <Link href={link.href as string}>{link.name}</Link>
                  </div>
                </React.Fragment>
              );
            })}
            <Link href='/developers/sign_up?role=recommend'>
              <a>
                <div className={styles.whiteBtn}>推荐挣奖金</div>
              </a>
            </Link>
            <Link href='/developers/sign_up'>
              <a>
                <div className={styles.blackBtn}>找远程工作机会</div>
              </a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeveloperHeader;
