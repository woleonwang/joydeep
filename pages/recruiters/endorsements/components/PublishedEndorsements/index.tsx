/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import styles from './style.module.scss';
import { Pagination } from 'antd';
import request from 'utils/request';
import dayjs from 'dayjs';
import context from 'context/context';

import { IEndorsement, IApiEndorsement } from '../../type.d';

const PAGE_SIZE = 100;
const STATUS_APPROVE = 3;

const Endorsements = () => {
  const [endorsements, setEndorsements] = useState<IEndorsement[]>([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const { userInfo } = context.useGlobalContext();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resp = await request.get('recruiters.getEndorsements', {
      placeholder: {
        user_id: `${userInfo.userId}`,
      },
      status: STATUS_APPROVE,
      page: currentPage,
      size: PAGE_SIZE,
    });
    if (!!resp.message?.endorsements?.length) {
      setEndorsements(
        resp.message.endorsements.map((item: IApiEndorsement) => ({
          id: item.id,
          inviteId: item.invite_id,
          username: item.endorser_name,
          jobTitle: item.title,
          endorsements: item.content,
          date: dayjs(item.created_at).format('YYYY-MM-DD'),
          identity: item.identity === 1 ? 'candidate' : 'client',
        }))
      );
      setTotal((resp.message.endorsements || []).length);
    }
  };

  const columns: {
    label: string;
    key: keyof IEndorsement;
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
      render: (field) => {
        return <div className={styles.userWrapper}>{field}</div>;
      },
    },
    {
      label: 'Job title',
      key: 'jobTitle',
      width: '20%',
    },
    {
      label: 'Endorsements',
      key: 'endorsements',
      width: '30%',
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
  ];

  const visibleEndorsements = endorsements.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

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
          {visibleEndorsements.map((item, index) => {
            return (
              <div key={index} className={styles.row}>
                {columns.map((column, index) => {
                  return (
                    <div
                      key={index}
                      className={styles.bodyColumn}
                      style={{ width: column.width }}
                    >
                      {column.render?.(item[column.key], item) ||
                        item[column.key]}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.paginationWrapper}>
        {total > 0 && (
          <Pagination
            total={total}
            pageSize={PAGE_SIZE}
            current={currentPage}
            onChange={(page) => setCurrentPage(page)}
            showSizeChanger={false}
          />
        )}
      </div>
    </div>
  );
};

export default Endorsements;
