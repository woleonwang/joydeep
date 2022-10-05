/*
 * @LastEditors: wmy
 * @Description: 功能描述
 * @Date: 2022-05-15 22:25:02
 * @Author: wmy
 * @LastEditTime: 2022-06-12 21:10:56
 */

import { getTransfer } from './i18n';

const transfer = getTransfer('en');

const getText = (key: string) => transfer(`signup.jobOptions.${key}`);
export const JobPositionOptions = [
  'frontend',
  'backend',
  'smart_contract',
  'blockchain',
  'fullstack_fe',
  'fullstack_be',
  'mobile',
  'qa',
  'qa_dev',
  'devops',
  'data_scientist',
  'data_engineer',
  'machine_learning',
  'cloud_architect',
  'architect',
  'safety',
  'network',
  'system',
  'game',
  'others',
].map((key) => ({
  label: getText(key),
  value: key,
}));

const getRoleText = (key: string) => transfer(`signup.roleOptions.${key}`);
export const PositionOptions = [
  {
    label: getRoleText('founder'),
    value: 'founder',
  },
  {
    label: getRoleText('senior_manager'),
    value: 'senior_manager',
  },
  {
    label: getRoleText('manager'),
    value: 'manager',
  },
  {
    label: getRoleText('hr'),
    value: 'hr',
  },
  {
    label: getRoleText('others'),
    value: 'others',
  },
];

export const StaffCountOptions = [
  {
    label: '1-10',
    value: '1_10',
  },
  {
    label: '11-50',
    value: '11_50',
  },
  {
    label: '51-100',
    value: '51_100',
  },
  {
    label: '101-250',
    value: '101_250',
  },
  {
    label: '251-500',
    value: '251_500',
  },
  {
    label: '501-1000',
    value: '501_1000',
  },
  {
    label: '1001-5000',
    value: '1001_5000',
  },
  {
    label: '5001-10000',
    value: '5001_10000',
  },
  {
    label: '10000+',
    value: 'gt_10000',
  },
];

export const HeadcountOptions = [
  {
    label: '1-10',
    value: '1_10',
  },
  {
    label: '11-20',
    value: '11_20',
  },
  {
    label: '21-30',
    value: '21_30',
  },
  {
    label: '31-40',
    value: '31_40',
  },
  {
    label: '41-50',
    value: '41_50',
  },
  {
    label: '50+',
    value: 'gt_50',
  },
];
