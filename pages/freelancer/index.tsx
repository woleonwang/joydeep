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
import UnlogginLayout from '../../components/layouts/UnlogginLayout';
import styles from './style.module.scss';

const FreeLancer = () => {
  return (
    <div>
      <div className={classnames(styles.blockWrapper, styles.banner)}>
        <div className={styles.block}>
          <div className={styles.left}>
            <div className={styles.title}>
              Create a specially-designed
              <br />
              deep recruiter profile to attract
              <br />
              more clients & candidates
            </div>
            <div className={styles.body}>
              <div>
                <span>S</span>howcase your track records
              </div>
              <div>
                <span>G</span>ather and show endorsements easily
              </div>
              <div>
                <span>D</span>isplay your candidate resources
              </div>
              <div>
                <span>A</span>ggregate your posts/publications
              </div>
            </div>
            <Button type='primary' className={styles.bannerButton}>
              {'Create your profile now →'}
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
          <div className={styles.content}>
            <div className={styles.blockTitle}>Deep recruiter profile</div>
            <div className={styles.blockContent}>
              A deep recruiter profile is your homepage where you showcase your
              expertise, resources and track records. It is where you build your
              personal brand which helps you attract more clients & candidates.
            </div>
            <div>
              <Image
                src='/for_recruiters.svg'
                width={376}
                height={600}
                alt='hirerring'
              />
            </div>
          </div>
        </div>
      </div>

      <div className={classnames(styles.blockWrapper, styles.gray)}>
        <div className={styles.block}>
          <div className={styles.left}>
            <div className={styles.blockTitle}>
              Gather <span>endorsements</span> with ease
            </div>
            <div className={styles.blockContent}>
              Asking for endorsements from a customer can be awkward. We make it
              easy for you and your customers with our simple endorsement tool.
              <br />
              You can gather and publish an endorsement into your recruiter
              profile in seconds.
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
              Get candidate & client referrals
            </div>
            <div className={styles.blockContent}>
              Clients and candidates come to Landd to find recruiters to work
              with. Once you create your deep recruiter profile, they will be
              able to find you on our directory. We will refer them to you based
              on the data on your profile.
            </div>
          </div>
        </div>
      </div>

      <div className={classnames(styles.blockWrapper, styles.gray)}>
        <div className={styles.block}>
          <div className={styles.left}>
            <div className={styles.blockTitle}>
              Join our recruiter community{' '}
            </div>
            <div className={styles.blockContent}>
              Need advice on how to manage salary negotiations? Would like to
              get industry news? Join our recruiter community and let us
              recruiters support each other.
            </div>
            <div>
              <Button>Under Construction</Button>
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
            <div className={styles.blockTitle}>Build your own business</div>
            <div className={styles.blockContent}>
              We provide a suite of tools that helps experienced recruiters
              build their own business, which means you decide where to work,
              when to work, who to work with, on what terms, and retain 90% of
              the recruitment fees paid by employers.
            </div>
            <Button>Learn more →</Button>
          </div>
        </div>
      </div>

      <div className={classnames(styles.blockWrapper)}>
        <div className={styles.block}>
          <Button>Create your profile now →</Button>
        </div>
      </div>
    </div>
  );
};

FreeLancer.layout = UnlogginLayout;

export default FreeLancer;
