/*
 * @Author: wmy
 * @Date: 2022-02-19 23:20:57
 * @LastEditTime: 2022-06-11 15:39:41
 * @LastEditors: wmy
 * @Description: 功能描述
 */
import Link from 'next/link';
import Image from 'next/image';
import styles from './style.module.scss';

interface LinkItem {
  name?: string;
  href?: string;
  type?: string;
}

const RecruiterHeader = () => {
  const links: LinkItem[] = [
    {
      name: 'FAQ',
      href: '/faq',
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
        <div className={styles.headerContainer}>
          {links.map((link) => (
            <div key={link.href} className={styles.linkItem}>
              <Link href={link.href as string}>{link.name}</Link>
            </div>
          ))}
          <div className={styles.splitter} />
          <Link href='/hire_now'>
            <a>
              <div className={styles.blackBtn}>Hire Developers now</div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecruiterHeader;
