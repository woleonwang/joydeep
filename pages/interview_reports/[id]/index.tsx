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
import { IProfile, TLocale } from 'utils/type';
import styles from './style.module.scss';
import { getTransfer } from 'utils/i18n';
import classnames from 'classnames';
import Link from 'next/link';
import { message } from 'antd';
import CopyRight from 'components/CopyRight';

interface IInterviewReport {
  ability_detail: string;
  ability_interviewer: string;
  ability_summary: string;
  live_coding_video: string;
  live_coding_skills: string;
  live_coding_created_at: string;
  skill_interviewer: string;
  skill_summary: string;
  soft_skills: string;
  user_id: number;
  track_records: string;
}

const InterviewReport = () => {
  const [interviewReport, setInterviewReport] = useState<IInterviewReport>();
  const [profile, setProfile] = useState<IProfile>();
  const [locale, setLocale] = useState<TLocale>('en');
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      fetchData();
      setLocale(router.query.locale === 'zh' ? 'zh' : 'en');
    }
  }, [router.isReady]);

  const fetchData = async () => {
    const resp = await request.get('interviewReports.getDetail', {
      placeholder: {
        id: router.query.id as string,
      },
    });

    if (resp.code === 0) {
      const { profile, interview_report } = resp.data;
      setInterviewReport(interview_report);
      setProfile(profile);
    } else {
      message.error('Interview report not found');
    }
  };

  const getAbilitiy = (text: string) => {
    if (text) {
      const span = text.split('|');
      const title = span[0];
      const list = span.slice(1).map((li) => {
        const [title, content] = li.split(':');
        return {
          title,
          content,
        };
      });
      return {
        title,
        list,
      };
    }
    return null;
  };

  const getSoftSkills = (text: string) => {
    if (text) {
      const list = text.split('|').map((li) => {
        const [title, content] = li.split(':');
        return {
          title,
          content,
        };
      });
      return {
        list,
      };
    }
    return null;
  };

  const transfer = getTransfer(locale);
  const getText = (key: string, replacement?: { [key: string]: any }) =>
    transfer(`profile.${key}`, replacement);

  const expertSkills =
    profile?.skills?.filter((skill) => skill.level === 'expert') || [];

  const otherSkills =
    profile?.skills?.filter((skill) => skill.level !== 'expert') || [];

  return profile && interviewReport ? (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src='/logo.svg' width={141} height={48} alt='logo' />
      </div>
      <div className={styles.innerContainer}>
        <div className={classnames(styles.block, styles.basic)}>
          <div className={styles.left}>
            <Image
              src={profile.avatar}
              width={170}
              height={170}
              alt='avatar'
              className={styles.avatar}
            />
          </div>
          <div className={styles.right}>
            <div className={styles.name}>{profile.name}</div>
            <div className={styles.selfIntro}>{profile.self_intro}</div>
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
          </div>
        </div>
        <div className={classnames(styles.block, styles.skills)}>
          <div className={styles.title}>{getText('show.skills')}</div>
          {profile.skills.length > 0 && (
            <>
              {expertSkills.length > 0 && (
                <>
                  <div className={styles.smallTitle}>
                    {getText('show.topSkills')}
                  </div>
                  <div className={styles.skillsWrapper}>
                    <div className={styles.skillsItem}>
                      <div className={styles.skillsHeader}>Skill</div>
                      {expertSkills.map((skill, index) => (
                        <div className={styles.skillsLi} key={index}>
                          {skill.name}
                        </div>
                      ))}
                    </div>
                    <div className={styles.skillsItem}>
                      <div className={styles.skillsHeader}>
                        Years of experience
                      </div>
                      {expertSkills.map((skill, index) => (
                        <div className={styles.skillsLi} key={index}>
                          {skill.years}
                          {transfer(`profile.skillLevel.unit`, {
                            multi: skill.years && skill.years > 1 ? 's' : '',
                          })}{' '}
                        </div>
                      ))}
                    </div>
                    <div className={styles.skillsItem}>
                      <div className={styles.skillsHeader}>
                        Proficiency level
                      </div>
                      {expertSkills.map((skill, index) => (
                        <div className={styles.skillsLi} key={index}>
                          {transfer(
                            `profile.skillLevel.options.${skill.level}`
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {otherSkills.length > 0 && (
                <>
                  <div className={styles.smallTitle}>Other skills</div>
                  <div>{otherSkills.map((skill) => skill.name).join(', ')}</div>
                </>
              )}
            </>
          )}
          {profile.industries.length > 0 && (
            <>
              <div className={styles.smallTitle}>
                {getText('show.domainKnowledge')}
              </div>
              <div className={styles.liWrapper}>
                {profile.industries.map((industry, index) => (
                  <div className={styles.liItem} key={index}>
                    {industry.name}
                  </div>
                ))}
              </div>
            </>
          )}
          <div className={styles.reportContainer}>
            <div className={styles.formattedText}>
              {interviewReport.skill_summary}
            </div>
            <div className={styles.sign}>
              <span className={styles.intro}>
                {getText('show.interviewBy')}&nbsp;
              </span>
              <span className={styles.name}>
                {interviewReport.skill_interviewer}
              </span>
            </div>
          </div>
        </div>
        {(!!interviewReport.ability_detail ||
          !!interviewReport.ability_summary) && (
          <div className={classnames(styles.block, styles.ability)}>
            {(() => {
              const data = getAbilitiy(interviewReport.ability_detail);
              return (
                !!data && (
                  <>
                    <div className={styles.title}>{data.title}</div>
                    <div className={styles.pointWrap}>
                      {data.list.map((li, index) => {
                        return (
                          <div key={index} className={styles.point}>
                            <div className={styles.pointTitle}>{li.title}</div>
                            <div className={styles.pointContent}>
                              {li.content}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </>
                )
              );
            })()}
            {!!interviewReport.ability_summary && (
              <div className={styles.reportContainer}>
                <div className={styles.formattedText}>
                  {interviewReport.ability_summary}
                </div>
                <div className={styles.sign}>
                  <span className={styles.intro}>
                    {getText('show.interviewBy')}&nbsp;
                  </span>
                  <span className={styles.name}>
                    {interviewReport.ability_interviewer}
                  </span>
                </div>
              </div>
            )}
          </div>
        )}

        {!!interviewReport.live_coding_video && (
          <div className={classnames(styles.block, styles.coding)}>
            <div className={styles.title}>{getText('show.liveCoding')}</div>
            <div className={styles.pointWrap}>
              <div className={styles.point}>
                <div className={styles.pointTitle}>
                  {interviewReport.live_coding_skills}
                </div>
                <div className={styles.pointContent}>
                  {`${getText('show.liveCodingAt')} 
                  ${dayjs(interviewReport.live_coding_created_at).format(
                    'YYYY-MM-DD HH:mm:ss'
                  )}`}
                </div>
              </div>
            </div>
            <video
              className={styles.videoWrapper}
              src={interviewReport.live_coding_video}
              width='100%'
              controls
            />
          </div>
        )}

        {!!interviewReport.soft_skills && (
          <div className={styles.block}>
            {(() => {
              const data = getSoftSkills(interviewReport.soft_skills);
              return (
                !!data && (
                  <>
                    <div className={styles.title}>
                      {getText('show.softskills')}
                    </div>
                    <div className={styles.pointWrap}>
                      {data.list.map((li, index) => {
                        return (
                          <div key={index} className={styles.point}>
                            <div className={styles.pointTitle}>{li.title}</div>
                            <div className={styles.pointContent}>
                              {li.content}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </>
                )
              );
            })()}
          </div>
        )}

        {!!interviewReport.track_records && (
          <div className={classnames(styles.block, styles.record)}>
            <div className={styles.title}>{getText('show.track')}</div>
            {interviewReport.track_records &&
              interviewReport.track_records.split('|').map((record, index) => (
                <div className={styles.item} key={index}>
                  {record}
                </div>
              ))}
          </div>
        )}

        <div className={classnames(styles.block, styles.experience)}>
          <div className={styles.title}>{getText('show.experience')}</div>
          {profile.works.length > 0 && (
            <div className={styles.expBlock}>
              <div className={styles.expTitle}>
                {getText('show.workExperience')}
              </div>
              {profile.works.map((work, index) => (
                <div className={styles.expPanel} key={index}>
                  <div className={styles.expPanelTitle}>
                    {work.company}&nbsp;|&nbsp;{work.position}
                  </div>
                  <div className={styles.text}>
                    {work.from} - {work.now ? getText('show.present') : work.to}
                  </div>
                  <div
                    className={classnames(styles.formattedText, styles.text)}
                  >
                    {work.description}
                  </div>
                </div>
              ))}
            </div>
          )}
          {profile.educations.length > 0 && (
            <div className={styles.expBlock}>
              <div className={styles.expTitle}>
                {getText('show.educationExperience')}
              </div>
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
              <div className={styles.expTitle}>
                {profile.certifications.length +
                  ' ' +
                  getText('show.certification')}
              </div>
              {profile.certifications.map((certification, index) => (
                <div className={styles.expPanel} key={index}>
                  {certification.description}
                </div>
              ))}
            </div>
          )}
          {profile.projects.length > 0 && (
            <div className={styles.expBlock}>
              <div className={styles.expTitle}>
                {getText('show.projectExperience')}
              </div>
              {profile.projects.map((project, index) => (
                <div className={styles.expPanel} key={index}>
                  <div className={classnames(styles.text, styles.subTitle)}>
                    <Link href={project.url}>
                      <a target='_blank'>{project.name}</a>
                    </Link>
                  </div>
                  <div className={classnames(styles.text, styles.indent)}>
                    {project.skills.join(',')}
                  </div>
                  <div
                    className={classnames(
                      styles.formattedText,
                      styles.text,
                      styles.indent
                    )}
                  >
                    {project.description}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <CopyRight />
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default InterviewReport;
