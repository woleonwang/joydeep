/*
 * @LastEditors: wmy
 * @Description: 功能描述
 * @Date: 2022-05-04 17:51:58
 * @Author: wmy
 * @LastEditTime: 2022-06-26 17:33:53
 */

import {
  Checkbox,
  DatePicker,
  Input,
  InputNumber,
  message,
  Select,
} from 'antd';
import { useEffect, useState } from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import moment, { Moment } from 'moment';
import { getTransfer } from 'utils/i18n';
import request from 'utils/request';
import styles from './styles.module.scss';
import router from 'next/router';
import DeveloperLogginLayout from 'components/layouts/DeveloperLogginLayout';
import DeveloperSidebarLayout from 'components/layouts/DeveloperSidebarLayout';
import { checkNumberExists } from 'utils/helper';
import NextStep from 'components/NextStep';
import { TLocale } from 'utils/type';

interface IWork {
  position: string;
  company: string;
  from: Moment | undefined;
  to: Moment | undefined;
  now: boolean;
  description: string;
  key: string;
}

interface IEducation {
  degree: string;
  school: string;
  from: Moment | undefined;
  to: Moment | undefined;
  key: string;
}

interface ICertification {
  description: string;
  key: string;
}

const Experience = () => {
  const [developmentExperience, setDevelopmentExperience] = useState<number>();
  const [remoteWorkExperience, setRemoteWorkExperience] = useState<number>();
  const [works, setWorks] = useState<IWork[]>([]);
  const [educations, setEducations] = useState<IEducation[]>([]);
  const [certifications, setCertifications] = useState<ICertification[]>([]);
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
        works,
        educations,
        certifications,
        development_experience,
        remote_work_experience,
        meta: { finish_percent },
      } = data.data;
      setIsFinish(finish_percent === 1);
      development_experience !== null &&
        setDevelopmentExperience(development_experience);
      remote_work_experience !== null &&
        setRemoteWorkExperience(remote_work_experience);
      if (works?.length) {
        setWorks(
          works.map((work: IWork) => ({
            ...work,
            from: work.from && moment(work.from),
            to: !work.now && work.to ? moment(work.to) : undefined,
            key: Math.random(),
          }))
        );
      } else {
        addWork();
      }

      if (educations?.length) {
        setEducations(
          educations.map((education: IEducation) => ({
            ...education,
            from: education.from && moment(education.from),
            to: education.to && moment(education.to),
            key: Math.random(),
          }))
        );
      } else {
        addEduation();
      }

      if (certifications?.length) {
        setCertifications(
          certifications.map((certification: ICertification) => ({
            ...certification,
            key: Math.random(),
          }))
        );
      } else {
        addCertification();
      }
    }
  };

  const updateData = async () => {
    if (!canSubmit()) {
      return;
    }

    const body = {
      works: works.map((work) => ({
        ...work,
        from: work.from?.format('YYYY-MM-DD'),
        to: work.now ? undefined : work.to?.format('YYYY-MM-DD'),
      })),
      educations: educations.map((education) => ({
        ...education,
        from: education.from?.format('YYYY-MM-DD'),
        to: education.to?.format('YYYY-MM-DD'),
      })),
      certifications: certifications.filter(
        (certification) => certification.description.trim().length > 0
      ),
      development_experience: developmentExperience,
      remote_work_experience: remoteWorkExperience,
      locale,
    };
    const data = await request.post('profile.updateExperience', body);
    if (data.code === 0) {
      message.success('保存成功');
      router.push(
        isFinish ? '/developers/profile' : '/developers/profile/projects'
      );
    }
  };

  const transfer = getTransfer(locale);

  const addWork = () => {
    setWorks([
      ...works,
      {
        position: '',
        company: '',
        from: undefined,
        to: undefined,
        description: '',
        key: `${Math.random()}`,
        now: false,
      },
    ]);
  };

  const addEduation = () => {
    setEducations([
      ...educations,
      {
        degree: '',
        school: '',
        from: undefined,
        to: undefined,
        key: `${Math.random()}`,
      },
    ]);
  };

  const addCertification = () => {
    setCertifications([
      ...certifications,
      {
        description: '',
        key: `${Math.random()}`,
      },
    ]);
  };

  const updateWork = (key: string, field: string, value: any) => {
    const work = works.find((work) => work.key === key);
    //@ts-ignore
    work[field] = value;
    setWorks([...works]);
  };

  const updateEducation = (key: string, field: string, value: any) => {
    const education = educations.find((education) => education.key === key);
    //@ts-ignore
    education[field] = value;
    setEducations([...educations]);
  };

  const updateCertification = (key: string, field: string, value: any) => {
    const certification = certifications.find(
      (certification) => certification.key === key
    );
    //@ts-ignore
    certification[field] = value;
    setCertifications([...certifications]);
  };

  const deleteWork = (key: string) => {
    setWorks(works.filter((work) => work.key !== key));
  };

  const deleteEducation = (key: string) => {
    setEducations(educations.filter((education) => education.key !== key));
  };

  const deleteCertification = (key: string) => {
    setCertifications(
      certifications.filter((certification) => certification.key !== key)
    );
  };

  const canSubmit = () => {
    if (
      !checkNumberExists(developmentExperience) ||
      !checkNumberExists(remoteWorkExperience)
    ) {
      return false;
    }
    return true;
  };

  return (
    <DeveloperSidebarLayout
      showHeader
      activeMenu='profile'
      activeKey='experience'
    >
      <div className={styles.header}>经历</div>
      <div className={styles.flexContainer}>
        <div className={styles.flexItem}>
          <div className={styles.title}>你有多少年作为软件开发的经验? *</div>
          <InputNumber
            value={developmentExperience}
            onChange={(value) => setDevelopmentExperience(value)}
            style={{ width: '100%' }}
            size='large'
          />
        </div>

        <div className={styles.flexItem}>
          <div className={styles.title}>你有多少年远程工作的经验？ *</div>
          <InputNumber
            value={remoteWorkExperience}
            onChange={(value) => setRemoteWorkExperience(value)}
            style={{ width: '100%' }}
            size='large'
          />
        </div>
      </div>

      <div className={styles.questionContainer}>
        <div className={styles.title}>工作经验</div>
        {works.map((work) => {
          return (
            <div className={styles.expPanel} key={work.key}>
              <div className={styles.expForm}>
                <div className={styles.inputWrapper}>
                  <div className={styles.label}>职位</div>
                  <Input
                    value={work.position}
                    onChange={(e) =>
                      updateWork(work.key, 'position', e.target.value)
                    }
                    size='large'
                  />
                </div>

                <div className={styles.inputWrapper}>
                  <div className={styles.label}>公司</div>
                  <Input
                    value={work.company}
                    onChange={(e) =>
                      updateWork(work.key, 'company', e.target.value)
                    }
                    size='large'
                  />
                </div>

                <div className={styles.dateScopeWrapper}>
                  <div className={styles.inputWrapper}>
                    <div className={styles.label}>开始日期</div>
                    <DatePicker
                      value={work.from}
                      onChange={(date) => updateWork(work.key, 'from', date)}
                      size='large'
                      style={{ width: '100%' }}
                    />
                  </div>
                  <div className={styles.inputWrapper}>
                    <div className={styles.label}>结束日期</div>
                    <DatePicker
                      value={work.to}
                      onChange={(date) => updateWork(work.key, 'to', date)}
                      disabled={work.now}
                      size='large'
                      style={{ width: '100%' }}
                    />
                  </div>
                </div>

                <div className={styles.inputWrapper}>
                  <Checkbox
                    checked={work.now}
                    onChange={(e) =>
                      updateWork(work.key, 'now', e.target.checked)
                    }
                  >
                    至今
                  </Checkbox>
                </div>

                <div className={styles.inputWrapper}>
                  <div className={styles.label}>描述</div>
                  <div>
                    <Input.TextArea
                      value={work.description}
                      onChange={(e) =>
                        updateWork(work.key, 'description', e.target.value)
                      }
                      rows={3}
                    />
                  </div>
                </div>
              </div>
              {works.length > 1 && (
                <div
                  className={styles.expDelete}
                  onClick={() => deleteWork(work.key)}
                >
                  <DeleteOutlined />
                </div>
              )}
            </div>
          );
        })}
        <div className={styles.addBtn} onClick={addWork}>
          + 添加工作经历
        </div>
      </div>

      <div className={styles.questionContainer}>
        <div className={styles.title}>教育经历</div>
        {educations.map((education) => {
          return (
            <div className={styles.expPanel} key={education.key}>
              <div className={styles.expForm}>
                <div className={styles.inputWrapper}>
                  <div className={styles.label}>学历</div>
                  <Select
                    value={education.degree}
                    onChange={(value: string) =>
                      updateEducation(education.key, 'degree', value)
                    }
                    style={{ width: '100%' }}
                    size='large'
                    options={[
                      'doctor',
                      'master',
                      'bachelor',
                      'senior',
                      'others',
                    ].map((key) => ({
                      label: transfer(`profile.degree.options.${key}.label`),
                      value: key,
                    }))}
                  />
                </div>
                <div className={styles.inputWrapper}>
                  <div className={styles.label}>学校</div>
                  <Input
                    value={education.school}
                    onChange={(e) =>
                      updateEducation(education.key, 'school', e.target.value)
                    }
                    size='large'
                  />
                </div>

                <div className={styles.dateScopeWrapper}>
                  <div className={styles.inputWrapper}>
                    <div className={styles.label}>开始日期</div>
                    <DatePicker
                      value={education.from}
                      onChange={(date) =>
                        updateEducation(education.key, 'from', date)
                      }
                      size='large'
                      style={{ width: '100%' }}
                    />
                  </div>
                  <div className={styles.inputWrapper}>
                    <div className={styles.label}>结束日期</div>
                    <DatePicker
                      value={education.to}
                      onChange={(date) =>
                        updateEducation(education.key, 'to', date)
                      }
                      size='large'
                      style={{ width: '100%' }}
                    />
                  </div>
                </div>
              </div>
              {educations.length > 1 && (
                <div
                  className={styles.expDelete}
                  onClick={() => deleteEducation(education.key)}
                >
                  <DeleteOutlined />
                </div>
              )}
            </div>
          );
        })}
        <div className={styles.addBtn} onClick={addEduation}>
          + 添加教育经历
        </div>
      </div>

      <div className={styles.questionContainer}>
        <div className={styles.title}>证书</div>
        {certifications.map((certification) => {
          return (
            <div className={styles.expPanel} key={certification.key}>
              <div className={styles.expForm}>
                <div className={styles.inputWrapper}>
                  <div className={styles.label}>证书名称</div>
                  <Input
                    value={certification.description}
                    onChange={(e) =>
                      updateCertification(
                        certification.key,
                        'description',
                        e.target.value
                      )
                    }
                    size='large'
                  />
                </div>
              </div>
              {certifications.length > 1 && (
                <div
                  className={styles.expDelete}
                  onClick={() => deleteCertification(certification.key)}
                >
                  <DeleteOutlined />
                </div>
              )}
            </div>
          );
        })}
        <div className={styles.addBtn} onClick={addCertification}>
          + 添加证书
        </div>
      </div>

      <NextStep
        isFinish={isFinish}
        disabled={!canSubmit()}
        currentStep='experience'
        onClick={updateData}
      />
    </DeveloperSidebarLayout>
  );
};
Experience.layout = DeveloperLogginLayout;

export default Experience;
