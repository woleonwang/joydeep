/*
 * @LastEditors: wmy
 * @Description: 功能描述
 * @Date: 2022-05-03 22:51:09
 * @Author: wmy
 * @LastEditTime: 2022-06-12 01:43:43
 */

import { message } from 'antd';
import classnames from 'classnames';
import DeveloperLogginLayout from 'components/layouts/DeveloperLogginLayout';
import DeveloperSidebarLayout from 'components/layouts/DeveloperSidebarLayout';
import NextStep from 'components/NextStep';
import WSelect from 'components/WSelect';
import router from 'next/router';
import { useEffect, useState } from 'react';
import { getTransfer } from 'utils/i18n';
import request from 'utils/request';
import styles from './styles.module.scss';

const Web3 = () => {
  const [attitudeForWebThree, setAttitudeForWebThree] = useState('');
  const [experienceForWebThree, setExperienceForWebThree] = useState('');
  const [understandWebThree, setUnderstandWebThree] = useState('');
  const [reasonForWebThree, setReasonForWebThree] = useState('');
  const [locale, setLocale] = useState<'zh' | 'en'>('zh');
  const [isFinish, setIsFinish] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const data = await request.get('profile.getDetail');
    if (data.code === 0) {
      const {
        attitude_for_web_three,
        experience_for_web_three,
        understand_web_three,
        reason_for_web_three,
        meta: { finish_percent },
      } = data.data;
      setIsFinish(finish_percent === 1);
      setAttitudeForWebThree(attitude_for_web_three);
      setExperienceForWebThree(experience_for_web_three);
      setUnderstandWebThree(understand_web_three);
      setReasonForWebThree(reason_for_web_three);
    }
  };

  const updateWebThree = async () => {
    if (!canSubmit()) {
      return;
    }
    const data = await request.post('profile.updateWebThree', {
      attitude_for_web_three: attitudeForWebThree,
      understand_web_three: understandWebThree,
      experience_for_web_three: experienceForWebThree,
      reason_for_web_three: reasonForWebThree,
    });
    if (data.code === 0) {
      message.success('保存成功');
      router.push(
        isFinish ? '/developers/profile' : '/developers/profile/salary'
      );
    }
  };

  const canSubmit = () => {
    if (!attitudeForWebThree) {
      return false;
    }

    if (
      attitudeForWebThree === 'yes' &&
      !(attitudeForWebThree && experienceForWebThree && reasonForWebThree)
    ) {
      return false;
    }

    return true;
  };

  const transfer = getTransfer(locale);

  const attitudeForWebThreeQuestion = {
    question: transfer('profile.attitudeForWebThree.question'),
    options: ['yes', 'no'].map((key) => ({
      key,
      title: transfer(`profile.attitudeForWebThree.options.${key}.title`),
    })),
  };

  const understandWebThreeQuestion = {
    question: transfer('profile.understandWebThree.question'),
    options: ['yes', 'no'].map((key) => ({
      key,
      title: transfer(`profile.understandWebThree.options.${key}.title`),
    })),
  };

  const experienceForWebThreeQuestion = {
    question: transfer('profile.experienceForWebThree.question'),
    options: ['little', 'beginner', 'experience', 'expert'].map((key) => ({
      key,
      title: transfer(`profile.experienceForWebThree.options.${key}.title`),
    })),
  };

  const reasonForWebThreeQuestion = {
    question: transfer('profile.reasonForWebThree.question'),
    options: ['reason_1', 'reason_2', 'reason_3', 'reason_4'].map((key) => ({
      key,
      title: transfer(`profile.reasonForWebThree.options.${key}.title`),
    })),
  };

  return (
    <DeveloperSidebarLayout showHeader activeMenu='profile' activeKey='web3'>
      <div className={styles.header}>Web3</div>
      <div className={styles.formContainer}>
        <WSelect
          className={styles.questionContainer}
          value={attitudeForWebThree}
          onChange={(value) => setAttitudeForWebThree(value as string)}
          {...attitudeForWebThreeQuestion}
        />
        {attitudeForWebThree === 'yes' && (
          <>
            <WSelect
              className={styles.questionContainer}
              value={understandWebThree}
              onChange={(value) => setUnderstandWebThree(value as string)}
              {...understandWebThreeQuestion}
            />
            <WSelect
              className={styles.questionContainer}
              value={experienceForWebThree}
              onChange={(value) => setExperienceForWebThree(value as string)}
              {...experienceForWebThreeQuestion}
            />
            <WSelect
              className={styles.questionContainer}
              value={reasonForWebThree}
              onChange={(value) => setReasonForWebThree(value as string)}
              {...reasonForWebThreeQuestion}
            />
          </>
        )}
      </div>
      <NextStep
        isFinish={isFinish}
        disabled={!canSubmit()}
        currentStep='web3'
        onClick={updateWebThree}
      />
    </DeveloperSidebarLayout>
  );
};

Web3.layout = DeveloperLogginLayout;

export default Web3;
