/* eslint-disable @next/next/no-img-element */
/*
 * @Author: wmy
 * @Date: 2022-02-19 23:36:13
 * @LastEditTime: 2022-05-02 21:39:57
 * @LastEditors: wmy
 * @Description: 功能描述
 */

import { Button } from 'antd';
import classnames from 'classnames';
import Image from 'next/image';
// import HowItWork from '../../components/HowItWork';
import UnlogginLayout from '../../../components/layouts/UnlogginLayout';
import styles from './style.module.scss';

const ForEmployers = () => {
  const howItWorkSteps = [
    'Tell us what roles you are hiring.',
    'We match 1-3 suitable recruiters for you.',
    'Recruiters contact you for further discussions.',
  ];

  return (
    <div>
      <div className={classnames(styles.banner)}>
        <div className={styles.bannerBlock}>
          <div className={styles.left}>
            <div className={styles.title}>
              Work with the best
              <br />
              recruiters in Singapore.
            </div>
            <div className={styles.content}>
              Landd connects you with the best recruiters in Singapore based on
              comprehensive recruiter data so your jobs will be worked on by the
              recruiters who have the highest chance to deliver to it fast.
            </div>
            <Button type='primary' className={styles.bannerButton}>
              {'Start hiring now →'}
            </Button>
          </div>
          <div className={styles.right}>
            <Image
              src='/home/recruiters/for_employers/banner.png'
              width={590}
              height={487}
              alt=''
            />
          </div>
        </div>
      </div>

      <div className={classnames(styles.secondBlockWrapper)}>
        <div className={styles.block}>
          <div className={styles.blockTitle}>Deep recruiter profile</div>
          <div className={styles.blockContent}>
            You get a transparent and deep understanding of our recruiters’ true
            <br />
            capabilities from our deep recruiter profile.
            <img
              className={styles.circle}
              src='/home/recruiters/for_employers/circle.png'
              alt=''
            />
            <div className={styles.profileWrapper}>
              <img
                className={styles.profile}
                src='/freelancer/profile.jpg'
                alt='profile'
              />
              <div className={styles.createProfileBtn}>
                Create your profile now
              </div>
            </div>
            <img
              className={styles.scroll}
              src='/freelancer/scroll.svg'
              alt='scroll'
            />
          </div>
        </div>
      </div>

      <div className={classnames(styles.blockWrapper, styles.gray)}>
        <div className={styles.block}>
          <div className={styles.left}>
            <Image
              src='/home/recruiters/for_employers/block1.png'
              width={495}
              height={470}
              alt=''
            />
          </div>
          <div className={styles.right}>
            <div className={styles.blockTitle}>Data-driven matching</div>
            <div className={styles.blockContent}>
              Landd matches your jobs with the recruiters who have the highest
              chance of delivering to your roles based on their candidate pool
              and historical placement data.
            </div>
          </div>
        </div>
      </div>

      <div className={classnames(styles.blockWrapper)}>
        <div className={styles.block}>
          <div className={styles.left}>
            <div className={styles.blockTitle}>Years of experience</div>
            <div className={styles.blockContent}>
              All of Landd’s recruiters have years of experience in the
              recruitment industry
            </div>
          </div>
          <div className={styles.right}>
            <Image
              src='/home/recruiters/for_employers/block2.png'
              width={550}
              height={340}
              alt=''
            />
          </div>
        </div>
      </div>

      <div className={classnames(styles.blockWrapper, styles.gray)}>
        <div className={styles.block}>
          <div className={styles.left}>
            <Image
              src='/home/recruiters/for_employers/block3.png'
              width={490}
              height={438}
              alt=''
            />
          </div>
          <div className={styles.right}>
            <div className={styles.blockTitle}>Highly motivated</div>
            <div className={styles.blockContent}>
              Landd pays an unparalleled high commission rate to our recruiters
              so they are highly motivated to deliver on your roles
            </div>
          </div>
        </div>
      </div>

      <div className={classnames(styles.blockWrapper)}>
        <div className={styles.block}>
          <div>
            <div className={styles.howItWorkTitle}>How does it work?</div>
            <div className={styles.stepContainer}>
              {howItWorkSteps.map((step, index) => (
                <div key={index} className={styles.item}>
                  {index + 1}.{step}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className={classnames(styles.blockWrapper, styles.createProfileWrapper)}
      >
        <div className={styles.block}>
          <Button type='primary' className={styles.createButton}>
            Start hiring now →
          </Button>
        </div>
      </div>
    </div>
  );
};

ForEmployers.layout = UnlogginLayout;

export default ForEmployers;
