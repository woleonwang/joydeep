/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import styles from './style.module.scss';
import { Pagination } from 'antd';

export interface IEndorsement {
  id: string;
  username: string;
  jobTitle: string;
  endorsements: string;
  date: string;
  identity: 'candidate' | 'client';
  avatar: string;
}

const mockData: IEndorsement[] = [
  {
    id: '#01',
    username: 'Kate Morrison',
    jobTitle: 'Project manager',
    endorsements:
      'Jacky is a great and efficient recruiter. He helped me to negotiate for a good remuneration package and he delivered it. He successfully secured the role as per my expected package.',
    date: '2015-08-18',
    identity: 'candidate',
    avatar: '/logo.svg',
  },
  {
    id: '#02',
    username: 'Koray Okumus',
    jobTitle: 'Senior Designer',
    endorsements:
      'The time when I was looking for a career move to find the place that suites my wish list for my career advancement and growth, Jacky came to rescue. I was really impressed by his knowledge on my profession (UX Design). It seems like he already knew the kind of challenges I was facing and what would the best place for me to work on my next job. It became easy to have my trust on him, because of his in-depth research of the job market and sharing with me the job positions that really mattered to me. I am sure, if I will ever need a help again, he will probably be my fist point of contact. Wish him good luck.',
    date: '2016-02-02',
    identity: 'client',
    avatar: '/logo.svg',
  },
];

const ReceivedEndorsements = () => {
  const [endorsements, setEndorsements] = useState<IEndorsement[]>([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setEndorsements(mockData);
    setTotal(100);
  }, []);

  const columns: {
    label: string;
    key?: keyof IEndorsement;
    width: string;
    render?: (field: any, record: IEndorsement) => React.ReactElement;
  }[] = [
    {
      label: 'Order ID',
      key: 'id',
      width: '10%',
    },
    {
      label: 'User',
      key: 'username',
      width: '20%',
      render: (field, record) => {
        return (
          <div className={styles.userWrapper}>
            <img alt='' className={styles.avatar} src={record.avatar} />
            {field}
          </div>
        );
      },
    },
    {
      label: 'Job title',
      key: 'jobTitle',
      width: '15%',
    },
    {
      label: 'Endorsements',
      key: 'endorsements',
      width: '25%',
    },
    {
      label: 'Date',
      key: 'date',
      width: '10%',
    },
    {
      label: 'Identity',
      key: 'identity',
      width: '10%',
      render: (field) => {
        return (
          <div>
            <div className={styles[field]}>{field}</div>
          </div>
        );
      },
    },
    {
      label: 'Operate',
      width: '10%',
      render: () => {
        return (
          <div>
            <div>Approve</div>
            <div>Decline</div>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <div></div>
      <div className={styles.table}>
        <div className={styles.header}>
          {columns.map((item, index) => {
            return (
              <div
                key={index}
                className={styles.headerColumn}
                style={{ width: item.width }}
              >
                {item.label}
              </div>
            );
          })}
        </div>
        <div className={styles.body}>
          {endorsements.map((item, index) => {
            return (
              <div key={index} className={styles.row}>
                {columns.map((column, index) => {
                  return (
                    <div
                      key={index}
                      className={styles.bodyColumn}
                      style={{ width: column.width }}
                    >
                      {column.render?.(column.key && item[column.key], item) ||
                        (column.key && item[column.key])}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.paginationWrapper}>
        <Pagination
          total={total}
          pageSize={10}
          current={currentPage}
          onChange={(page) => setCurrentPage(page)}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default ReceivedEndorsements;
