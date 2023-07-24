/*
 * @LastEditors: wmy
 * @Description: 功能描述
 * @Date: 2022-06-12 00:38:03
 * @Author: wmy
 * @LastEditTime: 2022-06-26 18:53:41
 */

export type TRole = 'developer' | 'recommend';

export type TLocale = 'en' | 'zh';

export interface IProfile {
  attachment: string;
  attitude_for_night_work: string;
  attitude_for_web_three: string;
  avatar: string;
  basic_salary: number;
  bonus_max: number;
  bonus_min: number;
  certifications: { description: string }[];
  country: string;
  current_position: string;
  development_experience: number;
  educations: { degree: string; school: string; from: string; to: string }[];
  email: string;
  english_level: string;
  expect_salary_per_hour: number;
  expect_salary_per_year: number;
  experience_for_web_three: string;
  github_url: string;
  weixin: string;
  industries: { locale: string; name: string }[];
  interested_remote_work: string;
  lastest_of_night_work: string;
  linkedin_url: string;
  name: string;
  other_salary: string;
  phone: string;
  projects: {
    name: string;
    description: string;
    url: string;
    skills: string[];
  }[];
  reason_for_web_three: string;
  remote_work_experience: number;
  remote_work_location: string;
  remote_work_status: string;
  self_intro: string;
  skills: { name: string; years: number; level: string }[];
  stock: string;
  understand_web_three: string;
  works: {
    position: string;
    company: string;
    from: string;
    to: string;
    now: boolean;
    description: string;
  }[];
  worktime_per_week: number;
}

interface IBasicInfo {
  avatar: string;
  firstName: string;
  lastName: string;
  description: string;
  company: string;
  experiences: number;
  expertise: string[];
}

interface ITrackRecords {
  isVerified: boolean;
  placedNumber: number;
  placedSalary: number;
  placements: {
    timestamp: string;
    description: string;
    isVerified: boolean;
  }[];
}

interface ICandidate {
  isVerified: boolean;
  candidatesCount: number;
  jobTitles: {
    name: string;
    count: number;
  }[];
}

interface IEndorsements {
  total: number;
  endorsements: IEndorsementItem[];
}

interface IEndorsementItem {
  avatar: string;
  name: string;
  company: string;
  timestamp: string;
  content: string;
  type: 'employer' | 'candidate';
}

interface IPublications {
  publications: {
    timestamp: string;
    content: string;
  }[];
  comments: IComment[];
}

interface IFeaturedJobs {
  jobs: IFeatureedJobItem[];
}

interface IFeatureedJobItem {
  title: string;
  company: string;
  description: string;
}

interface IComment {
  avatar: string;
  name: string;
  company: string;
  content: string;
  date: string;
}
interface IRecruiterProfile {
  basicInfo: IBasicInfo;
  trackRecords: ITrackRecords;
  candidates: ICandidate;
  endorsements: IEndorsements;
  publications: IPublications;
  featuredJobs: IFeaturedJobs;
}

export interface IRecriuterProfileApi {
  user_id: number;
  profile: {
    id: number;
    user_id: number;
    name: string;
    photo: string;
    summary: string;
    company: string;
    years_of_expr: number;
    expertise: string;
    total_placed_candidates: number;
    total_placed_salary: number;
    total_candidates: number;
    created_at: string;
    updated_at: string;
  };
  placements: {
    id: number;
    user_id: number;
    date: string;
    position: string;
    company: string;
    verified: boolean;
    created_at: string;
    updated_at: string;
  }[];
  // "jobs": [],
  // "candidates": [],
  // "publications": []
}
