/* eslint-disable @next/next/no-img-element */
/*
 * @Author: wmy
 * @Date: 1985-10-26 16:15:00
 * @LastEditTime: 2022-07-31 22:24:32
 * @LastEditors: wmy
 * @Description: 大首页
 */
import { Button } from 'antd';
import classnames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import UnlogginLayout from 'components/layouts/UnlogginLayout';
import styles from './style.module.scss';

const Home = () => {
  return (
    <div>
      <div className={classnames(styles.blockWrapper, styles.banner)}>
        <div className={styles.block}>
          <div className={styles.left}>
            <div className={styles.title}>
              Landd the best <span className={styles.colored}>talent</span>
              <br />
              for your teams in a
              <br />
              matter of days.
            </div>
            <div className={styles.body}>
              Landd helps you build your dream team with an omni-channel
              approach <br />
              through our network of experienced Landd Recruiters, Landd
              Partners <br />
              referral program and Landd Remote hiring solution. We deliver to
              your <br />
              hiring needs locally or remotely with unparalleled speed.
            </div>
            <Button type='primary' className={styles.bannerButton}>
              {'Start hiring now →'}
            </Button>
          </div>
          <div className={styles.right}>
            <Image
              src='/home/banner.png'
              width={508}
              height={535}
              alt='hirerring'
            />
          </div>
        </div>
      </div>

      <div className={classnames(styles.blockWrapper, styles.second)}>
        <div className={styles.block}>
          <div className={styles.secondCard}>
            <div className={styles.blockTitle}>Landd Recruiters</div>
            <div className={styles.blockContent}>
              Work with the best recruiters in Singapore through our Landd
              Recruiters solution. We match you with the recruiters who have the
              most relevant expertise and resources to deliver to your jobs
              based on years of authentic recruitment data.
            </div>
            <div className={styles.learnMore}>
              <Link href='/recruiters/for_employers'>
                <div>
                  Learn more<span className={styles.symbol}>↗</span>
                </div>
              </Link>
            </div>
            <img src='/home/card1.png' alt='for_recruiter' />
          </div>
          <div className={styles.secondCard}>
            <div className={styles.blockTitle}>Landd Partners</div>
            <div className={styles.blockContent}>
              Get access to hard-to-find candidates in online communities and
              private networks with our Landd Partners Network.
            </div>
            <div className={styles.learnMore}>
              <Link href='/partners/for_employers'>
                <div>
                  Learn more<span className={styles.symbol}>↗</span>
                </div>
              </Link>
            </div>
            <img src='/home/card2.png' alt='for_partner' />
          </div>
        </div>
      </div>
    </div>
  );
};

Home.layout = UnlogginLayout;

export default Home;
