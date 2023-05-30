import { Button } from 'antd';
import { formatNumber } from 'utils/helper';
import { ICandidate } from 'utils/type';
import styles from './style.module.scss';

interface IProps {
  candidates: ICandidate;
}
const CandidateResources = (props: IProps) => {
  const { candidates } = props;
  return (
    <div>
      <div>
        <div>My Candidate Resources</div>
        <div>Verified by Landd</div>
      </div>
      <div>
        <div>
          <div>Total Number Of Candidates</div>
          <div>{candidates.candidatesCount}</div>
        </div>
        <div>
          <div>
            <div>Icon</div>
            <div>Candidates Job Title</div>
          </div>
          <div>
            {candidates.jobTitles.map((item, index) => (
              <div key={index}>
                <div>{item.name}</div>
                <div>
                  {Math.round((item.count * 100) / candidates.candidatesCount)}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateResources;
