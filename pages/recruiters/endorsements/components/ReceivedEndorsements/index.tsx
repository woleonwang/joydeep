/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { Pagination, message } from 'antd';
import dayjs from 'dayjs';
import context from 'context/context';
import request from 'utils/request';

import styles from './style.module.scss';

import { IApiEndorsement, IEndorsement } from '../../type.d';
import { ENDORSEMENT_STATUS } from 'utils/constants';
import { isRespSucceed } from 'utils/helper';

const PAGE_SIZE = 100;
const STATUS_APPROVE = 2;

const ReceivedEndorsements = () => {
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

  const handleItem = async (
    item: IEndorsement,
    action: 'approve' | 'decline'
  ) => {
    const resp = await request.post('recruiters.updateEndorsement', {
      user_id: userInfo.userId,
      invite_id: item.inviteId,
      status:
        action === 'approve'
          ? ENDORSEMENT_STATUS.approved
          : ENDORSEMENT_STATUS.declined,
    });

    if (isRespSucceed(resp)) {
      message.success('Operation succeed');
      fetchData();
    } else {
      message.error('Operation failed');
    }
  };

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
      render: (_, record: IEndorsement) => {
        return (
          <div>
            <div
              className={styles.approve}
              onClick={() => handleItem(record, 'approve')}
            >
              Approve
            </div>
            <div
              className={styles.decline}
              onClick={() => handleItem(record, 'decline')}
            >
              Decline
            </div>
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
        {!!visibleEndorsements.length && (
          <Pagination
            total={total}
            pageSize={10}
            current={currentPage}
            onChange={(page) => setCurrentPage(page)}
            showSizeChanger={false}
          />
        )}
      </div>
    </div>
  );
};

export default ReceivedEndorsements;
