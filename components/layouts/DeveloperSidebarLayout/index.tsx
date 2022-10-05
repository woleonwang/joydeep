/*
 * @LastEditors: wmy
 * @Description: 功能描述
 * @Date: 2022-05-29 16:19:31
 * @Author: wmy
 * @LastEditTime: 2022-06-21 02:50:42
 */

import { useEffect, useState } from 'react';
import request from 'utils/request';
import Image from 'next/image';
import Sidebar from './Sidebar';
import styles from './styles.module.scss';
import Header from './Header';
import { useRouter } from 'next/router';
import { TLocale, TRole } from 'utils/type';

interface IProps {
  activeMenu: string;
  activeKey?:
    | 'english_skills'
    | 'basic'
    | 'availability'
    | 'technical_skills'
    | 'experience'
    | 'projects'
    | 'web3'
    | 'salary';
  children: React.ReactNode;
  showHeader?: boolean;
}

const DeveloperSidebarLayout = (props: IProps) => {
  const { activeMenu, activeKey, children, showHeader } = props;
  const [percent, setPercent] = useState<number>(0);
  const [avatar, setAvatar] = useState<string>('');
  const [role, setRole] = useState<TRole>('developer');
  const locale: TLocale = useRouter().query.locale === 'en' ? 'en' : 'zh';

  const isDeveloper = role === 'developer';

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const data = await request.get('profile.getDetail');
    if (data.code === 0) {
      const {
        meta: { finish_percent, role },
        avatar,
      } = data.data;
      setRole(role);
      setPercent(finish_percent * 100);
      setAvatar(avatar);
    }
  };

  return (
    <div className={styles.container}>
      {avatar && (
        <div className={styles.avatarContainer}>
          <Image src={avatar} width={32} height={32} alt='avatar' />
        </div>
      )}
      <div className={styles.left}>
        <Sidebar percent={percent} activeMenu={activeMenu} role={role} />
      </div>

      <div className={styles.right}>
        <div className={styles.innerConainer}>
          {isDeveloper && showHeader && activeKey && (
            <Header activeKey={activeKey} locale={locale} />
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default DeveloperSidebarLayout;
