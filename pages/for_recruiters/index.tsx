/*
 * @Author: wmy
 * @Date: 2022-02-19 23:36:13
 * @LastEditTime: 2022-05-02 21:39:59
 * @LastEditors: wmy
 * @Description: 功能描述
 */

import { Button } from 'antd';
import classnames from 'classnames';
import Image from 'next/image';
import HowItWork from '../../components/HowItWork';
import UnlogginLayout from '../../components/layouts/UnlogginLayout';
import styles from './style.module.scss';

const ForRecruiters = () => {
  const howItWorkSteps = [
    'Create a profile.',
    'Build your profile so we know your areas of expertise.',
    'We match candidates and jobs with you.',
    'You work with employers and candidates like you normally do.',
  ];

  return (
    <div>
      <div className={classnames(styles.blockWrapper, styles.banner)}>
        <div className={styles.block}>
          <div className={styles.left}>
            <div className={styles.title}>
              Landd helps recruiters make many more placements, through data.
            </div>
            <div className={styles.body}>
              Landd matches candidates and employers with you based on their
              requirements and your strengths so you have a constant stream of
              candidates to work with and jobs to work on.
            </div>
            {/* <div className={styles.content}>
              Landd provides the most efficient way to connect with the suitable
              recruiters for employers and candidates. There is a constant
              stream of employers and candidates come to Landd to find
              recruiters to work with. We will match them with you based on
              their requirements and your strengths so you can make more
              placements.
            </div>
            <div className={styles.content}>
              Landd aims to become the largest recruiter network in Singapore.
              There is a constant stream of employers and candidates come to
              Landd to find recruiters to work with. We will match them with you
              based on their requirements and your strengths so you can make
              more placements.
            </div> */}
            <Button type='primary' className={styles.bannerButton}>
              {'Create your recruiter profile now →'}
            </Button>
          </div>
          <div className={styles.right}>
            <Image
              src='/for_recruiters.svg'
              width={376}
              height={600}
              alt='hirerring'
            />
          </div>
        </div>
      </div>

      <div className={classnames(styles.blockWrapper)}>
        <div className={styles.block}>
          <div className={styles.left}>
            <Image
              src='/for_recruiters_1.svg'
              width={472}
              height={472}
              alt=''
            />
          </div>
          <div className={styles.right}>
            <div className={styles.blockTitle}>Let candidates find you</div>
            <div className={styles.blockContent}>
              Candidates actually love to work with good recruiters. We help
              candidates find you by matching them with you based on your areas
              of expertise and jobs you are working on.
            </div>
          </div>
        </div>
      </div>

      <div className={classnames(styles.blockWrapper, styles.gray)}>
        <div className={styles.block}>
          <div className={styles.left}>
            <div className={styles.blockTitle}>
              Get access to jobs from top employers
            </div>
            <div className={styles.blockContent}>
              Many employers come to Landd to look for recruiters to work with.
              Landd match their jobs based on your candidate pool and historical
              placement data so you have the highest chance of making a
              placement.
            </div>
          </div>
          <div className={styles.right}>
            <Image
              src='/for_recruiters_3.svg'
              width={472}
              height={472}
              alt=''
            />
          </div>
        </div>
      </div>

      <div className={classnames(styles.blockWrapper)}>
        <div className={styles.block}>
          <div className={styles.left}>
            <Image
              src='/for_recruiters_2.svg'
              width={472}
              height={472}
              alt=''
            />
          </div>
          <div className={styles.right}>
            <div className={styles.blockTitle}>Build your own brand</div>
            <div className={styles.blockContent}>
              Build your personal brand on Landd so your clients and candidates
              always remember you.
            </div>
          </div>
        </div>
      </div>

      <div className={classnames(styles.blockWrapper, styles.gray)}>
        <div className={styles.block}>
          <div className={styles.left}>
            <div className={styles.blockTitle}>You own your data</div>
            <div className={styles.blockContent}>
              All the data you upload on Landd are yours forever. No one else
              (including Landd) is able to use your data. Even when you change
              companies in the future or become an in-house recruiter, you can
              still use the data stored here.
            </div>
          </div>
          <div className={styles.right}>
            <Image src='/reports.svg' width={472} height={472} alt='' />
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
            <div className={styles.blockTitle}>Easy to sign up</div>
            <div className={styles.blockContent}>
              Only a Linkedin-like recruiter profile is needed to start. No
              other commitment needed.
            </div>
          </div>
        </div>
      </div>

      <div className={classnames(styles.blockWrapper, styles.gray)}>
        <div className={styles.block}>
          <div className={styles.left}>
            <div className={styles.blockTitle}>Free to use</div>
            <div className={styles.blockContent}>
              Landd is completely free to use at the moment for early users. We
              will implement a fee structure which will be result-based in the
              future. We will let you know in advance when this happens.
            </div>
          </div>
          <div className={styles.right}>
            <Image
              src='/for_recruiters_5.svg'
              width={472}
              height={472}
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

      <div className={classnames(styles.blockWrapper)}>
        <div className={styles.block}>
          <Button
            type='primary'
            className={classnames(styles.bannerButton, styles.footer)}
          >
            {'Create your recruiter profile now →'}
          </Button>
        </div>
      </div>
    </div>
  );
};

ForRecruiters.layout = UnlogginLayout;

export default ForRecruiters;
