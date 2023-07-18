import RecruiterLogginLayout from 'components/layouts/RecruiterLogginLayout';
import RecruiterSidebarLayout from 'components/layouts/RecruiterSidebarLayout';
import { useState, useEffect } from 'react';
import { Form, Tabs, TabsProps } from 'antd';
import styles from './style.module.scss';
import Basic from './components/Basic';
import request from 'utils/request';
import context from 'context/context';
import Placements from './components/Placements';
import Jobs from './components/Jobs';
import Candidates from './components/Candidates';
import Publications from './components/Publications';

const Profile = () => {
  const { userInfo } = context.useGlobalContext();

  const items: TabsProps['items'] = [
    {
      key: 'basic',
      label: `Basic Info`,
      children: <Basic />,
    },
    {
      key: 'placements',
      label: `Total career placements`,
      children: <Placements />,
    },
    {
      key: 'jobs',
      label: `Featured jobs`,
      children: <Jobs />,
    },
    {
      key: 'resources',
      label: `Candidate resources`,
      children: <Candidates />,
    },
    {
      key: 'publications',
      label: `Publications`,
      children: <Publications />,
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
    <RecruiterSidebarLayout activeMenu='profile'>
      <div className={styles.main}>
        <Tabs
          defaultActiveKey='basic'
          tabBarStyle={{ color: 'rgba(0, 0, 0, 0.4)' }}
          items={items}
        />
      </div>
    </RecruiterSidebarLayout>
  );
};

Profile.layout = RecruiterLogginLayout;

export default Profile;
