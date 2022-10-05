/*
 * @LastEditors: wmy
 * @Description: 功能描述
 * @Date: 2022-03-27 01:47:21
 * @Author: wmy
 * @LastEditTime: 2022-03-27 02:01:59
 */

import styles from './style.module.scss';

interface IProps {
  steps: string[];
}

const HowItWork = (props: IProps) => {
  const { steps } = props;
  return (
    <div className={styles.container}>
      <div className={styles.title}>How does it work</div>
      <div className={styles.stepContainer}>
        {steps.map((step, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.itemTitle}>0{index + 1}</div>
            <div className={styles.itemContent}>{step}</div>
            {index < steps.length - 1 && <div className={styles.symbol}>{'〉'}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWork;
