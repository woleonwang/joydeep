/*
 * @LastEditors: wmy
 * @Description: 功能描述
 * @Date: 2022-05-05 00:24:17
 * @Author: wmy
 * @LastEditTime: 2022-06-21 02:51:29
 */

import { Input, message, Select } from 'antd';
import { useEffect, useState } from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import { getTransfer } from 'utils/i18n';
import request from 'utils/request';
import styles from './styles.module.scss';
import router from 'next/router';
import classnames from 'classnames';
import DeveloperSidebarLayout from 'components/layouts/DeveloperSidebarLayout';
import DeveloperLogginLayout from 'components/layouts/DeveloperLogginLayout';
import NextStep from 'components/NextStep';
import { TLocale } from 'utils/type';

interface IProject {
  name: string;
  description: string;
  url: string;
  key: string;
  skills: string[];
}

const Projects = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [skillOptions, setSkillOptions] = useState<
    { label: string; value: string }[]
  >([]);
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
        projects,
        skills,
        meta: { finish_percent },
      } = data.data;
      setIsFinish(finish_percent === 1);
      setSkillOptions(
        skills.map((skill: { name: string }) => ({
          label: skill.name,
          value: skill.name,
        }))
      );
      if (projects?.length) {
        setProjects(
          projects.map((project: IProject) => ({
            ...project,
            key: `${Math.random()}`,
          }))
        );
      } else {
        addProject();
      }
    }
  };

  const updateData = async () => {
    if (!canSubmit()) {
      return;
    }
    const body = {
      projects,
      locale,
    };
    const data = await request.post('profile.updateProjects', body);
    if (data.code === 0) {
      message.success('保存成功');
      router.push(
        isFinish ? '/developers/profile' : '/developers/profile/web3'
      );
    }
  };

  const transfer = getTransfer(locale);

  const addProject = () => {
    setProjects([
      ...projects,
      {
        name: '',
        description: '',
        url: '',
        skills: [],
        key: `${Math.random()}`,
      },
    ]);
  };

  const updateProject = (key: string, field: string, value: any) => {
    const project = projects.find((project) => project.key === key);
    //@ts-ignore
    project[field] = value;
    setProjects([...projects]);
  };

  const deleteProject = (key: string) => {
    setProjects(projects.filter((project) => project.key !== key));
  };

  const canSubmit = () => {
    return true;
  };

  return (
    <DeveloperSidebarLayout
      showHeader
      activeMenu='profile'
      activeKey='projects'
    >
      <div className={styles.header}>项目经历</div>
      <div className={styles.questionContainer}>
        {projects.map((project) => {
          return (
            <div className={styles.expPanel} key={project.key}>
              <div className={styles.expForm}>
                <div className={styles.inputWrapper}>
                  <div className={styles.label}>项目名称</div>
                  <Input
                    value={project.name}
                    onChange={(e) =>
                      updateProject(project.key, 'name', e.target.value)
                    }
                    size='large'
                  />
                </div>
                <div className={styles.inputWrapper}>
                  <div className={styles.label}>描述</div>
                  <Input.TextArea
                    value={project.description}
                    onChange={(e) =>
                      updateProject(project.key, 'description', e.target.value)
                    }
                    rows={3}
                  />
                </div>
                <div className={styles.inputWrapper}>
                  <div className={styles.label}>
                    在这个项目中主要使用的技术（请从你在“专业技能”页面填写的技术中选择）
                  </div>
                  <Select
                    mode='tags'
                    options={skillOptions}
                    value={project.skills}
                    onChange={(values) =>
                      updateProject(project.key, 'skills', values)
                    }
                    size='large'
                    style={{ width: '100%' }}
                  />
                </div>
                <div className={styles.inputWrapper}>
                  <div className={styles.label}>项目链接</div>
                  <Input
                    value={project.url}
                    onChange={(e) =>
                      updateProject(project.key, 'url', e.target.value)
                    }
                  />
                </div>
              </div>
              {projects.length > 1 && (
                <div
                  className={styles.expDelete}
                  onClick={() => deleteProject(project.key)}
                >
                  <DeleteOutlined />
                </div>
              )}
            </div>
          );
        })}
        <div className={styles.addBtn} onClick={addProject}>
          + 添加项目经历
        </div>
      </div>

      <NextStep
        isFinish={isFinish}
        disabled={!canSubmit()}
        currentStep='projects'
        onClick={updateData}
      />
    </DeveloperSidebarLayout>
  );
};

Projects.layout = DeveloperLogginLayout;

export default Projects;
