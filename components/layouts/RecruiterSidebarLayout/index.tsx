/*
 * @LastEditors: wmy
 * @Description: 功能描述
 * @Date: 2022-05-29 16:19:31
 * @Author: wmy
 * @LastEditTime: 2022-06-21 02:50:42
 */

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Sidebar from './Sidebar';
import styles from './styles.module.scss';

interface IProps {
  activeMenu: string;
  children: React.ReactNode;
}

const RecruiterSidebarLayout = (props: IProps) => {
  const { activeMenu, children } = props;
  const [avatar, setAvatar] = useState<string>('');

  useEffect(() => {}, []);

  return (
    <div className={styles.container}>
      {avatar && (
        <div className={styles.avatarContainer}>
          <Image src={avatar} width={32} height={32} alt='avatar' />
        </div>
      )}
      <div className={styles.left}>
        <Sidebar activeMenu={activeMenu} />
      </div>

      <div className={styles.right}>
        <div className={styles.innerConainer}>{children}</div>
      </div>
    </div>
  );
};

export default RecruiterSidebarLayout;
