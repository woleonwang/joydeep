import RecruiterLogginLayout from 'components/layouts/RecruiterLogginLayout';
import RecruiterSidebarLayout from 'components/layouts/RecruiterSidebarLayout';
import { useState, useEffect } from 'react';
import { Button, Tabs, TabsProps, message } from 'antd';
import styles from './style.module.scss';
import Basic from './components/Basic';
import request from 'utils/request';
import context from 'context/context';
import Placements from './components/Placements';
import Jobs from './components/Jobs';
import Candidates from './components/Candidates';
import Publications from './components/Publications';
import { IRecriuterProfileApi } from 'utils/type';
import ReactCopyToClipboard from 'react-copy-to-clipboard';
import router from 'next/router';

const Profile = () => {
  const { userInfo } = context.useGlobalContext();

  const [profile, setProfile] = useState<Partial<IRecriuterProfileApi>>({});

  const items: TabsProps['items'] = [
    {
      key: 'basic',
      label: `Basic Info`,
      children: <Basic profile={profile} />,
    },
    {
      key: 'placements',
      label: `Total career placements`,
      children: <Placements profile={profile} />,
    },
    {
      key: 'resources',
      label: `Candidate resources`,
      children: <Candidates profile={profile} />,
    },
    {
      key: 'publications',
      label: `Publications`,
      children: <Publications profile={profile} />,
    },
    {
      key: 'jobs',
      label: `Featured jobs`,
      children: <Jobs profile={profile} />,
    },
  ];

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const { message }: { message: IRecriuterProfileApi } = await request.get(
      'recruiters.profile',
      {
        placeholder: {
          id: `${userInfo.userId}`,
        },
      },
    );

    if (message) {
      setProfile(message);
    }
  };

  const profileLink = `${window.location.origin}/recruiters/${userInfo.userId}`;

  return (
    <RecruiterSidebarLayout activeMenu="profile">
      <div className={styles.profileWrapper}>
        <div className={styles.main}>
          <Tabs
            defaultActiveKey="basic"
            tabBarStyle={{ color: 'rgba(0, 0, 0, 0.4)' }}
            items={items}
          />
        </div>
        <div className={styles.buttonGroup}>
          <div>
            <div className="blackBtn" onClick={() => window.open(profileLink)}>
              Preview my profile page
            </div>
          </div>
          <div style={{ marginTop: 15 }}>
            <ReactCopyToClipboard
              key="copy"
              text={profileLink}
              onCopy={() => message.success('Copied to clicpboard')}
            >
              <div className="blackBtn">Copy page link</div>
            </ReactCopyToClipboard>
          </div>
        </div>
      </div>
    </RecruiterSidebarLayout>
  );
};

Profile.layout = RecruiterLogginLayout;

export default Profile;
