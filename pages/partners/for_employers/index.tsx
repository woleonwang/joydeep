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
import UnlogginLayout from '../../../components/layouts/UnlogginLayout';
import styles from './style.module.scss';

const ForEmployers = () => {
  return (
    <div>
      <div className={classnames(styles.banner)}>
        <div className={styles.bannerBlock}>
          <div className={styles.bannerText}>
            <div className={styles.title}>
              Get access to hard-to-find candidates in exclusive
              <br />
              online communities and private networks.
            </div>
            <div className={styles.content}>
              Many high-quality candidates do not use job boards ever, but they
              can be found in online <br />
              communities and private networks. Landd helps companies connect
              with these hard-to-find
              <br /> candidates through
              <span className={styles.purple}> Landd Partner’s </span>Curated
              Talent Pool (CTP).
            </div>
            <Button type='primary' className={styles.bannerButton}>
              {'Start hiring now →'}
            </Button>
          </div>
          <img
            src='/home/partners/for_employers/banner.png'
            alt=''
            className={styles.bannerBg}
          />
          <img
            src='/home/partners/for_employers/line1.png'
            alt=''
            className={styles.line}
          />
        </div>
      </div>

      <div className={classnames(styles.secondBlockWrapper)}>
        <div className={styles.block}>
          <div className={styles.blockTitle}>Who are Landd Partners?</div>
          <div className={styles.blockContent}>
            <div className={styles.bannerText}>
              Landd Partners are tech writers/software engineers/
              <br />
              marketers/sales/etc and whoever has a wide reach to
              <br />
              potential candidates through their online
              <br />
              presence(social media, newsletter, chat groups, etc) or
              <br />
              their own private networks built over years.
            </div>
            <img
              src='/home/partners/for_employers/secondBlockBg.png'
              alt=''
              className={styles.blockBg}
            />
            <img
              src='/home/partners/for_employers/line2.png'
              alt=''
              className={styles.line}
            />
          </div>
        </div>
      </div>

      <div
        className={classnames(
          styles.blockWrapper,
          styles.themeBlock,
          styles.bg
        )}
      >
        <div className={styles.block}>
          <div className={styles.blockTitle}>
            What is a Curated Talent Pool (CTP)?
          </div>
          <div className={styles.blockContent}>
            A CTP is a collection of candidates curated by Landd Partners.
            Candidate usually need to meet certain criteria in order to be
            included in a CTP.
          </div>
          <img src='/home/partners/for_employers/bg3.png' alt='' />
        </div>
      </div>

      <div className={classnames(styles.blockWrapper, styles.themeBlock)}>
        <div className={classnames(styles.block, styles.center)}>
          <div className={styles.blockTitle}>
            Extra confidence on candidate quality
          </div>
          <div className={styles.blockContent}>
            Landd Partners are engineers, marketers, sales people themselves.
            When they
            <br />
            recommend a candidate, you get extra confidence on the candidate’s
            quality.
          </div>
          <img src='/home/partners/for_employers/bg4.png' alt='' />
        </div>
      </div>

      <div className={classnames(styles.blockWrapper, styles.gray)}>
        <div className={styles.block}>
          <img
            src='/home/partners/for_employers/bg5.png'
            alt=''
            style={{ width: '100%' }}
          />
        </div>
      </div>

      <div className={classnames(styles.blockWrapper, styles.howItWork)}>
        <div className={styles.block}>
          <div>
            <div className={styles.howItWorkTitle}>How does it work?</div>
            <div className={styles.stepContainer}>
              <div className={styles.item}>
                <div>
                  <div className={styles.index}>1</div>
                  <div className={styles.content}>
                    Tell Landd your hiring needs by
                    <br />
                    filling up the questionnaire
                  </div>
                </div>
              </div>
              <div className={classnames(styles.item, styles.alignRight)}>
                <div>
                  <div className={styles.index}>2</div>
                  <div className={styles.content}>
                    We work with Landd Partners to
                    <br />
                    produce a shortlist of suitable
                    <br />
                    candidates
                  </div>
                </div>
              </div>
              <div className={styles.item}>
                <div>
                  <div className={styles.index}>3</div>
                  <div className={styles.content}>
                    You interview the candidates
                  </div>
                </div>
              </div>
              <div className={classnames(styles.item, styles.alignRight)}>
                <div>
                  <div className={styles.index}>4</div>
                  <div className={styles.content}>
                    We help you negotiate the
                    <br />
                    offers and onboard the
                    <br />
                    candidates
                  </div>
                </div>
              </div>
              <img
                src='/home/partners/for_employers/line3.png'
                alt=''
                className={styles.line3}
              />
              <img
                src='/home/partners/for_employers/line4.png'
                alt=''
                className={styles.line4}
              />
              <img
                src='/home/partners/for_employers/line5.png'
                alt=''
                className={styles.line5}
              />
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
