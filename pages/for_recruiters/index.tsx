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
    'Apply to join Landd',
    'Get approved',
    'Start making placements',
  ];

  return (
    <div>
      <div className={classnames(styles.blockWrapper, styles.banner)}>
        <div className={styles.block}>
          <div className={styles.left}>
            <div className={styles.title}>
              We help recruiters build their own business.
            </div>
            <div className={styles.body}>
              A big shout out to all the experienced recruiters out there: you
              do not have to work for a legacy recruitment agency! Landd
              provides everything an experienced recruiter needs, from personal
              branding to client acquisition, from admin support to software, to
              build your own business.
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
              {'Join us now →'}
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
            <div className={styles.blockTitle}>
              Build your personal recruiter brand
            </div>
            <div className={styles.blockContent}>
              Build your personal recruiter brand through our custom-designed
              recruiter profile page which showcases your expertise, track
              records, candidate/client resources and endorsements so clients
              and candidates can find you quickly and remember you.
            </div>
          </div>
        </div>
      </div>

      <div className={classnames(styles.blockWrapper, styles.gray)}>
        <div className={styles.block}>
          <div className={styles.left}>
            <div className={styles.blockTitle}>
              Retain 90% of recruitment fees
            </div>
            <div className={styles.blockContent}>
              A legacy recruitment agency typically only pays out 20%-40% of
              recruitment fees collected from a client to a recruiter, though it
              is the recruiter that did most of the job. At Landd, we pay out up
              to 90% of all the fees to recruiters because we believe you
              deserve it.
            </div>
          </div>
          <div className={styles.right}>
            <Image
              src='/for_recruiters_2.svg'
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
              src='/for_recruiters_3.svg'
              width={472}
              height={472}
              alt=''
            />
          </div>
          <div className={styles.right}>
            <div className={styles.blockTitle}>
              Connect with clients and candidates, based on data
            </div>
            <div className={styles.blockContent}>
              Landd connects you with clients and candidates constantly based on
              your expertise so you always work on jobs/with candidates that
              have the highest chance to result in a placement.
            </div>
          </div>
        </div>
      </div>

      <div className={classnames(styles.blockWrapper, styles.gray)}>
        <div className={styles.block}>
          <div className={styles.left}>
            <div className={styles.blockTitle}>Own your data</div>
            <div className={styles.blockContent}>
              Your data are yours. Be it candidate or client data, it belongs to
              you forever. Even if you leave Landd one day, you can still access
              those data anytime. Landd will not use those data in anyway
              without your consent.
            </div>
          </div>
          <div className={styles.right}>
            <Image
              src='/for_recruiters_4.svg'
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
              src='/for_recruiters_5.svg'
              width={472}
              height={472}
              alt=''
            />
          </div>
          <div className={styles.right}>
            <div className={styles.blockTitle}>Admin support</div>
            <div className={styles.blockContent}>
              You do not need to worry about admin chores such as applying for a
              recruitment licence, etc. We do the heavy-lifting so you can focus
              on what matters most: recruitment.
            </div>
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
            {'Join now →'}
          </Button>
        </div>
      </div>
    </div>
  );
};

ForRecruiters.layout = UnlogginLayout;

export default ForRecruiters;
