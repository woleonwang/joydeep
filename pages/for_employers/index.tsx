/*
 * @Author: wmy
 * @Date: 2022-02-19 23:36:13
 * @LastEditTime: 2022-05-02 21:39:57
 * @LastEditors: wmy
 * @Description: 功能描述
 */

import classnames from 'classnames';
import Image from 'next/image';
import HowItWork from '../../components/HowItWork';
import UnlogginLayout from '../../components/layouts/UnlogginLayout';
import styles from './style.module.scss';

const ForEmployers = () => {
  const howItWorkSteps = [
    'Tell us what roles you are hiring.',
    'We match 1-3 suitable recruiters for you.',
    'Recruiters contact you for further discussions.',
  ];

  return (
    <div>
      <div className={classnames(styles.blockWrapper, styles.banner)}>
        <div className={styles.block}>
          <div className={styles.left}>
            <div className={styles.title}>
              Find the recruiters that can deliver best candidates to your job
              openings now!
            </div>
            <div className={styles.content}>
              Landd matches your job openings with the recruiters who have the
              highest chance of delivering candidates to you in the fastest way
              based on their candidate pool and historical placement data. We
              eliminate the guesswork so every one of your roles are worked on
              by the most suitable recruiters.
            </div>
          </div>
          <div className={styles.right}>
            <Image src='/for_employer.svg' width={376} height={600} alt='' />
          </div>
        </div>
      </div>

      <div className={classnames(styles.blockWrapper)}>
        <div className={styles.block}>
          <div className={styles.left}>
            <Image src='/hirerring.svg' width={472} height={472} alt='' />
          </div>
          <div className={styles.right}>
            <div className={styles.blockTitle}>
              The most comprehensive recruiter pool in Singapore
            </div>
            <div className={styles.blockContent}>
              Landd aims to become the biggest recruiter network in Singapore so
              we can always find a recruiter for you.
            </div>
          </div>
        </div>
      </div>

      <div className={classnames(styles.blockWrapper, styles.gray)}>
        <div className={styles.block}>
          <div className={styles.left}>
            <div className={styles.blockTitle}>Data-driven matching</div>
            <div className={styles.blockContent}>
              Landd matches your jobs with the recruiters who have the highest
              chance of closing your roles based on their candidate pool and
              historical placement data.
            </div>
          </div>
          <div className={styles.right}>
            <Image src='/reports.svg' width={472} height={600} alt='' />
          </div>
        </div>
      </div>

      <div className={classnames(styles.blockWrapper)}>
        <div className={styles.block}>
          <HowItWork steps={howItWorkSteps} />
        </div>
      </div>
    </div>
  );
};

ForEmployers.layout = UnlogginLayout;

export default ForEmployers;
