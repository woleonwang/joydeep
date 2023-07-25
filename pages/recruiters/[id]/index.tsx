/*
 * @LastEditors: wmy
 * @Description: 功能描述
 * @Date: 2022-06-21 02:30:05
 * @Author: wmy
 * @LastEditTime: 2022-06-26 19:03:50
 */

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import moment from 'moment';
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
  IRecriuterProfileApi,
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
import mockData from 'utils/mock';
import Publications from './components/Publications';
import FeaturedJobs from './components/FeaturedJobs';
import context from 'context/context';
import { defaultAvatar } from 'utils/constants';

const ProfilePrevew = () => {
  const [profile, setProfile] = useState<Partial<IRecruiterProfile>>();
  const router = useRouter();

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const { message }: { message: IRecriuterProfileApi } = await request.get(
      'recruiters.profile',
      {
        placeholder: {
          id: `${router.query.id}`,
        },
      }
    );

    if (message) {
      const { profile, candidates, jobs, placements, publications } = message;
      setProfile({
        basicInfo: {
          avatar: profile.photo ? `/api/file/${profile.photo}` : defaultAvatar,
          firstName: profile.name.split(' ').slice(0, 1).join(' '),
          lastName: profile.name.split(' ').slice(1).join(' '),
          description: profile.summary,
          company: profile.company,
          experiences: profile.years_of_expr,
          expertise: profile.expertise.split(','),
        },
        candidates: {
          isVerified: true,
          candidatesCount: profile.total_candidates,
          jobTitles: candidates.map((item) => ({
            name: item.title,
            count: Math.max(0, Math.min(100, item.percentage)),
          })),
        },
        featuredJobs: {
          jobs: jobs.map((item) => ({
            title: item.title,
            company: item.company,
            description: item.description,
          })),
        },
        publications: {
          publications: publications.map((item) => ({
            timestamp: moment(item.created_at).format('YYYY-MM-SS'),
            content: item.link,
          })),
          comments: mockData.publications.comments,
        },
        trackRecords: {
          isVerified: true,
          placedNumber: profile.total_placed_candidates,
          placedSalary: profile.total_placed_salary,
          placements: placements.map((item) => ({
            timestamp: moment(item.created_at).format('YYYY-MM-SS'),
            description: item.position,
            isVerified: true,
          })),
        },

        endorsements: mockData.endorsements,
      });
    }
  };

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
        <FeaturedJobs jobs={featuredJobs} />
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default ProfilePrevew;
