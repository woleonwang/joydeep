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
              Landd aims to build
              <br />
              the biggest recruiter
              <br />
              network in Singapore
            </div>
            <div className={styles.body}>
              We use a data-driven approach to help employers
              <br />
              and candidates find the most suitable recruiters to
              <br />
              work with from Landd’s extensive recruiter network.
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
            <div className={styles.blockTitle}>For employer</div>
            <div className={styles.blockContent}>
              We match you with the recruiters that can deliver candidates to
              your roles most effectively based on their candidate pools and
              historical placement data. We eliminate the guess work so you can
              rest assured that your roles are being worked on by the most
              suitable recruiters.
            </div>
            <div className={styles.learnMore}>
              <Link href='/for_employer'>Learn more</Link>
            </div>
          </div>
          <div>
            <Image
              src='/for_candidates.svg'
              width={100}
              height={160}
              alt='for_candidates'
            />
            <div className={styles.blockTitle}>For candidates</div>
            <div className={styles.blockContent}>
              The best way to find your next dream job for any experienced
              professionals is to work with experienced recruiters in your
              industry.  Landd matches you with the most suitable recruiters
              based on the jobs they are currently working on and their
              historical placement data. No matter you are looking for a job now
              or you simply would like to understand how the market is, you can
              always find the most suitable recruiters to talk to on Landd.
            </div>
            <div className={styles.learnMore}>
              <Link href='/for_employer'>Learn more</Link>
            </div>
          </div>
          <div>
            <Image
              src='/for_recruiters.svg'
              width={100}
              height={160}
              alt='for_recruiters'
            />
            <div className={styles.blockTitle}>For recruiters</div>
            <div className={styles.blockContent}>
              Landd helps recruiters make more placements by matching candidates
              and jobs to you based on your expertise and resources.
            </div>
            <div className={styles.learnMore}>
              <Link href='/for_employer'>Learn more</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.layout = UnlogginLayout;

export default Home;
