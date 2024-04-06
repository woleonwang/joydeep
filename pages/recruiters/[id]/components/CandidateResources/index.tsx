/* eslint-disable @next/next/no-img-element */
import { formatNumber } from 'utils/helper';
import { ICandidate } from 'utils/type';
import styles from './style.module.scss';
import { Chart, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
Chart.register(ArcElement);
interface IProps {
  candidates: ICandidate;
}
const CandidateResources = (props: IProps) => {
  const { candidates } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>My Candidate Resources</div>
        {/* <div className={styles.hint}>Verified by Landd</div> */}
      </div>
      <div className={styles.main}>
        <div className={styles.left}>
          <div>
            <div className={styles.leftTitle}>Total Number Of Candidates</div>
            <div className={styles.leftValue}>
              {formatNumber(candidates.candidatesCount)}
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightTitleWrapper}>
            <img
              src="/recruiter/profile/track-icon.png"
              alt="icon"
              className={styles.rightTitleIcon}
            />
            <div className={styles.rightTitle}>Candidates Job Title</div>
          </div>
          <div className={styles.cardContainer}>
            {candidates.jobTitles.map((item, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardTitle}>{item.name}</div>
                <div className={styles.cardChart}>
                  <div className={styles.cardText}>
                    {Math.round(item.count)}%
                  </div>
                  <Doughnut
                    data={{
                      datasets: [
                        {
                          data: [item.count, 100 - item.count],
                          backgroundColor: [
                            'rgba(0, 122, 255, 1)',
                            'rgba(241, 241, 241, 1)',
                          ],
                          rotation: 90,
                        },
                      ],
                    }}
                  />
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
