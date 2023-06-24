/* eslint-disable @next/next/no-img-element */
import { Button } from 'antd';
import classnames from 'classnames';
import { useState } from 'react';
import { formatNumber } from 'utils/helper';
import { IFeaturedJobs, IFeatureedJobItem } from 'utils/type';
import styles from './style.module.scss';

interface IProps {
  jobs: IFeaturedJobs;
}

const FeaturedJobs = (props: IProps) => {
  const { jobs } = props;

  const cards: IFeatureedJobItem[][] = [[], []];

  jobs.jobs.forEach((item, index) => cards[index % 2].push(item));

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>Featured Jobs</div>
      </div>
      <div className={styles.main}>
        {cards.map((items, index) => (
          <div key={index} className={styles.jobsCol}>
            {items.map((item, index) => (
              <div key={index} className={styles.jobsItem}>
                <div className={styles.jobTitle}>{item.title}</div>
                <div className={styles.company}>Company: {item.company}</div>
                <div className={styles.content}>{item.description}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.btnWrapper}>
        <Button type='primary' className={styles.btn}>
          Get in touch
        </Button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
