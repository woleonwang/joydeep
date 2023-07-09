import RecruiterLogginLayout from 'components/layouts/RecruiterLogginLayout';
import RecruiterSidebarLayout from 'components/layouts/RecruiterSidebarLayout';
import { useState, useEffect } from 'react';
import { Form, Input, Select, Tabs, TabsProps } from 'antd';
import styles from './style.module.scss';
import Basic from './components/Basic';
import request from 'utils/request';
import context from 'context/context';

interface IProps {
  propName: string;
}

const { useForm, Item } = Form;
const Profile = (props: IProps) => {
  const { propName } = props;

  const [state, setState] = useState();

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
      children: `Content of Tab Pane 2`,
    },
    {
      key: 'jobs',
      label: `Featured jobs`,
      children: `Content of Tab Pane 3`,
    },
    {
      key: 'resources',
      label: `Candidate resources`,
      children: `Content of Tab Pane 4`,
    },
    {
      key: 'publications',
      label: `Publications`,
      children: `Content of Tab Pane 5`,
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
