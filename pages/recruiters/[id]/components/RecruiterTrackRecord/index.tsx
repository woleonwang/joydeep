import { formatNumber } from 'utils/helper';
import { ITrackRecords } from 'utils/type';
import styles from './style.module.scss';

interface IProps {
  trackRecords: ITrackRecords;
}

const RecruiterTrackRecord = (props: IProps) => {
  const { trackRecords } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>My Recruitment Track Record</div>
        <div className={styles.hint}>Verified by Landd</div>
      </div>
      <div className={styles.main}>
        <div className={styles.summary}>
          <div className={styles.summaryBlock}>
            <div className={styles.summaryTitle}>
              Total Number Of Candidates Placed
            </div>
            <div className={styles.summaryValue}>
              {formatNumber(trackRecords.placedNumber)}
            </div>
          </div>
          <div className={styles.summaryBlock}>
            <div className={styles.summaryTitle}>
              Total Salary Of Candidates Placed
            </div>
            <div className={styles.summaryValue}>
              ${formatNumber(trackRecords.placedSalary)}
            </div>
          </div>
        </div>
        <div className={styles.placement}>
          <div className={styles.placementTitle}>Recent Placements</div>
          <div className={styles.placementContainer}>
            {trackRecords.placements.map((item, index) => (
              <div key={index} className={styles.item}>
                <div className={styles.date}>{item.timestamp}</div>
                <div className={styles.desc}>{item.description}</div>
                {item.isVerified && (
                  <div className={styles.placementHint}>Verified By Landd</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterTrackRecord;
