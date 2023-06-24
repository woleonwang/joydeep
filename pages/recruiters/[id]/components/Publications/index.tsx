/* eslint-disable @next/next/no-img-element */
import { IComment, IPublications } from 'utils/type';
import styles from './style.module.scss';

interface IProps {
  publications: IPublications;
}

const Publications = (props: IProps) => {
  const { publications } = props;

  const cards: IComment[][] = [[], [], []];

  publications.comments.forEach((item, index) => cards[index % 3].push(item));

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>My Publications</div>
      </div>
      <div className={styles.main}>
        {publications.publications.map((item, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.date}>{item.timestamp}</div>
            <div className={styles.desc}>{item.content}</div>
          </div>
        ))}
      </div>

      <div className={styles.cardWrapper}>
        {cards.map((items, index) => (
          <div key={index} className={styles.commentsCol}>
            {items.map((item, index) => (
              <div key={index} className={styles.commentsItem}>
                <div className={styles.header}>
                  <img src={item.avatar} alt='' className={styles.avatar} />
                  <div className={styles.info}>
                    <div className={styles.firstRow}>
                      <div className={styles.name}>{item.name}</div>
                    </div>
                    <div className={styles.company}>@{item.company}</div>
                  </div>
                </div>
                <div className={styles.content}>{item.content}</div>
                <div className={styles.hint}>{item.date}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
