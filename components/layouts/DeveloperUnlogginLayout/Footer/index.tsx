/*
 * @Author: wmy
 * @Date: 2022-02-19 23:20:57
 * @LastEditTime: 2022-06-12 00:19:21
 * @LastEditors: wmy
 * @Description: 功能描述
 */
import Link from 'next/link';
import Image from 'next/image';
import styles from './style.module.scss';

const Header = () => {
  const links = [
    {
      name: '如何推荐挣奖金',
      href: '/recommend',
    },
    {
      name: 'For Employers',
      href: '/employer',
    },
    {
      name: '推荐挣奖金',
      href: '/developers/sign_up?role=recommend',
    },
    {
      name: '找远程工作机会',
      href: '/developers/sign_up',
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <Image src='/logo.svg' width={100} height={48} alt='logo'></Image>
        </div>
        <div className={styles.footerContainer}>
          {links.map((link) => (
            <div key={link.href} className={styles.linkItem}>
              <Link href={link.href}>{link.name}</Link>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.footer}>Copyright © 2022 Landd</div>
    </div>
  );
};

export default Header;
