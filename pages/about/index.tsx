/*
 * @Author: wmy
 * @Date: 2022-02-19 23:36:13
 * @LastEditTime: 2022-05-02 20:53:31
 * @LastEditors: wmy
 * @Description: 功能描述
 */

import classnames from 'classnames';
import Image from 'next/image';
import UnlogginLayout from '../../components/layouts/UnlogginLayout';
import styles from './style.module.scss';

const About = () => {
  return (
    <div>
      <div className={classnames(styles.blockWrapper, styles.banner)}>
        <div className={styles.block}>
          <div className={styles.left}>
            <div className={styles.title}>About</div>
            <div className={styles.content}>
              Landd is a Singapore-based new generation recruitment company with
              an omni-channel approach. We help companies fulfill their local
              and remote recruitment needs.
              <br />
              <br />
              Landd is founded by experienced recruiters.
            </div>
          </div>
          <div className={styles.right}>
            <Image src='/contact.svg' width={376} height={600} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

About.layout = UnlogginLayout;

export default About;
