import { Button } from 'antd';
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

  const visibleItems = endorsements.endorsements
    .filter((item) => item.type === type)
    .slice(0, 6)
    .forEach((item, index) => cards[index % 3].push(item));

  return (
    <div>
      <div>
        <div>Endorsements({endorsements.total})</div>
        <div>
          <div
            onClick={() => setType('employer')}
            style={{ color: type === 'employer' ? 'red' : 'black' }}
          >
            Employer
          </div>
          <div
            onClick={() => setType('candidate')}
            style={{ color: type === 'candidate' ? 'red' : 'black' }}
          >
            Candidate
          </div>
        </div>
      </div>
      <div>
        {cards.map((items, index) => (
          <div key={index}>
            {items.map((item, index) => (
              <div key={index}>
                <div>
                  <div>{item.avatar}</div>
                  <div>
                    <div>
                      <div>{item.name}</div>
                      <div>{item.company}</div>
                    </div>
                    <div>{item.timestamp}</div>
                  </div>
                </div>
                <div>{item.content}</div>
                <div>
                  {item.name} Worked With {currentName} As A{' '}
                  {item.type === 'candidate' ? 'Candidate' : 'Employer'}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Endorsements;
