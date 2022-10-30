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
              Work with the best recruiters in Singapore.
            </div>
            <div className={styles.content}>
              Landd connects you with the best recruiters in Singapore based on
              comprehensive recruiter data.
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
            <div className={styles.blockTitle}>Deep recruiter profile</div>
            <div className={styles.blockContent}>
              You get a transparent and deep understanding of our recruiters’
              true capabilities from our deep recruiter profile.
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
              chance of delivering to your roles based on their candidate pool
              and historical placement data.
            </div>
          </div>
          <div className={styles.right}>
            <Image src='/reports.svg' width={472} height={600} alt='' />
          </div>
        </div>
      </div>

      <div className={classnames(styles.blockWrapper)}>
        <div className={styles.block}>
          <div className={styles.left}>
            <Image
              src='/for_recruiters_4.svg'
              width={472}
              height={472}
              alt=''
            />
          </div>
          <div className={styles.right}>
            <div className={styles.blockTitle}>Years of experience</div>
            <div className={styles.blockContent}>
              All of Landd’s recruiters have years of experience in the
              recruitment industry
            </div>
          </div>
        </div>
      </div>

      <div className={classnames(styles.blockWrapper, styles.gray)}>
        <div className={styles.block}>
          <div className={styles.left}>
            <div className={styles.blockTitle}>Highly motivated</div>
            <div className={styles.blockContent}>
              Landd pays an unparalleled high commission rate to our recruiters
              so they are highly motivated to deliver on your roles
            </div>
          </div>
          <div className={styles.right}>
            <Image
              src='/for_recruiters_2.svg'
              width={472}
              height={600}
              alt=''
            />
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
