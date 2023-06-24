/*
 * @LastEditors: wmy
 * @Description: 功能描述
 * @Date: 2022-06-21 02:30:05
 * @Author: wmy
 * @LastEditTime: 2022-06-26 19:03:50
 */

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import dayjs from 'dayjs';
import request from 'utils/request';
import {
  IBasicInfo,
  ICandidate,
  IEndorsements,
  IFeaturedJobs,
  IProfile,
  IPublications,
  IRecruiterProfile,
  ITrackRecords,
  TLocale,
} from 'utils/type';
import styles from './style.module.scss';
import { getTransfer } from 'utils/i18n';
import classnames from 'classnames';
import Link from 'next/link';
import { Button, message } from 'antd';
import CopyRight from 'components/CopyRight';
import BasicInfo from './components/BasicInfo';
import { formatNumber } from 'utils/helper';
import RecruiterTrackRecord from './components/RecruiterTrackRecord';
import CandidateResources from './components/CandidateResources';
import Endorsements from './components/Endorsements';
import mockData from './mock';
import Publications from './components/Publications';

const ProfilePrevew = () => {
  const [profile, setProfile] = useState<Partial<IRecruiterProfile>>();
  const router = useRouter();

  useEffect(() => {
    // fetchData();
    setProfile(mockData);
  }, []);

  const fetchData = async () => {};

  const {
    basicInfo = {} as IBasicInfo,
    trackRecords = {} as ITrackRecords,
    candidates = {} as ICandidate,
    endorsements = {} as IEndorsements,
    publications = {} as IPublications,
    featuredJobs = {} as IFeaturedJobs,
  } = profile || {};

  return profile ? (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.inner}>
          <div>
            <Link href='/'>
              <a>
                <Image
                  src='/logo.svg'
                  width={122}
                  height={36}
                  alt='logo'
                ></Image>
              </a>
            </Link>
          </div>
          <div>
            <Button type='default' className={styles.logInBtn}>
              Recruiter Directory
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.innerContainer}>
        <BasicInfo basicInfo={basicInfo} />
        <RecruiterTrackRecord trackRecords={trackRecords} />
        <CandidateResources candidates={candidates} />
        <Endorsements endorsements={endorsements} currentName='Eric' />
        <Publications publications={publications} />
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default ProfilePrevew;
