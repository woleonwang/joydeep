/*
 * @LastEditors: wmy
 * @Description: 功能描述
 * @Date: 2022-05-03 22:51:09
 * @Author: wmy
 * @LastEditTime: 2022-06-12 01:32:20
 */

import { message } from 'antd';
import DeveloperLogginLayout from 'components/layouts/DeveloperLogginLayout';
import DeveloperSidebarLayout from 'components/layouts/DeveloperSidebarLayout';
import NextStep from 'components/NextStep';
import WSelect from 'components/WSelect';
import router from 'next/router';
import { useEffect, useState } from 'react';
import { getTransfer } from 'utils/i18n';
import request from 'utils/request';
import styles from './styles.module.scss';

const EnglishSkills = () => {
  const [englishLevel, setEnglishLevel] = useState('');
  const [locale, setLocale] = useState<'zh' | 'en'>('zh');
  const [isFinish, setIsFinish] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const data = await request.get('profile.getDetail');
    if (data.code === 0) {
      setIsFinish(data.data.meta.finish_percent === 1);
      setEnglishLevel(data.data.english_level);
    }
  };

  const updateEnglishSkill = async () => {
    if (!englishLevel) {
      message.warning('请选择英语能力');
      return;
    }
    const data = await request.post('profile.updateEnglishSkills', {
      english_level: englishLevel,
    });
    if (data.code === 0) {
      message.success('保存成功');
      router.push(
        isFinish ? '/developers/profile' : '/developers/profile/basic'
      );
    }
  };

  const transfer = getTransfer(locale);

  const englishSkillQuestion = {
    question: transfer('profile.englishSkill.question'),
    options: ['not_good', 'read_write', 'normal_oral', 'good_oral'].map(
      (key) => ({
        key,
        title: transfer(`profile.englishSkill.options.${key}.title`),
        description: transfer(
          `profile.englishSkill.options.${key}.description`
        ),
      })
    ),
  };

  const localeQuestion = {
    question: transfer('profile.localeQuestion'),
    hint: transfer('profile.localeHint'),
    options: [
      {
        key: 'en',
        title: transfer('profile.localeOption_1.title'),
        description: transfer('profile.localeOption_1.description'),
      },
      {
        key: 'zh',
        title: transfer('profile.localeOption_2.title'),
        description: transfer('profile.localeOption_2.description'),
      },
    ],
  };

  return (
    <DeveloperSidebarLayout
      showHeader
      activeMenu='profile'
      activeKey='english_skills'
    >
      <div className={styles.header}>英语能力</div>
      <div className={styles.formContainer}>
        <WSelect
          className={styles.questionContainer}
          value={englishLevel}
          onChange={(value) => setEnglishLevel(value as string)}
          {...englishSkillQuestion}
        />
        {/* <WSelect
          className={styles.questionContainer}
          value={locale}
          onChange={(value) => setLocale(value as TLocale)}
          {...localeQuestion}
        /> */}
      </div>
      <NextStep
        isFinish={isFinish}
        disabled={false}
        currentStep='english_skills'
        onClick={updateEnglishSkill}
      />
    </DeveloperSidebarLayout>
  );
};

EnglishSkills.layout = DeveloperLogginLayout;

export default EnglishSkills;
