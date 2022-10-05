/*
 * @LastEditors: wmy
 * @Description: 功能描述
 * @Date: 2022-05-04 17:51:58
 * @Author: wmy
 * @LastEditTime: 2022-06-21 02:51:47
 */

import { Input, InputNumber, message, Select } from 'antd';
import classnames from 'classnames';
import { useEffect, useState } from 'react';
import {
  DeleteOutlined,
  CheckOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import { getTransfer } from 'utils/i18n';
import { JobPositionOptions } from 'utils/options';
import request from 'utils/request';
import styles from './styles.module.scss';
import DeveloperSidebarLayout from 'components/layouts/DeveloperSidebarLayout';
import DeveloperLogginLayout from 'components/layouts/DeveloperLogginLayout';
import router from 'next/router';
import { checkNumberExists } from 'utils/helper';
import NextStep from 'components/NextStep';
import { TLocale } from 'utils/type';

interface ISkill {
  name: string;
  years: number | undefined;
  level: '' | 'beginner' | 'experienced' | 'expert';
  key: string;
}

const TechnicalSkills = () => {
  const [currentPosition, setCurrentPosition] = useState('');
  const [technicalSkills, setTechnicalSkills] = useState<ISkill[]>([]);
  const [industries, setIndustries] = useState<string[]>([]);
  const [isAddIndustry, setIsAddIndustry] = useState<boolean>(false);
  const [newIndustry, setNewIndustry] = useState<string>('');
  const [locale, setLocale] = useState<TLocale>('zh');
  const [isFinish, setIsFinish] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const data = await request.get('profile.getDetail', {
      locale,
    });
    if (data.code === 0) {
      const {
        current_position,
        skills,
        industries,
        meta: { finish_percent },
      } = data.data;
      setIsFinish(finish_percent === 1);
      current_position && setCurrentPosition(current_position);
      if (skills.length > 0) {
        setTechnicalSkills(
          skills.map((skill: object) => ({
            ...skill,
            key: Math.random(),
          }))
        );
      } else {
        addTechnicalSkill();
      }
      industries.length &&
        setIndustries(
          industries.map((industry: { name: string }) => industry.name)
        );
    }
  };

  const updateData = async () => {
    if (!canSubmit()) {
      return;
    }

    const body = {
      current_position: currentPosition,
      skills: technicalSkills.map((skill) => ({
        name: skill.name,
        years: skill.years,
        level: skill.level,
      })),
      industries,
      locale,
    };
    const data = await request.post('profile.updateTechnicalSkills', body);
    if (data.code === 0) {
      message.success('保存成功');
      router.push(
        isFinish ? '/developers/profile' : '/developers/profile/experience'
      );
    }
  };

  const transfer = getTransfer(locale);

  const skillLevelOptions = ['beginner', 'experienced', 'expert'].map(
    (key) => ({
      label: (
        <>
          <div>{transfer(`profile.skillLevel.options.${key}`)}</div>
          <div className={styles.selectHint}>
            {transfer(`profile.skillLevel.hints.${key}`)}
          </div>
        </>
      ),
      value: key,
    })
  );

  const addTechnicalSkill = () => {
    setTechnicalSkills([
      ...technicalSkills,
      {
        name: '',
        years: undefined,
        level: '',
        key: `${Date.now()}`,
      },
    ]);
  };

  const updateTechnicalSkills = (index: number, key: string, value: any) => {
    //@ts-ignore
    technicalSkills[index][key] = value;
    setTechnicalSkills([...technicalSkills]);
  };

  const deleteTechnicalSkill = (index: number) => {
    setTechnicalSkills(technicalSkills.filter((_, i) => index !== i));
  };

  const addIndustry = () => {
    setIsAddIndustry(true);
  };

  const cancelAddIndustry = () => {
    setNewIndustry('');
    setIsAddIndustry(false);
  };

  const createIndustry = () => {
    setIndustries([...industries, newIndustry]);
    cancelAddIndustry();
  };

  const removeIndustry = (name: string) => {
    setIndustries(industries.filter((industry) => industry !== name));
  };

  const canSubmit = () => {
    if (!(currentPosition && technicalSkills.length)) {
      return false;
    }

    if (
      technicalSkills.filter(
        (item) => !(item.name && checkNumberExists(item.years) && item.level)
      ).length
    ) {
      return false;
    }

    return true;
  };

  return (
    <DeveloperSidebarLayout
      showHeader
      activeMenu='profile'
      activeKey='technical_skills'
    >
      <div className={styles.header}>专业技能</div>
      <div className={styles.formContainer}>
        <div className={styles.questionContainer}>
          <div className={styles.questionTitle}>目前职位 *</div>
          <div className={styles.answer}>
            <Select
              options={JobPositionOptions}
              value={currentPosition}
              onChange={(value) => setCurrentPosition(value)}
              style={{ width: '100%' }}
              size='large'
            />
          </div>
        </div>

        <div className={styles.questionContainer}>
          <div className={styles.questionTitle}>你最强的技术能力 *</div>
          <div className={styles.hint}>
            你可以列出你最强的编程语言，编程框架，数据库，或者任何其它的你觉得能最好展示你的主要能力的技术或工具或技术知识等，比如云技术，测试工具，CI/CD等
          </div>
          <div className={styles.answer}>
            <div className={classnames(styles.cols, styles.head)}>
              <div>技能</div>
              <div>经验年限</div>
              <div>熟练程度</div>
            </div>
            {technicalSkills.map((skill, index) => {
              const { name, years, level, key } = skill;
              return (
                <div key={key} className={classnames(styles.cols, styles.body)}>
                  <div>
                    <Input
                      value={name}
                      onChange={(e) =>
                        updateTechnicalSkills(index, 'name', e.target.value)
                      }
                      size='large'
                    />
                  </div>
                  <div>
                    <InputNumber
                      value={years}
                      onChange={(value) =>
                        updateTechnicalSkills(index, 'years', value)
                      }
                      style={{ width: '100%' }}
                      size='large'
                    />
                  </div>
                  <div>
                    <Select
                      options={skillLevelOptions}
                      value={level}
                      onChange={(value) =>
                        updateTechnicalSkills(index, 'level', value)
                      }
                      size='large'
                      style={{ width: '100%' }}
                    />
                  </div>
                  {technicalSkills.length > 1 && (
                    <div onClick={() => deleteTechnicalSkill(index)}>
                      <DeleteOutlined />
                    </div>
                  )}
                </div>
              );
            })}
            <div
              className={classnames(styles.body, styles.addBtn)}
              onClick={addTechnicalSkill}
            >
              + 添加技术能力
            </div>
          </div>
        </div>

        <div className={styles.questionContainer}>
          <div className={styles.questionTitle}>你有哪些行业经验</div>
          <div className={styles.answer}>
            {isAddIndustry ? (
              <div className={styles.addInput}>
                <Input
                  value={newIndustry}
                  onChange={(e) => setNewIndustry(e.target.value)}
                  style={{ width: 150 }}
                  onPressEnter={() => createIndustry()}
                />
                <div onClick={cancelAddIndustry}>
                  <CloseOutlined className={styles.btn} />
                </div>
                <div onClick={createIndustry}>
                  <CheckOutlined className={styles.btn} />
                </div>
              </div>
            ) : (
              <div className={styles.add} onClick={addIndustry}>
                Add +
              </div>
            )}

            {industries.map((industry) => {
              return (
                <div className={styles.tag} key={industry}>
                  {industry}
                  <div
                    className={styles.delete}
                    onClick={() => removeIndustry(industry)}
                  >
                    X
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <NextStep
          isFinish={isFinish}
          disabled={!canSubmit()}
          currentStep='technical_skills'
          onClick={updateData}
        />
      </div>
    </DeveloperSidebarLayout>
  );
};

TechnicalSkills.layout = DeveloperLogginLayout;

export default TechnicalSkills;
