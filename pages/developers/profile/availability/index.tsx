/*
 * @LastEditors: wmy
 * @Description: 功能描述
 * @Date: 2022-05-03 22:51:09
 * @Author: wmy
 * @LastEditTime: 2022-06-21 02:50:56
 */

import { InputNumber, message } from 'antd';
import classnames from 'classnames';
import DeveloperLogginLayout from 'components/layouts/DeveloperLogginLayout';
import DeveloperSidebarLayout from 'components/layouts/DeveloperSidebarLayout';
import NextStep from 'components/NextStep';
import WSelect from 'components/WSelect';
import router from 'next/router';
import { useEffect, useState } from 'react';
import { checkNumberExists } from 'utils/helper';
import { getTransfer } from 'utils/i18n';
import request from 'utils/request';
import { TLocale } from 'utils/type';
import styles from './styles.module.scss';

const Availability = () => {
  const [remoteJob, setRemoteJob] = useState('');
  const [interestedJob, setInterestedJob] = useState<string[]>([]);
  const [workHours, setWorkHours] = useState<number>();
  const [jobLocation, setJobLocation] = useState<string[]>([]);
  const [attitudeForNightWork, setAttitudeForNightWork] = useState<string>('');
  const [lastestTime, setLastestTime] = useState<string>('');
  const [lastestTimeInput, setLastestTimeInput] = useState<number>();
  const [locale, setLocale] = useState<TLocale>('zh');
  const [isFinish, setIsFinish] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const data = await request.get('profile.getDetail');
    if (data.code === 0) {
      const {
        remote_work_status,
        interested_remote_work,
        worktime_per_week,
        remote_work_location,
        attitude_for_night_work,
        lastest_of_night_work,
        meta: { finish_percent },
      } = data.data;
      setIsFinish(finish_percent === 1);
      remote_work_status && setRemoteJob(remote_work_status);
      interested_remote_work &&
        setInterestedJob(interested_remote_work.split(','));
      worktime_per_week && setWorkHours(worktime_per_week);
      remote_work_location &&
        setJobLocation(remote_work_location?.split(',') || []);
      attitude_for_night_work &&
        setAttitudeForNightWork(attitude_for_night_work);
      if (lastest_of_night_work) {
        setLastestTime(
          lastest_of_night_work === 'all_time' ? 'all_time' : 'specific_clock'
        );
        setLastestTimeInput(
          lastest_of_night_work === 'all_time'
            ? undefined
            : parseInt(lastest_of_night_work)
        );
      }
    }
  };

  const updateAvailability = async () => {
    if (!canSubmit()) {
      return;
    }
    const body = {
      remote_work_status: remoteJob,
      interested_remote_work: interestedJob.join(','),
      worktime_per_week: workHours,
      remote_work_location: jobLocation.join(','),
      attitude_for_night_work: attitudeForNightWork,
      lastest_of_night_work:
        attitudeForNightWork === 'accept'
          ? lastestTime === 'all_time'
            ? 'all_time'
            : lastestTimeInput
          : undefined,
    };
    const data = await request.post('profile.updateAvailability', body);
    if (data.code === 0) {
      message.success('保存成功');
      router.push(
        isFinish
          ? '/developers/profile'
          : '/developers/profile/technical_skills'
      );
    }
  };

  const transfer = getTransfer(locale);

  const remoteJobQuestion = {
    question: transfer('profile.remoteJob.question'),
    options: ['ready', 'accept', 'not_interested'].map((key) => ({
      key,
      title: transfer(`profile.remoteJob.options.${key}.title`),
      description: transfer(`profile.remoteJob.options.${key}.description`),
    })),
  };

  const interestedJobQuestion = {
    question: transfer('profile.interestedJob.question'),
    options: ['fulltime', 'parttime', 'parttime_first'].map((key) => ({
      key,
      title: transfer(`profile.interestedJob.options.${key}.title`),
      description: transfer(`profile.interestedJob.options.${key}.description`),
    })),
  };

  const jobLocationQuestion = {
    question: transfer('profile.jobLocation.question'),
    options: ['inside', 'outside'].map((key) => ({
      key,
      title: transfer(`profile.jobLocation.options.${key}.title`),
      description: transfer(`profile.jobLocation.options.${key}.description`),
    })),
  };

  const attitudeForNightWorkQuestion = {
    question: transfer('profile.attitudeForNightWork.question'),
    hint: transfer('profile.attitudeForNightWork.hint'),
    options: ['accept', 'reject'].map((key) => ({
      key,
      title: transfer(`profile.attitudeForNightWork.options.${key}.title`),
      description: transfer(
        `profile.attitudeForNightWork.options.${key}.description`
      ),
    })),
  };

  const lastestTimeQuestion = {
    question: transfer('profile.lastestTime.question'),
    options: ['all_time', 'specific_clock'].map((key) => ({
      key,
      title: transfer(`profile.lastestTime.options.${key}.title`),
      description: transfer(`profile.lastestTime.options.${key}.description`),
    })),
  };

  const canSubmit = () => {
    if (
      !(
        remoteJob &&
        interestedJob.length &&
        jobLocation.length &&
        attitudeForNightWork
      )
    ) {
      return false;
    }

    if (attitudeForNightWork == 'accept' && !lastestTime) {
      return false;
    }

    if (
      attitudeForNightWork === 'accept' &&
      lastestTime !== 'all_time' &&
      !checkNumberExists(lastestTimeInput)
    ) {
      return false;
    }

    return true;
  };

  return (
    <DeveloperSidebarLayout
      showHeader
      activeMenu='profile'
      activeKey='availability'
    >
      <div className={styles.header}>求职状态</div>
      <div className={styles.formContainer}>
        <WSelect
          className={styles.questionContainer}
          value={remoteJob}
          onChange={(value) => setRemoteJob(value as string)}
          {...remoteJobQuestion}
        />
        <WSelect
          className={styles.questionContainer}
          value={interestedJob}
          onChange={(value) => setInterestedJob(value as string[])}
          multiple
          {...interestedJobQuestion}
        />

        <div className={styles.questionContainer}>
          <div className={styles.questionTitle}>
            {transfer('profile.workHoursQuestion')}
          </div>
          <div className={styles.answer}>
            <InputNumber
              value={workHours}
              onChange={(value) => setWorkHours(value)}
              size='large'
            />
            <div className={styles.unit}>
              {transfer('profile.workHoursUnit')}
            </div>
          </div>
        </div>

        <WSelect
          className={styles.questionContainer}
          value={jobLocation}
          onChange={(value) => setJobLocation(value as string[])}
          multiple
          {...jobLocationQuestion}
        />
        <WSelect
          className={styles.questionContainer}
          value={attitudeForNightWork}
          onChange={(value) => setAttitudeForNightWork(value as string)}
          {...attitudeForNightWorkQuestion}
        />

        {attitudeForNightWork === 'accept' && (
          <WSelect
            className={styles.questionContainer}
            value={lastestTime}
            extraValue={{
              lastestTimeInput: {
                value: lastestTimeInput,
                type: 'number',
              },
            }}
            onChange={(value) => setLastestTime(value as string)}
            onExtraValueChange={(_, value) => {
              setLastestTimeInput(value as number);
            }}
            {...lastestTimeQuestion}
          />
        )}
        <NextStep
          isFinish={isFinish}
          disabled={!canSubmit()}
          currentStep='availability'
          onClick={updateAvailability}
        />
      </div>
    </DeveloperSidebarLayout>
  );
};

Availability.layout = DeveloperLogginLayout;

export default Availability;
