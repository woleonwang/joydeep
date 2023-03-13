/* eslint-disable @next/next/no-img-element */
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
        <div className={styles.innerBlock}>
          <img
            className={styles.bannerImg}
            src='/freelancer/banner.png'
            alt='hirerring'
          />
          <img
            className={styles.bannerStar}
            src='/freelancer/star.svg'
            alt='star'
          />
          <img
            className={styles.bannerLine}
            src='/freelancer/line.svg'
            alt='line'
          />
          <img
            className={styles.bannerFree}
            src='/freelancer/free.svg'
            alt='free'
          />
          <div className={styles.text}>
            <div className={styles.title}>
              Create a specially-designed
              <br />
              deep recruiter profile to attract
              <br />
              more clients & candidates
            </div>
            <div className={styles.body}>
              <div className={styles.line}>
                <img
                  className={styles.bannerArrow}
                  src='/freelancer/arrow.svg'
                  alt='arrow'
                />
                <span className={styles.firstLetter}>S</span>howcase your track
                records
              </div>
              <div className={styles.line}>
                <img
                  className={styles.bannerArrow}
                  src='/freelancer/arrow.svg'
                  alt='arrow'
                />
                <span className={styles.firstLetter}>G</span>ather and show
                endorsements easily
              </div>
              <div className={styles.line}>
                <img
                  className={styles.bannerArrow}
                  src='/freelancer/arrow.svg'
                  alt='arrow'
                />
                <span className={styles.firstLetter}>D</span>isplay your
                candidate resources
              </div>
              <div className={styles.line}>
                <img
                  className={styles.bannerArrow}
                  src='/freelancer/arrow.svg'
                  alt='arrow'
                />
                <span className={styles.firstLetter}>A</span>ggregate your
                posts/publications
              </div>
            </div>
            <Button type='primary' className={styles.bannerButton}>
              {'Create your profile now →'}
            </Button>
          </div>
        </div>
      </div>

      <div className={classnames(styles.blockWrapper, styles.profileBlock)}>
        <div className={styles.block}>
          <div className={styles.content}>
            <div className={styles.blockTitle}>Deep recruiter profile</div>
            <div className={styles.blockContent}>
              <img
                className={styles.profileCircle}
                src='/freelancer/profileCircle.svg'
                alt='circle'
              />
              <div>
                A deep recruiter profile is your homepage where you showcase
                your expertise,
                <br />
                resources and track records. It is where you build your personal
                brand which
                <br /> helps you attract more clients & candidates.
              </div>
            </div>
            <div className={styles.profileWrapper}>
              <img
                className={styles.profile}
                src='/freelancer/profile.jpg'
                alt='profile'
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className={classnames(styles.blockWrapper, styles.endorsementWrapper)}
      >
        <div className={styles.block}>
          <div>
            <div className={styles.blockTitle}>
              Gather <span className={styles.blue}>endorsements</span>
              <br /> with ease
            </div>
            <div className={styles.blockContent}>
              Asking for endorsements from a customer can be awkward. We make it
              easy for you and your customers with our simple endorsement tool.
              <br />
              <br />
              You can gather and publish an endorsement into your recruiter
              profile in seconds.
            </div>
          </div>
          <img
            className={styles.endorsementImg}
            src='/freelancer/endorsements.svg'
            alt='endorsements'
          />
          <img
            className={styles.endorsementSymbol1Img}
            src='/freelancer/endorsementsSymbol-1.svg'
            alt='endorsements1'
          />
          <img
            className={styles.endorsementSymbol2Img}
            src='/freelancer/endorsementsSymbol-2.svg'
            alt='endorsements2'
          />
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
