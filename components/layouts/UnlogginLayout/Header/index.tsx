/*
 * @Author: wmy
 * @Date: 2022-02-19 23:20:57
 * @LastEditTime: 2022-07-31 22:31:17
 * @LastEditors: wmy
 * @Description: 功能描述
 */
import { Button, Dropdown, Menu, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Image from 'next/image';
import styles from './style.module.scss';

const Header = () => {
  const links = [
    {
      name: 'Landd recruiter',
      key: 'recruiter',
      children: [
        {
          name: 'For Recruiters',
          href: '/recruiters/for_recruiters',
        },
        {
          name: 'For Employers',
          href: '/recruiters/for_employers',
        },
        // {
        //   name: 'Landd Remote',
        //   href: '/employer',
        // },
      ],
    },
    {
      name: 'Landd partner',
      key: 'parter',
      children: [
        {
          name: 'For Partners',
          href: '/partners/for_partners',
        },
        {
          name: 'For Employers',
          href: '/partners/for_employers',
        },
        // {
        //   name: 'Landd Remote',
        //   href: '/employer',
        // },
      ],
    },
    // {
    //   name: 'FAQ',
    //   href: '/for_recruiters/faq',
    // },
    // {
    //   name: 'About',
    //   href: '/about',
    // },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div>
          <Link href='/'>
            <a>
              <Image src='/logo.svg' width={122} height={36} alt='logo'></Image>
            </a>
          </Link>
        </div>
        <div className={styles.headerContainer}>
          {links.map((link) => {
            // if (link.href) {
            //   return (
            //     <div key={link.href} className={styles.linkItem}>
            //       <Link href={link.href}>{link.name}</Link>
            //     </div>
            //   );
            // } else if (link.children) {
            return (
              <div key={link.key} className={styles.linkItem}>
                <Dropdown
                  overlay={
                    <Menu
                      items={link.children.map((item) => ({
                        key: item.name,
                        label: <a href={item.href}>{item.name}</a>,
                      }))}
                    />
                  }
                >
                  <a>
                    <Space>
                      {link.name}
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </div>
            );
            // }
          })}
        </div>
        <div>
          <Link href='/recruiters/sign_up'>
            <Button type='primary' className={styles.signUpBtn}>
              Start hiring now →
            </Button>
          </Link>

          <Link href='/contact'>
            <Button type='default' className={styles.logInBtn}>
              Contact us →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
