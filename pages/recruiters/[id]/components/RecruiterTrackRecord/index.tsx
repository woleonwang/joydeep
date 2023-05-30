import { Button } from 'antd';
import { formatNumber } from 'utils/helper';
import { IBasicInfo, ITrackRecords } from 'utils/type';
import styles from './style.module.scss';

interface IProps {
  trackRecords: ITrackRecords;
}
const RecruiterTrackRecord = (props: IProps) => {
  const { trackRecords } = props;
  return (
    <div>
      <div>
        <div>My Recruitment Track Record</div>
        <div>Verified by Landd</div>
      </div>
      <div>
        <div>
          <div>Total Number Of Candidates Placed</div>
          <div>{formatNumber(trackRecords.placedNumber)}</div>
        </div>
        <div>
          <div>Total Salary Of Candidates Placed</div>
          <div>${formatNumber(trackRecords.placedSalary)}</div>
        </div>
      </div>
      <div>
        <div>Recent Placements</div>
        <div>
          {trackRecords.placements.map((item, index) => (
            <div key={index}>
              <div>{item.timestamp}</div>
              <div>{item.description}</div>
              {item.isVerified && <div>Verified By Landd</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecruiterTrackRecord;
