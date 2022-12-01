/*
 * @Author: wmy
 * @Date: 1985-10-26 16:15:00
 * @LastEditTime: 2022-07-31 22:24:32
 * @LastEditors: wmy
 * @Description: 功能描述
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
              Landd the best talent
              <br />
              for your teams in a
              <br />
              matter of days.
            </div>
            <div className={styles.body}>
              Landd helps you build your dream team with an
              <br />
              omni-channel approach through our network of
              <br />
              experienced Landd Recruiters, Landd Partners referral
              <br />
              program and Landd Remote hiring solution. We
              <br />
              deliver to your hiring needs locally or remotely with
              <br />
              unparalleled speed.
            </div>
            <Button type='primary' className={styles.bannerButton}>
              {'Start hiring now →'}
            </Button>
          </div>
          <div className={styles.right}>
            <Image
              src='/hirerring.svg'
              width={472}
              height={472}
              alt='hirerring'
            />
          </div>
        </div>
      </div>

      <div className={classnames(styles.blockWrapper, styles.second)}>
        <div className={styles.block}>
          <div>
            <Image
              src='/for_employer.svg'
              width={100}
              height={160}
              alt='for_employer'
            />
            <div className={styles.blockTitle}>Landd Recruiters</div>
            <div className={styles.blockContent}>
              Work with the best recruiters in Singapore through our Landd
              Recruiters solution. We match you with the recruiters who have the
              most relevant expertise and resources to deliver to your jobs
              based on years of authentic recruitment data.
            </div>
            <div className={styles.learnMore}>
              <Link href='/for_recruiters'>Learn more</Link>
            </div>
          </div>
          <div>
            <Image
              src='/for_candidates.svg'
              width={100}
              height={160}
              alt='for_candidates'
            />
            <div className={styles.blockTitle}>Landd Partners</div>
            <div className={styles.blockContent}>
              Get access to hard-to-find candidates in online communities and
              private networks with our Landd Partners Network.
            </div>
            <div className={styles.learnMore}>
              <Link href='/for_parteners'>Learn more</Link>
            </div>
          </div>
          <div>
            <Image
              src='/for_recruiters.svg'
              width={100}
              height={160}
              alt='for_recruiters'
            />
            <div className={styles.blockTitle}>Landd Remote</div>
            <div className={styles.blockContent}>
              Build top-notch remote engineering teams with Landd Remote. Hire
              the best pre-vetted software engineers globally in a matter of
              days.
            </div>
            <div className={styles.learnMore}>
              <Link href='/employer'>Learn more</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.layout = UnlogginLayout;

export default Home;
