import RecruiterLogginLayout from 'components/layouts/RecruiterLogginLayout';
import RecruiterSidebarLayout from 'components/layouts/RecruiterSidebarLayout';
import { useState, useEffect } from 'react';
import { Form, Tabs, TabsProps } from 'antd';
import request from 'utils/request';
import context from 'context/context';
import styles from './style.module.scss';
import PublishedEndorsements from './components/PublishedEndorsements';

const Endorsements = () => {
  const { userInfo } = context.useGlobalContext();

  const items: TabsProps['items'] = [
    {
      key: 'published',
      label: `Published endorsements`,
      children: <PublishedEndorsements />,
    },
    {
      key: 'form',
      label: `Endorsement gathering form`,
      // children: <GatheringForm />,
    },
    {
      key: 'received',
      label: `Endorsements received`,
      // children: <ReceivedEndorsements />,
    },
  ];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resp = await request.get('recruiters.profile', {
      placeholder: {
        id: `${userInfo.userId}`,
      },
    });
  };

  return (
    <RecruiterSidebarLayout activeMenu='Endorsements'>
      <div className={styles.main}>
        <Tabs
          defaultActiveKey='published'
          tabBarStyle={{ color: 'rgba(0, 0, 0, 0.4)' }}
          items={items}
        />
      </div>
    </RecruiterSidebarLayout>
  );
};

Endorsements.layout = RecruiterLogginLayout;

export default Endorsements;
