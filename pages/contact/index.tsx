/*
 * @Author: wmy
 * @Date: 2022-02-19 23:36:13
 * @LastEditTime: 2022-05-02 20:53:31
 * @LastEditors: wmy
 * @Description: 功能描述
 */

import { Button } from 'antd';
import classnames from 'classnames';
import Image from 'next/image';
import HowItWork from '../../components/HowItWork';
import UnlogginLayout from '../../components/layouts/UnlogginLayout';
import styles from './style.module.scss';

const ForEmployers = () => {
  return (
    <div>
      <div className={classnames(styles.blockWrapper, styles.banner)}>
        <div className={styles.block}>
          <div className={styles.left}>
            <div className={styles.title}>Contact</div>
            <div className={styles.content}>
              Landd aims to become the biggest recruiter network in Singapore so
              that anyone, be it in-house recruitment teams who are looking to
              hire or candidates who are looking to find their next dream job
              can find the most suitable recruiters to work with. Landd is
              founded by a team of experienced recruiters based in Singapore.
            </div>
            <Button type='primary' className={styles.bannerButton}>
              {'Contact →'}
            </Button>
          </div>
          <div className={styles.right}>
            <Image src='/contact.svg' width={376} height={600} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

ForEmployers.layout = UnlogginLayout;

export default ForEmployers;
