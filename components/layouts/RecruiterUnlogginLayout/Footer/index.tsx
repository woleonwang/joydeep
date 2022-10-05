/*
 * @Author: wmy
 * @Date: 2022-02-19 23:20:57
 * @LastEditTime: 2022-05-15 20:28:42
 * @LastEditors: wmy
 * @Description: 功能描述
 */
import Link from 'next/link';
import Image from 'next/image';
import styles from './style.module.scss';

const Header = () => {
  const links = [
    {
      name: 'FAQ',
      href: '/faq',
    },
    {
      name: 'Hire Developers now',
      href: '/hire_now',
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
