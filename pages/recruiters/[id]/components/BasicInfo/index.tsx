/* eslint-disable @next/next/no-img-element */
import { Button } from 'antd';
import { ClockCircleOutlined, BankOutlined } from '@ant-design/icons';
import { IBasicInfo } from 'utils/type';
import styles from './style.module.scss';

interface IProps {
  basicInfo: IBasicInfo;
}
const BasicInfo = (props: IProps) => {
  const { basicInfo } = props;
  return (
    <div className={styles.basicInfo}>
      <div className={styles.summary}>
        <div className={styles.left}>
          <div className={styles.head}>
            <img className={styles.avatar} src={basicInfo.avatar} alt='' />
            <div className={styles.name}>
              {basicInfo.firstName + ' ' + basicInfo.lastName}
            </div>
          </div>
          <div className={styles.selfIntro}>{basicInfo.description}</div>
        </div>
        <div className={styles.right}>
          <div className={styles.row}>
            <div className={styles.icon}>
              <BankOutlined />
            </div>
            <div>
              <div className={styles.label}>Current Company</div>
              <div className={styles.content}>{basicInfo.company}</div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.icon}>
              <ClockCircleOutlined />
            </div>
            <div>
              <div className={styles.label}>Years Of Experience</div>
              <div className={styles.content}>
                {basicInfo.experiences} Years
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <Button type='primary' className={styles.btn}>
              Get in touch
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.expertiseContainer}>
        <div className={styles.shadow}></div>
        <div className={styles.expertise}>
          <div className={styles.title}>Area Of Expertise</div>
          <div className={styles.tagContainer}>
            {basicInfo.expertise.map((item, index) => (
              <div key={index} className={styles.tag}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
