/*
 * @LastEditors: wmy
 * @Description: 功能描述
 * @Date: 2022-05-03 23:43:07
 * @Author: wmy
 * @LastEditTime: 2022-06-26 18:02:57
 */

import countries from './country';

const countryOptions: Record<string, string> = {};
Object.entries(countries).forEach(([value, label]) => {
  countryOptions[value] = label;
});

const I18n: any = {
  zh: {
    profile: {
      englishSkill: {
        question: '您的英语怎么样?',
        options: {
          not_good: {
            title: '我英语水平一般',
            description:
              '我的英语水平不足以让我和别人交流，无论是通过书面还是口语。',
          },
          read_write: {
            title: '我可以通过书面英语流利交流',
            description:
              '我只能通过书面英语，比如写邮件或者聊天软件和别人交流。如果要让我直接口头和一个英语为母语的开发经理交流工作，这对我来说会很难，我们可能都很难听懂彼此在讲什么。',
          },
          normal_oral: {
            title: '基础口语能力',
            description:
              '我能通过口语和一个英语为母语的开发经理交流工作。大部分时间我们应该都能够听懂彼此，但是我可能说话会比较慢，也会要求对方说慢一点，有时候我们可能也需要重复彼此说过的话才能最好地让彼此理解。',
          },
          good_oral: {
            title: '流利的英语交流能力',
            description:
              '用口语和一个英语为母语的开发经理交流工作对我来说完全不成问题。我们彼此应该都能够很容易地理解对方。',
          },
        },
      },

      localeQuestion: '你现在想填写英文简历还是中文简历？',
      localeHint:
        '不用担心，如果你既想做团队是中国人的项目，又想做国际团队的项目，你之后还可以在你的简历页面创建两份不同语言的简历。',
      localeOption_1: {
        title: '英文简历',
        description:
          '如果你认为你的英文水平足够和客户直接交流，或者你主要想做海外的职位，那我们建议你先创建英文简历，这样和客户沟通更容易。',
      },
      localeOption_2: {
        title: '中文简历',
        description:
          '如果你认为你的英文水平不足以和客户直接交流，并且你用中文能更好地介绍自己，或者你主要想做团队为中国人为主的项目，那你可以先创建中文简历。我们就只会把你推荐给可以用中文直接交流的客户。',
      },

      country: {
        options: countryOptions,
      },

      remoteJob: {
        question: '你现在正在积极地寻找一份远程工作吗？*',
        options: {
          ready: {
            title: '我已经准备好开始一份新的远程工作',
            description:
              '我希望尽快寻找一份远程工作，如果有合适的工作机会我可以立即开始面试。',
          },
          accept: {
            title: '我对新的远程工作机会持开放心态',
            description:
              '我并不着急寻找一份新的远程工作，但如果有好的符合我兴趣的机会，我会考虑。',
          },
          not_interested: {
            title: '不看机会',
            description: '我目前不会开始一份新的远程工作，只是先看看。',
          },
        },
      },

      interestedJob: {
        question: '你对什么类型的远程工作机会感兴趣？*',
        options: {
          fulltime: {
            title: '远程全职',
            description: '至少8小时每天，40个小时每周',
          },
          parttime: {
            title: '远程兼职',
          },
          parttime_first: {
            title: '我可以先兼职，然后一个月内变成全职',
          },
        },
      },

      workHoursQuestion:
        '如果你选择了远程兼职，你每周能保证多少小时的工作时间？',
      workHoursUnit: '小时/周',

      jobLocation: {
        question: '你接受来自于哪里的远程工作机会？*',
        options: {
          inside: {
            title: '中国国内',
          },
          outside: {
            title: '海外公司',
          },
        },
      },

      attitudeForNightWork: {
        question: '你能接受在北京时间的晚上工作吗？*',
        hint: '因为我们有的客户的所在地会和国内有时差，所以可能会要求候选人的工作时间和其他团队成员有一定的重合。',
        options: {
          accept: {
            title: '可以接受晚上工作',
          },
          reject: {
            title: '不可以接受晚上工作',
          },
        },
      },

      lastestTime: {
        question: '你能接受晚上最晚工作到几点？*',
        options: {
          all_time: {
            title: '整晚',
          },
          specific_clock: {
            title: '凌晨##lastestTimeInput##点',
          },
        },
      },

      skillLevel: {
        unit: '年',
        options: {
          beginner: '入门',
          experienced: '熟练',
          expert: '专家',
        },
        hints: {
          beginner:
            '我没有在我的日常工作中使用过这个技术。我只是自学过相关知识或者在我的业余项目中有过有限时间的使用',
          experienced:
            '这是我在我日常工作中经常要使用的技术，我能非常熟练地运用这项技术，但我还不认为我达到了专家级',
          expert:
            '我对这项技术非常了解，有多年经验，我认为我是使用这项技术的专家',
        },
      },

      workExperience: {
        description: '##year##年工作经验',
      },

      remoteExperience: {
        description: '##year##年远程工作经验',
      },

      attitudeForWebThree: {
        question: '你愿意加入一家Web3的公司吗？',
        options: {
          yes: {
            title: '是',
            preview: '愿意加入一家Web3的公司',
          },
          no: {
            title: '否',
            preview: '不愿意加入一家Web3的公司',
          },
        },
      },

      understandWebThree: {
        question:
          '你之前有任何Web3的开发经验吗？比如智能合约，区块链开发，相关前端开发等？',
        options: {
          yes: {
            title: '是',
            preview: '有Web3的开发经验',
          },
          no: {
            title: '否',
            preview: '没有Web3的开发经验',
          },
        },
      },

      experienceForWebThree: {
        question: '你怎样描述你对Web3/Crypto/Blockchain的理解程度？',
        options: {
          little: {
            title: '了解得很少，只是偶尔看一些相关的新闻或者基础的介绍文章。',
          },
          beginner: {
            title:
              '自己做过一些研究，有一定的了解，比如知道比特币的工作原理，知道POW的原理等。',
          },
          experience: {
            title:
              '有比较深的了解程度。比如懂得多种不同的consensus mechanism，smart contracts的工作方式，了解多个不同的blockchain和他们适用的场景等。自己也关注Web3的公司，也会进行投资。',
          },
          expert: {
            title:
              '非常深的理解。自己参与过相关的项目，对一系列的相关领域都有研究，比如blockchain layers, consensus mechanisms, smart contracts, bridges, DeFi, Wallet types, etc. 对整体的生态也有不错的研究，对一些常见的问题的解决方案也比较熟悉。',
          },
        },
      },

      reasonForWebThree: {
        question: '你为什么对Web3感兴趣。',
        options: {
          reason_1: {
            title:
              '认为 Web3 是互联网下一个发展的潮流，会有很好的职业发展机会。',
          },
          reason_2: {
            title:
              '自己做过一些研究，有一定的了解，比如知道比特币的工作原理，知道 POW 的原理等。',
          },
          reason_3: {
            title:
              '通过自己的研究认为 Web3 的确可以解决很多现在情况下难以被解决的问题，对这个领域非常好奇。希望能够进一步了解学习这个行业。',
          },
          reason_4: {
            title:
              '通过自己的研究认为 Web3 是下一个大趋势，会很大程度上影响一些重要行业的运作方式，为世界创造新的价值。自己希望能加入这个潮流，做出贡献。',
          },
        },
      },

      header: {
        english_skills: '英语能力',
        basic: '基本信息',
        availability: '求职状态',
        technical_skills: '专业技能',
        experience: '经历',
        projects: '项目经历',
        web3: 'Web3',
        salary: '薪资要求',
      },

      show: {
        base: '基本薪资: ￥##value##/年',
        bonus: '奖金: ￥##min## - ￥##max##',
        stock: '股票价值: ##value##',
        salary_other: '其他',
        salary_per_hour: '以小时计的工作: ￥##value##/小时',
        salary_per_year: '全职年薪: ￥##value##/年',
        skills: '专业技能',
        topSkills: '你最强的技术能力',
        domainKnowledge: '你有哪些行业经验',
        interviewBy: '面试官：',
        liveCoding: '在线 Coding',
        liveCodingAt: '完成时间： ',
        softskills: '其他技能',
        track: 'Landd 中的记录',
        experience: '经历',
        workExperience: '工作经历',
        present: '至今',
        educationExperience: '教育经历',
        certification: '证书',
        projectExperience: '项目经历',
      },

      degree: {
        options: {
          doctor: {
            label: '博士及以上',
          },
          master: {
            label: '硕士',
          },
          bachelor: {
            label: '本科',
          },
          senior: {
            label: '专科',
          },
          others: {
            label: '其他',
          },
        },
      },
    },
    signup: {
      title: '招聘程序员',
      subtitle: '请留下您的信息，我们会联系您。',
      firstname: '名',
      lastname: '姓',
      company: '公司',
      contactNumber: '手机号码',
      email: '邮箱',
      wechat: '微信',
      website: '公司网站',
      position: '职位',
      size: '公司员工数',
      hiringFor: '您需要招聘什么职位',
      headcount: '请需要招聘多少人',
      submit: '提交',
      requireMessage: '请输入',
      jobOptions: {
        frontend: '前端工程师',
        backend: '后端工程师',
        web3_frontweb: 'Web3前端工程师',
        web3_backend: 'Web3后端工程师',
        smart_contract: '智能合约工程师',
        blockchain: '区块链工程师',
        fullstack_fe: '全栈工程师（偏前端）',
        fullstack_be: '全栈工程师（偏后端）',
        mobile: '移动工程师',
        qa: '测试',
        qa_dev: '测试工程师',
        devops: 'DevOps',
        data_scientist: '数据科学家',
        data_engineer: '数据工程师',
        machine_learning: '机器学习工程师',
        cloud_architect: '云架构师',
        architect: '架构师',
        safety: '安全工程师',
        network: '网络工程师',
        system: '系统工程师',
        game: '游戏开发',
        others: '其它',
      },
      roleOptions: {
        founder: '创始人',
        senior_manager: '高管',
        manager: '用人经理',
        hr: 'HR',
        others: '其它',
      },
    },
  },

  en: {
    profile: {
      englishSkill: {
        question: '您的英语怎么样?',
        options: {
          not_good: {
            title: '我英语水平一般',
            description:
              '我的英语水平不足以让我和别人交流，无论是通过书面还是口语。',
          },
          read_write: {
            title: '我可以通过书面英语流利交流',
            description:
              '我只能通过书面英语，比如写邮件或者聊天软件和别人交流。如果要让我直接口头和一个英语为母语的开发经理交流工作，这对我来说会很难，我们可能都很难听懂彼此在讲什么。',
          },
          normal_oral: {
            title: '基础口语能力',
            description:
              '我能通过口语和一个英语为母语的开发经理交流工作。大部分时间我们应该都能够听懂彼此，但是我可能说话会比较慢，也会要求对方说慢一点，有时候我们可能也需要重复彼此说过的话才能最好地让彼此理解。',
          },
          good_oral: {
            title: '流利的英语交流能力',
            description:
              '用口语和一个英语为母语的开发经理交流工作对我来说完全不成问题。我们彼此应该都能够很容易地理解对方。',
          },
        },
      },

      localeQuestion: '你现在想填写英文简历还是中文简历？',
      localeHint:
        '不用担心，如果你既想做团队是中国人的项目，又想做国际团队的项目，你之后还可以在你的简历页面创建两份不同语言的简历。',
      localeOption_1: {
        title: '英文简历',
        description:
          '如果你认为你的英文水平足够和客户直接交流，或者你主要想做海外的职位，那我们建议你先创建英文简历，这样和客户沟通更容易。',
      },
      localeOption_2: {
        title: '中文简历',
        description:
          '如果你认为你的英文水平不足以和客户直接交流，并且你用中文能更好地介绍自己，或者你主要想做团队为中国人为主的项目，那你可以先创建中文简历。我们就只会把你推荐给可以用中文直接交流的客户。',
      },

      country: {
        options: countryOptions,
      },

      remoteJob: {
        question: '你现在正在积极地寻找一份远程工作吗？*',
        options: {
          ready: {
            title: '我已经准备好开始一份新的远程工作',
            description:
              '我希望尽快寻找一份远程工作，如果有合适的工作机会我可以立即开始面试。',
          },
          accept: {
            title: '我对新的远程工作机会持开放心态',
            description:
              '我并不着急寻找一份新的远程工作，但如果有好的符合我兴趣的机会，我会考虑。',
          },
          not_interested: {
            title: '不看机会',
            description: '我目前不会开始一份新的远程工作，只是先看看。',
          },
        },
      },

      interestedJob: {
        question: '你对什么类型的远程工作机会感兴趣？*',
        options: {
          fulltime: {
            title: '远程全职',
            description: '至少8小时每天，40个小时每周',
          },
          parttime: {
            title: '远程兼职',
          },
          parttime_first: {
            title: '我可以先兼职，然后一个月内变成全职',
          },
        },
      },

      workHoursQuestion:
        '如果你选择了远程兼职，你每周能保证多少小时的工作时间？',
      workHoursUnit: '小时/周',

      jobLocation: {
        question: '你接受来自于哪里的远程工作机会？*',
        options: {
          inside: {
            title: '中国国内',
          },
          outside: {
            title: '海外公司',
          },
        },
      },

      attitudeForNightWork: {
        question: '你能接受在北京时间的晚上工作吗？*',
        hint: '因为我们有的客户的所在地会和国内有时差，所以可能会要求候选人的工作时间和其他团队成员有一定的重合。',
        options: {
          accept: {
            title: '可以接受晚上工作',
          },
          reject: {
            title: '不可以接受晚上工作',
          },
        },
      },

      lastestTime: {
        question: '你能接受晚上最晚工作到几点？*',
        options: {
          all_time: {
            title: '整晚',
          },
          specific_clock: {
            title: '凌晨##lastestTimeInput##点',
          },
        },
      },

      skillLevel: {
        unit: ' year##multi##',
        options: {
          beginner: 'Beginner',
          experienced: 'Experienced',
          expert: 'Expert',
        },
      },

      workExperience: {
        description: '##year## years of professional developer experience',
      },

      remoteExperience: {
        description: '##year## years of remote experience',
      },

      attitudeForWebThree: {
        question: '你愿意加入一家Web3的公司吗？',
        options: {
          yes: {
            title: '是',
            preview: '愿意加入一家Web3的公司',
          },
          no: {
            title: '否',
            preview: '不愿意加入一家Web3的公司',
          },
        },
      },

      understandWebThree: {
        question:
          '你之前有任何Web3的开发经验吗？比如智能合约，区块链开发，相关前端开发等？',
        options: {
          yes: {
            title: '是',
            preview: '有Web3的开发经验',
          },
          no: {
            title: '否',
            preview: '没有Web3的开发经验',
          },
        },
      },

      experienceForWebThree: {
        question: '你怎样描述你对Web3/Crypto/Blockchain的理解程度？',
        options: {
          little: {
            title: '了解得很少，只是偶尔看一些相关的新闻或者基础的介绍文章。',
          },
          beginner: {
            title:
              '自己做过一些研究，有一定的了解，比如知道比特币的工作原理，知道POW的原理等。',
          },
          experience: {
            title:
              '有比较深的了解程度。比如懂得多种不同的consensus mechanism，smart contracts的工作方式，了解多个不同的blockchain和他们适用的场景等。自己也关注Web3的公司，也会进行投资。',
          },
          expert: {
            title:
              '非常深的理解。自己参与过相关的项目，对一系列的相关领域都有研究，比如blockchain layers, consensus mechanisms, smart contracts, bridges, DeFi, Wallet types, etc. 对整体的生态也有不错的研究，对一些常见的问题的解决方案也比较熟悉。',
          },
        },
      },

      reasonForWebThree: {
        question: '你为什么对Web3感兴趣。',
        options: {
          reason_1: {
            title:
              '认为 Web3 是互联网下一个发展的潮流，会有很好的职业发展机会。',
          },
          reason_2: {
            title:
              '自己做过一些研究，有一定的了解，比如知道比特币的工作原理，知道 POW 的原理等。',
          },
          reason_3: {
            title:
              '通过自己的研究认为 Web3 的确可以解决很多现在情况下难以被解决的问题，对这个领域非常好奇。希望能够进一步了解学习这个行业。',
          },
          reason_4: {
            title:
              '通过自己的研究认为 Web3 是下一个大趋势，会很大程度上影响一些重要行业的运作方式，为世界创造新的价值。自己希望能加入这个潮流，做出贡献。',
          },
        },
      },

      header: {
        english_skills: '英语能力',
        basic: '基本信息',
        availability: '求职状态',
        technical_skills: '专业技能',
        experience: '经历',
        projects: '项目经历',
        web3: 'Web3',
        salary: '薪资要求',
      },

      show: {
        base: '基本薪资: ￥##value##/年',
        bonus: '奖金: ￥##min## - ￥##max##',
        stock: '股票价值: ##value##',
        salary_other: '其他',
        salary_per_hour: '以小时计的工作: ￥##value##/小时',
        salary_per_year: '全职年薪: ￥##value##/年',
        skills: 'Skills',
        topSkills: 'Top technical skills',
        domainKnowledge: 'Domain knowledge',
        interviewBy: 'Candidate interview by',
        liveCoding: 'Live Coding',
        liveCodingAt: 'Taken on ',
        softskills: 'Soft skills',
        track: 'Track record on Landd',
        experience: 'Experience',
        workExperience: 'Work experience',
        present: 'present',
        educationExperience: 'Education',
        certification: 'Qualifications / certificates',
        projectExperience: 'Project',
      },

      degree: {
        options: {
          doctor: {
            label: '博士及以上',
          },
          master: {
            label: '硕士',
          },
          bachelor: {
            label: '本科',
          },
          senior: {
            label: '专科',
          },
          others: {
            label: '其他',
          },
        },
      },
    },
    signup: {
      title: 'Hire Now',
      subtitle:
        'Please fill in the form below and we will contact you shortly.',
      firstname: 'First name',
      lastname: 'Last name',
      company: 'Company',
      contactNumber: 'Your contact number',
      email: 'Your email',
      website: 'Company website',
      wechat: 'Wechat',
      position: 'Your role',
      size: 'Company size',
      hiringFor: 'I am hiring for',
      headcount: 'How many headcount do you need to fill？',
      submit: 'Submit',

      requireMessage: 'Please enter',

      jobOptions: {
        frontend: 'Front-end engineer',
        backend: 'Back-end engineer',
        web3_frontweb: 'Web3 Front-end Engineer',
        web3_backend: 'Web3 Back-end Engineer',
        smart_contract: 'Smart contracts developer',
        blockchain: 'Blockchain Engineer',
        fullstack_fe: 'Full stack engineer(more front-end) ',
        fullstack_be: 'Full stack engineer(more back-end) ',
        mobile: 'Mobile Engineer',
        qa: 'QA',
        qa_dev: 'Software engineer in testing',
        devops: 'DevOps Engineer',
        data_scientist: 'Data Scientist',
        data_engineer: 'Data Engineer',
        machine_learning: 'Machine learning engineer',
        cloud_architect: 'Cloud Architect',
        architect: 'Solution Architect',
        safety: 'Security Engineer',
        network: 'Networking/Infrastructure Engineer',
        system: 'System Administrator',
        game: 'Game Developer',
        others: 'Other',
      },
      roleOptions: {
        founder: 'Founder',
        senior_manager: 'C-level',
        manager: 'Hiring manager',
        hr: 'Recruiter',
        others: 'Other',
      },
    },
  },
};

const transfer = (
  path: string,
  local: string,
  replacement?: { [key: string]: any }
): string => {
  let value = I18n[local];
  try {
    const segments = path.split('.');
    for (let i = 0; i < segments.length; i += 1) {
      const key = segments[i];
      if (value[key] === undefined) {
        return '';
      } else {
        value = value[key];
      }
    }
    if (typeof value === 'string' && replacement) {
      Object.keys(replacement).forEach((key) => {
        value = value.replaceAll(`##${key}##`, replacement[key]);
      });
    }
    return value;
  } catch (e) {
    console.log(path);
    return '';
  }
};

export const getTransfer = (locale: string) => {
  return (path: string, replacement?: { [key: string]: any }) => {
    return transfer(path, locale, replacement);
  };
};
