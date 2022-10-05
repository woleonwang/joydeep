/*
 * @Author: wmy
 * @Date: 2022-02-19 23:36:13
 * @LastEditTime: 2022-05-02 21:39:51
 * @LastEditors: wmy
 * @Description: 功能描述
 */

import { Button } from 'antd';
import classnames from 'classnames';
import Image from 'next/image';
import HowItWork from 'components/HowItWork';
import UnlogginLayout from 'components/layouts/UnlogginLayout';
import styles from './style.module.scss';

const ForRecruiters = () => {
  const howItWorkSteps = [
    'Create a profile.',
    'Let us find the most suitable recruiters for you or search for a recruiter to talk to.',
    'Recruiters contact you for further discussions.',
  ];

  return (
    <div>
      <div className={classnames(styles.blockWrapper, styles.banner)}>
        <div className={styles.block}>
          <div className={styles.left}>
            <Image
              src='/for_candidates.svg'
              width={376}
              height={600}
              alt='hirerring'
            />
          </div>
          <div className={styles.right}>
            <div className={styles.title}>
              Have a confidential discussion with the right recruiters now!
            </div>
            <div className={styles.content}>
              We believe the best way to find your next dream job is through
              recruiters who are eperts in your industry. Landd matches you with
              the most suitable recruiters based on data.
            </div>
            <div className={styles.content}>
              your requirements, recruiter’s current available jobs and their
              historical placement data.  Whether you want to change job now, or
              simply want to understand how the market is, we will find the best
              recruiters for you to talk to.
            </div>
            <Button type='primary' className={styles.bannerButton}>
              {'Talk to a recruiter now →'}
            </Button>
          </div>
        </div>
      </div>

      <div className={classnames(styles.blockWrapper)}>
        <div className={styles.block}>
          <div className={styles.left}>
            <div className={styles.blockTitle}>
              The most comprehensive recruiter network in Singapore
            </div>
            <div className={styles.blockContent}>
              Landd aims to become the biggest recruiter network in Singapore so
              we can always find a recruiter for you.
            </div>
          </div>
          <div className={styles.right}>
            <Image src='/hirerring.svg' width={472} height={472} alt='' />
          </div>
        </div>
      </div>

      <div className={classnames(styles.blockWrapper, styles.gray)}>
        <div className={styles.block}>
          <div className={styles.left}>
            <Image src='/reports.svg' width={472} height={600} alt='' />
          </div>
          <div className={styles.right}>
            <div className={styles.blockTitle}>Data-driven matching</div>
            <div className={styles.blockContent}>
              We match you with the most suitable recruiters based on your
              requirements, the jobs recruiters are working on and their
              historical placement data.
            </div>
          </div>
        </div>
      </div>

      <div className={classnames(styles.blockWrapper)}>
        <div className={styles.block}>
          <div className={styles.left}>
            <div className={styles.blockTitle}>Strictly confidential</div>
            <div className={styles.blockContent}>
              Your conversation with any of our recruiters are strictly
              confidential
            </div>
          </div>
          <div className={styles.right}>
            <Image
              src='/for_candidates_3.svg'
              width={472}
              height={472}
              alt=''
            />
          </div>
        </div>
      </div>

      <div className={classnames(styles.blockWrapper, styles.gray)}>
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
            <div className={styles.blockTitle}>Easy to start</div>
            <div className={styles.blockContent}>
              We only ask a few very simple questions from you in order to match
              you with the best recruiter. There is no lengthy application forms
              to fill up.
            </div>
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

ForRecruiters.layout = UnlogginLayout;

export default ForRecruiters;
