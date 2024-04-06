import RecruiterLogginLayout from 'components/layouts/RecruiterLogginLayout';
import RecruiterSidebarLayout from 'components/layouts/RecruiterSidebarLayout';
import { useEffect } from 'react';
import { Tabs, TabsProps } from 'antd';
import request from 'utils/request';
import context from 'context/context';
import styles from './style.module.scss';
import PublishedEndorsements from './components/PublishedEndorsements';
import GatheringForm from './components/GatheringForm';
import ReceivedEndorsements from './components/ReceivedEndorsements';

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
      children: <GatheringForm />,
    },
    {
      key: 'received',
      label: `Endorsements received`,
      children: <ReceivedEndorsements />,
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
    <RecruiterSidebarLayout activeMenu="endorsements">
      <div className={styles.main}>
        <Tabs
          defaultActiveKey="published"
          tabBarStyle={{ color: 'rgba(0, 0, 0, 0.4)' }}
          items={items}
        />
      </div>
    </RecruiterSidebarLayout>
  );
};

Endorsements.layout = RecruiterLogginLayout;

export default Endorsements;
