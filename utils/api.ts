/*
 * @LastEditors: wmy
 * @Description: 功能描述
 * @Date: 2022-05-02 13:37:05
 * @Author: wmy
 * @LastEditTime: 2022-06-27 01:24:22
 */

export type ApiConfig = {
  [key: string]: ApiConfig | string;
};

const api: ApiConfig = {
  common: {
    helloworld: '/hellocorsworld',
  },

  admin: {
    checkToken: '/check_admin_token',
  },
  // developers
  users: {
    sendCode: '/users/send_verification_code',
    signUp: '/users/sign_up',
    signIn: '/users/sign_in_by_code',
    recommendToken: '/users/recommend_token',
    recommendRecords: '/users/recommend_records',
  },

  profile: {
    getDetail: '/profiles/detail',
    updateEnglishSkills: '/profiles/update_english_skills',
    updateBasic: '/profiles/update_basic',
    updateAvailability: '/profiles/update_availability',
    updateTechnicalSkills: '/profiles/update_technical_skills',
    updateExperience: '/profiles/update_experience',
    updateProjects: '/profiles/update_projects',
    updateWebThree: '/profiles/update_web_three',
    updateSalary: '/profiles/update_salary',
  },

  interviewReports: {
    getDetail: '/interview_reports/:id',
  },

  recruiterForm: {
    create: '/recruiter_forms',
  },

  recruiters: {
    signUp: '/sign_up',
    signIn: '/login',
    profile: '/recruiter/profile/:id',
  },
};

export default api;
