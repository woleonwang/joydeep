import { Button } from 'antd';
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
            <div className={styles.avatar}>
              <img src={basicInfo.avatar} />
            </div>
            <div className={styles.name}>
              {basicInfo.firstName + ' ' + basicInfo.lastName}
            </div>
            <Button>Get in touch</Button>
          </div>
          <div className={styles.selfIntro}>{basicInfo.description}</div>
        </div>
        <div className={styles.right}>
          <div className={styles.row}>
            <div className={styles.icon}></div>
            <div>
              <div>Current Company</div>
              <div>{basicInfo.company}</div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.icon}></div>
            <div>
              <div>Years Of Experience</div>
              <div>{basicInfo.experiences} Years</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>Area Of Expertise</div>
        <div>
          {basicInfo.expertise.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
