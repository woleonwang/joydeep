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

const ForPartners = () => {
  const howItWorkSteps = [
    'Sign up your account',
    'Submit your application and get approved',
    'Creating your CTP',
    'Start connecting',
  ];

  return (
    <div>
      <div className={classnames(styles.banner)}>
        <div className={styles.bannerBlock}>
          <div className={styles.left}>
            <div className={styles.title}>
              <span className={styles.header}>
                Bring great jobs to your network,
              </span>
              <br />
              get paid in the meantime.
            </div>
            <div className={styles.content}>
              Landd Partner Program enables you to introduce great job
              opportunities to candidates in your network. You get paid by
              helping them find their next dream job!
            </div>
            <Button type='primary' className={styles.bannerButton}>
              {'Join now →'}
            </Button>
          </div>
          <div className={styles.right}>
            <Image
              src='/home/partners/for_partners/banner.png'
              width={590}
              height={487}
              alt=''
            />
          </div>
        </div>
      </div>

      <div className={classnames(styles.secondBlockWrapper)}>
        <div className={styles.block}>
          <div className={styles.blockTitle}>
            Creating your own Curated Talent Pool (CTP)
          </div>
          <div className={styles.blockContent}>
            You may not have realized it, but you already have built a strong
            professional network <br />
            over the years through everyday networking or social media presence.
            Now is the time to <br />
            unearth these talent by creating your own Curated Talent Pool.
          </div>
          <img
            className={styles.profile}
            src='/home/partners/for_partners/secondBlock.png'
            alt='profile'
          />
        </div>
      </div>

      <div className={classnames(styles.blockWrapper)}>
        <div className={styles.block}>
          <div className={styles.left}>
            <Image
              src='/home/partners/for_partners/block3.png'
              width={530}
              height={952}
              alt=''
            />
          </div>
          <div className={styles.right}>
            <div className={styles.blockTitle}>
              Help your network
              <br />
              discover interesting job
              <br />
              opportunities
            </div>
            <div className={styles.blockContent}>
              We will present jobs from companies that are actively hiring to
              you. You then can help your network progress in their career by
              connecting them with those jobs that you find interesting.
            </div>
          </div>
        </div>
      </div>

      <div className={classnames(styles.blockWrapper, styles.gray)}>
        <div className={styles.block}>
          <div className={styles.left}>
            <div className={styles.blockTitle}>
              Give your network a leg-
              <br />
              up in the competitive
              <br />
              job market
            </div>
            <div className={styles.blockContent}>
              Companies value recommendations from a trusted 3rd party. You can
              help your network stand out by giving them a recommendation.
            </div>
          </div>
          <div className={styles.right}>
            <Image
              src='/home/partners/for_partners/block4.png'
              width={500}
              height={500}
              alt=''
            />
          </div>
        </div>
      </div>

      <div className={classnames(styles.blockWrapper)}>
        <div className={styles.block}>
          <div className={styles.left}>
            <Image
              src='/home/partners/for_partners/block5.png'
              width={451}
              height={472}
              alt=''
            />
          </div>
          <div className={styles.right}>
            <div className={styles.blockTitle}>
              Earn real money with no extra work
            </div>
            <div className={styles.blockContent}>
              You’ve helped interesting companies find top-quality talent, it is
              natural that you get rewarded for that. Landd Partner Program
              enables you to earn over $100K/year simply by helping your network
              which you have already built.
            </div>
          </div>
        </div>
      </div>

      <div className={classnames(styles.blockWrapper)}>
        <div className={styles.block}>
          <div className={styles.left}>
            <div className={styles.howItWorkTitle}>How does it work?</div>
            <div className={styles.stepContainer}>
              {howItWorkSteps.map((step, index) => (
                <div key={index} className={styles.item}>
                  {index + 1}.{step}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.right}>
            <Image
              src='/home/partners/for_partners/block6.png'
              width={546}
              height={371}
              alt=''
            />
          </div>
        </div>
      </div>

      <div
        className={classnames(styles.blockWrapper, styles.createProfileWrapper)}
      >
        <div className={styles.block}>
          <Button type='primary' className={styles.createButton}>
            Join now →
          </Button>
        </div>
      </div>
    </div>
  );
};

ForPartners.layout = UnlogginLayout;

export default ForPartners;
