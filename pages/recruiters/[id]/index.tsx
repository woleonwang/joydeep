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

const mockData: IRecruiterProfile = {
  basicInfo: {
    avatar: '/logo.svg',
    firstName: 'Eric',
    lastName: 'Toh',
    description:
      'I am good at recruiting all kinds of senior talents related to art and design.I am good at recruiting all kinds of senior talents related to art and design.',
    company: 'Landd',
    experiences: 8,
    expertise: [
      'Senior Designer',
      'Art Director',
      'CDO',
      'Artist',
      'Senior Designer',
      'Art Director',
      'CDO',
      'Artist',
    ],
  },
  trackRecords: {
    isVerified: true,
    placedNumber: 5175,
    placedSalary: 600000,
    placements: [
      {
        timestamp: '2021-06-12',
        description: '(vp of Sales) for a (Seed-round) startup',
        isVerified: true,
      },
      {
        timestamp: '2021-06-12',
        description:
          'CEO for a Series A startup in the social commerce industry',
        isVerified: true,
      },
      {
        timestamp: '2021-06-12',
        description:
          'Director of SEA for a Series D startup in the logistic industry',
        isVerified: true,
      },
      {
        timestamp: '2021-06-12',
        description:
          'Product Director for a Series À startup in the social commerce industry',
        isVerified: true,
      },
      {
        timestamp: '2021-06-12',
        description:
          'Operation Director for a Series A startup in the social commerce industry',
        isVerified: true,
      },
    ],
  },
  candidates: {
    isVerified: true,
    candidatesCount: 1000,
    jobTitles: [
      {
        name: 'Product Designer',
        count: 400,
      },
      {
        name: 'Design System Manager',
        count: 320,
      },
      {
        name: 'Design Intership',
        count: 120,
      },
      {
        name: 'Sinior Visual Designer',
        count: 600,
      },
    ],
  },
  endorsements: {
    total: 188,
    endorsements: [
      {
        avatar: '/logo.svg',
        name: 'Elie Su',
        company: 'Alibaba',
        timestamp: '2020-09-08',
        content:
          'Unfiltered expert feedback in an easy to understand format. Much appreciated landd.',
        type: 'candidate',
      },
      {
        avatar: '/logo.svg',
        name: 'Dianne Russell',
        company: 'Starbucks',
        timestamp: '2020-09-08',
        content:
          'landd was amazing. Helped me answer few questions. It’s worth 15 min. And planing on re-scheduling.',
        type: 'employer',
      },
      {
        avatar: '/logo.svg',
        name: 'Floyd Miles',
        company: 'Sony',
        timestamp: '2020-09-08',
        content:
          'landd was amazing. Helped me answer few questions. It’s worth 15 min. And planing on re-scheduling.',
        type: 'candidate',
      },
      {
        avatar: '/logo.svg',
        name: 'Floyd Miles',
        company: 'Sony',
        timestamp: '2020-09-08',
        content:
          'landd was amazing. Helped me answer few questions. It’s worth 15 min. And planing on re-scheduling.',
        type: 'candidate',
      },
      {
        avatar: '/logo.svg',
        name: 'Floyd Miles',
        company: 'Sony',
        timestamp: '2020-09-08',
        content:
          'landd was amazing. Helped me answer few questions. It’s worth 15 min. And planing on re-scheduling.',
        type: 'candidate',
      },
      {
        avatar: '/logo.svg',
        name: 'Floyd Miles',
        company: 'Sony',
        timestamp: '2020-09-08',
        content:
          'landd was amazing. Helped me answer few questions. It’s worth 15 min. And planing on re-scheduling.',
        type: 'candidate',
      },
    ],
  },
  publications: {
    publications: [
      {
        timestamp: '2021-06-12',
        content:
          'Getting shoutouts on Twitter? Import them from your Twitter mentions & bookmarks to create a wall of love or testimonial slider in seconds.',
      },
      {
        timestamp: '2021-06-12',
        content: 'Managing multiple products or services? No problem!',
      },
      {
        timestamp: '2021-06-12',
        content:
          'Asking your customers for testimonials can be awkward. Make it easy for yourself and your customers with a slick form that makes sharing text or video testimonials a breeze.',
      },
      {
        timestamp: '2021-06-12',
        content:
          "You've done the hard part of collecting testimonials from customers, but they're not useful if no one sees them.",
      },
      {
        timestamp: '2021-06-12',
        content:
          "Show the world that people love you so much, they're talking about you in front of all of their friends and followers",
      },
    ],
  },
  featuredJobs: {
    jobs: [
      {
        title: 'Java developer',
        company: 'ecommerce startup',
        description: `Development and implementation of systems
      Build large scale software system
      Participate in or be responsible for the design, review and implementation of technical solutions of the team
      Performance tuning, online incidents troubleshooting, and system refactoring
      Write high-quality, clean, and maintainable code using engineering best practices

      Requirements:
      4+ years of experience in backend services development
      Strong skills in Core Java, server-side Java technologies, and the Spring ecosystem (Spring `,
      },
      {
        title: 'Java developer',
        company: 'ecommerce startup',
        description: `Development and implementation of systems
      Build large scale software system
      Participate in or be responsible for the design, review and implementation of technical solutions of the team
      Performance tuning, online incidents troubleshooting, and system refactoring
      Write high-quality, clean, and maintainable code using engineering best practices

      Requirements:
      4+ years of experience in backend services development
      Strong skills in Core Java, server-side Java technologies, and the Spring ecosystem (Spring `,
      },
    ],
  },
};

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
      <BasicInfo basicInfo={basicInfo} />
      <RecruiterTrackRecord trackRecords={trackRecords} />
      <CandidateResources candidates={candidates} />
      <Endorsements endorsements={endorsements} currentName='Eric' />
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default ProfilePrevew;
