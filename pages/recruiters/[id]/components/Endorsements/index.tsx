/* eslint-disable @next/next/no-img-element */
import { Button } from 'antd';
import classnames from 'classnames';
import { useState } from 'react';
import { formatNumber } from 'utils/helper';
import { IEndorsementItem, IEndorsements } from 'utils/type';
import styles from './style.module.scss';

interface IProps {
  endorsements: IEndorsements;
  currentName: string;
}

const Endorsements = (props: IProps) => {
  const { endorsements, currentName } = props;
  const [type, setType] = useState<'employer' | 'candidate'>('employer');

  const cards: IEndorsementItem[][] = [[], [], []];

  endorsements.endorsements
    .filter((item) => item.type === type)
    .slice(0, 6)
    .forEach((item, index) => cards[index % 3].push(item));

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>Endorsements({endorsements.total})</div>
        <div className={styles.hint}>
          <div
            onClick={() => setType('employer')}
            className={classnames(styles.endorsementsBtn, {
              [styles.selected]: type === 'employer',
            })}
          >
            Employer
          </div>
          <div
            onClick={() => setType('candidate')}
            className={classnames(styles.endorsementsBtn, {
              [styles.selected]: type === 'candidate',
            })}
          >
            Candidate
          </div>
        </div>
      </div>
      <div className={styles.main}>
        {cards.map((items, index) => (
          <div key={index} className={styles.endorsementsCol}>
            {items.map((item, index) => (
              <div key={index} className={styles.endorsementsItem}>
                <div className={styles.header}>
                  <img src={item.avatar} alt='' className={styles.avatar} />
                  <div className={styles.info}>
                    <div className={styles.firstRow}>
                      <div className={styles.name}>{item.name}</div>
                      <div className={styles.company}>· {item.company}</div>
                    </div>
                    <div className={styles.date}>{item.timestamp}</div>
                  </div>
                </div>
                <div className={styles.content}>{item.content}</div>
                <div className={styles.hint}>
                  {item.name} Worked With {currentName} As A{' '}
                  {item.type === 'candidate' ? 'Candidate' : 'Employer'}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <div className={styles.footerBtn}>More Endorsements</div>
      </div>
    </div>
  );
};

export default Endorsements;
