/*
 * @Author: wmy
 * @Date: 2022-02-19 23:20:57
 * @LastEditTime: 2022-07-31 22:31:43
 * @LastEditors: wmy
 * @Description: 功能描述
 */
import Link from 'next/link';
import Image from 'next/image';
import styles from './style.module.scss';
import { Button } from 'antd';

const Header = () => {
  const links = [
    // {
    //   name: 'Search for a recruiter',
    //   href: '/',
    // },
    {
      name: 'For employers',
      href: '/for_parteners',
    },
    // {
    //   name: 'For candidates',
    //   href: '/for_candidates',
    // },
    {
      name: 'For recruiters',
      href: '/for_recruiters',
    },
    // {
    //   name: 'Contact',
    //   href: '/contact',
    // },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div>
          <Image src='/logo.svg' width={122} height={36} alt='logo'></Image>
        </div>
        <div className={styles.footerContainer}>
          {links.map((link) => (
            <div key={link.href} className={styles.linkItem}>
              <Link href={link.href}>{link.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
