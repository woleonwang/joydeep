/*
 * @LastEditors: wmy
 * @Description: 功能描述
 * @Date: 2022-05-03 22:51:09
 * @Author: wmy
 * @LastEditTime: 2022-06-26 18:53:27
 */

import DeveloperLogginLayout from 'components/layouts/DeveloperLogginLayout';
import router, { useRouter } from 'next/router';
import Image from 'next/image';
import {
  EditOutlined,
  MailOutlined,
  PhoneOutlined,
  ProfileOutlined,
  LinkedinOutlined,
  GithubOutlined,
  WechatOutlined,
} from '@ant-design/icons';
import { useEffect, useState } from 'react';
import request from 'utils/request';
import styles from './styles.module.scss';
import Link from 'next/link';
import { getTransfer } from 'utils/i18n';
import classnames from 'classnames';
import DeveloperSidebarLayout from 'components/layouts/DeveloperSidebarLayout';
import { IProfile, TLocale, TRole } from 'utils/type';

const Profile = () => {
  const [profile, setProfile] = useState<IProfile>();
  const { query } = useRouter();
  const locale: TLocale = query.locale === 'en' ? 'en' : 'zh';
  const [role, setRole] = useState<TRole>();

  const isDeveloper = role === 'developer';
  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const data = await request.get('profile.getDetail');
    if (data.code === 0) {
      setRole(data.data.meta.role);
      setProfile({
        ...data.data,
        attachment: decodeURIComponent(data.data.attachment || ''),
      });
    }
  };

  const onEdit = (key: string) => {
    router.push(`/developers/profile/${key}`);
  };

  const transfer = getTransfer(locale);
  const getText = (key: string, replacement?: { [key: string]: any }) =>
    transfer(`profile.${key}`, replacement);

  return (
    <DeveloperSidebarLayout activeMenu='profile'>
      {profile && (
        <>
          <div className={classnames(styles.block, styles.basic)}>
            <div className={styles.edit} onClick={() => onEdit('basic')}>
              <EditOutlined />
            </div>
            {profile.avatar && (
              <Image
                src={profile.avatar}
                width={128}
                height={128}
                alt='avatar'
                className={styles.avatar}
              />
            )}
            <div className={styles.title}>{profile.name}</div>
            <div className={styles.intro}>{profile.self_intro}</div>
            <div className={styles.detail}>
              <div>{getText(`country.options.${profile.country}`)}</div>
              {profile.email && (
                <div>
                  <MailOutlined />
                  {profile.email}
                </div>
              )}
              {profile.phone && (
                <div>
                  <PhoneOutlined />
                  {profile.phone}
                </div>
              )}
              {profile.weixin && (
                <div>
                  <WechatOutlined />
                  {profile.weixin}
                </div>
              )}
              {profile.attachment && (
                <div>
                  <ProfileOutlined />
                  <Link href={profile.attachment}>
                    <a target='_blank'>
                      {profile.attachment.slice(
                        profile.attachment.lastIndexOf('/') + 1
                      )}
                    </a>
                  </Link>
                </div>
              )}
              {profile.linkedin_url && (
                <div>
                  <Link href={profile.linkedin_url}>
                    <a target='_blank'>
                      <LinkedinOutlined />
                    </a>
                  </Link>
                </div>
              )}
              {profile.github_url && (
                <div>
                  <Link href={profile.github_url}>
                    <a target='_blank'>
                      <GithubOutlined />
                    </a>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {isDeveloper && (
            <>
              <div
                className={classnames(styles.block, styles.englishSkills)}
                onClick={() => onEdit('english_skills')}
              >
                <div className={styles.edit}>
                  <EditOutlined />
                </div>
                <div className={styles.title}>英语能力</div>
                <div className={styles.head}>
                  {getText(
                    `englishSkill.options.${profile.english_level}.title`
                  )}
                </div>
                <div className={styles.desc}>
                  {getText(
                    `englishSkill.options.${profile.english_level}.description`
                  )}
                </div>
              </div>

              <div className={classnames(styles.block, styles.availability)}>
                <div
                  className={styles.edit}
                  onClick={() => onEdit('availability')}
                >
                  <EditOutlined />
                </div>
                <div className={styles.title}>求职状态</div>
                <div className={styles.contentWrapper}>
                  {profile.remote_work_status && (
                    <div className={styles.liItem}>
                      {getText(
                        `remoteJob.options.${profile.remote_work_status}.title`
                      )}
                    </div>
                  )}
                  {profile.interested_remote_work && (
                    <div className={styles.liItem}>
                      {getText(
                        `interestedJob.options.${profile.interested_remote_work}.title`
                      )}
                    </div>
                  )}
                  {profile.remote_work_location && (
                    <div className={styles.liItem}>
                      {getText(
                        `jobLocation.options.${profile.remote_work_location}.title`
                      )}
                    </div>
                  )}
                  {profile.worktime_per_week && (
                    <div className={styles.liItem}>
                      {profile.worktime_per_week}
                      {getText('workHoursUnit')}
                    </div>
                  )}
                  {profile.attitude_for_night_work && (
                    <div className={styles.liItem}>
                      {profile.attitude_for_night_work === 'accept'
                        ? profile.lastest_of_night_work === 'all_time'
                          ? getText(`lastestTime.options.all_time.title`)
                          : getText(
                              `lastestTime.options.specific_clock.title`
                            ).replace(
                              '##lastestTimeInput##',
                              profile.lastest_of_night_work
                            )
                        : getText(
                            `attitudeForNightWork.options.${profile.attitude_for_night_work}.title`
                          )}
                    </div>
                  )}
                </div>
              </div>

              <div className={classnames(styles.block, styles.technicalSkills)}>
                <div
                  className={styles.edit}
                  onClick={() => onEdit('technical_skills')}
                >
                  <EditOutlined />
                </div>
                <div className={styles.title}>专业技能</div>
                <div className={styles.smallTitle}>
                  {transfer(`signup.jobOptions.${profile.current_position}`)}
                </div>
                {profile.skills.length > 0 && (
                  <>
                    <div className={styles.smallTitle}>你最强的技术能力</div>
                    <div className={styles.liWrapper}>
                      {profile.skills.map((skill, index) => (
                        <div className={styles.liItem} key={index}>
                          {skill.name} | {skill.years}
                          {transfer(`profile.skillLevel.unit`)} |{' '}
                          {transfer(
                            `profile.skillLevel.options.${skill.level}`
                          )}
                        </div>
                      ))}
                    </div>
                  </>
                )}
                {profile.industries.length > 0 && (
                  <>
                    <div className={styles.smallTitle}>你有哪些行业经验</div>
                    <div className={styles.liWrapper}>
                      {profile.industries.map((industry, index) => (
                        <div className={styles.liItem} key={index}>
                          {industry.name}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className={classnames(styles.block, styles.experience)}>
                <div
                  className={styles.edit}
                  onClick={() => onEdit('experience')}
                >
                  <EditOutlined />
                </div>
                <div className={styles.title}>经历</div>
                <div className={styles.liWrapper}>
                  {profile.development_experience && (
                    <div className={styles.liItem}>
                      {getText('workExperience.description', {
                        year: profile.development_experience,
                      })}
                    </div>
                  )}
                  {profile.remote_work_experience && (
                    <div className={styles.liItem}>
                      {getText('remoteExperience.description', {
                        year: profile.remote_work_experience,
                      })}
                    </div>
                  )}
                </div>
                {profile.works.length > 0 && (
                  <div className={styles.expBlock}>
                    <div className={styles.expTitle}>工作经历</div>
                    {profile.works.map((work, index) => (
                      <div className={styles.expPanel} key={index}>
                        <div className={styles.expPanelTitle}>
                          {work.company}&nbsp;|&nbsp;{work.position}
                        </div>
                        <div className={styles.text}>
                          {work.from} - {work.now ? 'present' : work.to}
                        </div>
                        <div className={styles.text}>{work.description}</div>
                      </div>
                    ))}
                  </div>
                )}
                {profile.educations.length > 0 && (
                  <div className={styles.expBlock}>
                    <div className={styles.expTitle}>教育经历</div>
                    {profile.educations.map((education, index) => (
                      <div className={styles.expPanel} key={index}>
                        <div className={styles.expPanelTitle}>
                          {education.school}&nbsp;|&nbsp;{education.degree}
                        </div>
                        <div className={styles.text}>
                          {education.from} - {education.to}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {profile.certifications.length > 0 && (
                  <div className={styles.expBlock}>
                    <div className={styles.expTitle}>证书</div>
                    {profile.certifications.map((certification, index) => (
                      <div className={styles.expPanel} key={index}>
                        {certification.description}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className={classnames(styles.block, styles.project)}>
                <div className={styles.edit} onClick={() => onEdit('projects')}>
                  <EditOutlined />
                </div>
                <div className={styles.title}>项目经历</div>
                {profile.projects.length > 0 && (
                  <div className={styles.expBlock}>
                    {profile.projects.map((project, index) => (
                      <div className={styles.expPanel} key={index}>
                        <div
                          className={classnames(styles.text, styles.subTitle)}
                        >
                          <Link href={project.url}>
                            <a target='_blank'>{project.name}</a>
                          </Link>
                        </div>
                        <div className={classnames(styles.text, styles.indent)}>
                          {project.skills.join(',')}
                        </div>
                        <div className={classnames(styles.text, styles.indent)}>
                          {project.description}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className={classnames(styles.block, styles.web3)}>
                <div className={styles.edit} onClick={() => onEdit('web3')}>
                  <EditOutlined />
                </div>
                <div className={styles.title}>Web3</div>
                {profile.attitude_for_web_three && (
                  <div className={styles.liWrapper}>
                    <div className={styles.liItem}>
                      {getText(
                        `attitudeForWebThree.options.${profile.attitude_for_web_three}.preview`
                      )}
                    </div>
                    {profile.attitude_for_web_three === 'yes' && (
                      <>
                        <div className={styles.liItem}>
                          {getText(
                            `understandWebThree.options.${profile.understand_web_three}.preview`
                          )}
                        </div>
                        <div className={styles.liItem}>
                          {getText(
                            `experienceForWebThree.options.${profile.experience_for_web_three}.title`
                          )}
                        </div>
                        <div className={styles.liItem}>
                          {getText(
                            `reasonForWebThree.options.${profile.reason_for_web_three}.title`
                          )}
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>

              <div className={classnames(styles.block, styles.salary)}>
                <div className={styles.edit} onClick={() => onEdit('salary')}>
                  <EditOutlined />
                </div>
                <div className={styles.title}>薪资要求</div>
                <div className={styles.salaryTitle}>当前薪资</div>
                {profile.basic_salary && (
                  <div className={styles.liItem}>
                    {getText('show.base', { value: profile.basic_salary })}
                  </div>
                )}
                {(profile.bonus_min || profile.bonus_max) && (
                  <div className={styles.liItem}>
                    {getText('show.bonus', {
                      min: profile.bonus_min,
                      max: profile.bonus_max,
                    })}
                  </div>
                )}
                {profile.stock && (
                  <div className={styles.liItem}>
                    {getText('show.stock', {
                      value: profile.stock,
                    })}
                  </div>
                )}
                {profile.other_salary && (
                  <div className={styles.liItem}>
                    {getText('show.salary_other')}: {profile.other_salary}
                  </div>
                )}
                <div className={styles.salaryTitle}>薪资要求</div>
                {profile.expect_salary_per_hour && (
                  <div className={styles.liItem}>
                    {getText('show.salary_per_hour', {
                      value: profile.expect_salary_per_hour,
                    })}
                  </div>
                )}
                {profile.expect_salary_per_year && (
                  <div className={styles.liItem}>
                    {getText('show.salary_per_year', {
                      value: profile.expect_salary_per_year,
                    })}
                  </div>
                )}
              </div>
            </>
          )}
        </>
      )}
    </DeveloperSidebarLayout>
  );
};

Profile.layout = DeveloperLogginLayout;

export default Profile;
