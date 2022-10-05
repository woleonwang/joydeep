/*
 * @LastEditors: wmy
 * @Description: 功能描述
 * @Date: 2022-05-08 16:14:26
 * @Author: wmy
 * @LastEditTime: 2022-05-08 17:13:09
 */
import DeveloperUnlogginLayout from 'components/layouts/DeveloperUnlogginLayout';
import Link from 'next/link';
import styles from './style.module.scss';

const faqs = [
  {
    title: 'Landd 到底是做什么的？',
    answer:
      '在新冠疫情以后，世界上大多数的科技公司都开始转向远程优先的工作模式。这使得越来越多的公司愿意在全世界招聘优秀的远程人才，很多原本只向公司所在地开放的职位也对全世界所有满足公司要求的优秀人才远程开放。Landd的目标就是帮助中国优秀的程序员加入到这个远程办公的大潮中，帮助中国的程序员获得全世界优秀公司的远程工作职位。',
  },
  {
    title: 'Landd 和其它类似的招聘网站有什么不同？',
    answer: [
      'Landd 不是一个传统形式的招聘网站。在 Landd, 你不需要自己花很多功夫搜索工作机会，一旦你通过我们的面试加入了我们，我们会在你之后的职业生涯持续地为你推荐合适的远程工作机会。',
      '需要通过面试才能加入 Landd。世界各地的客户因为信任 Landd 提供的程序员的质量所以才会持续在 Landd 招聘。所以，只有能够通过 Landd 面试的程序员才能加入我们。面试包括技术面试和语言面试等。',
      '我们会筛选客户。像筛选程序员一样，在我们把一个项目/职位推荐给程序员之前，我们会做前期的筛选，保证客户是靠谱的。',
      '我们的职位主要来自于海外的，比如硅谷，新加坡等。让你可以在任何地方加入世界最优秀的团队。',
    ],
  },
  {
    title: 'Landd 上的职位来自于哪里？',
    answer: '目前，Landd上的职位大多来自于海外的科技公司，比如新加坡，硅谷等。',
  },
  {
    title: 'Landd 上的职位是什么类型的职位？是全职还是兼职？',
    answer: [
      '目前Landd上的职位主要是各种开发职位，比如前端后端全栈，Web3开发等。',
      '目前我们主要专注在远程全职职位，但偶尔也会有兼职职位。',
    ],
  },
  {
    title: 'Landd 是哪里的公司？',
    answer:
      'Landd是一个注册在新加坡的公司，我们自己也是一个远程办公的公司，我们的员工来自于世界各地。',
  },
  {
    title: '什么样的人可以加入Landd？',
    answer:
      '有一定经验的程序员。由于我们的客户主要是招聘有一定经验的软件工程师，所以你需要能够通过我们的面试，达到一定的技术要求才可以加入 Landd。',
  },
  {
    title: '我需要能够用英语口语进行工作交流才能加入吗？',
    answer:
      '英语交流能力不是必须的。但是如果你能够用英语流利地和国外的公司交流的话，那当然是最好的，这可以节省掉中间很多的交流成本。但如果你不能够用英语和国外客户交流，也不用担心，我们会用其它的方式让你参入到工作中。',
  },
  {
    title: 'Landd提供肉身出国的工作机会吗？',
    answer:
      '看情况。这主要是因为对于大多说海外客户来说，如果要提供当地的职位就会涉及到签证申请等一系列问题，大部分的公司没有这个能力。当然，如果我们的客户提供这样的机会，我们也会和合适的候选人沟通。',
  },
  {
    title: 'Landd对程序员是免费的吗？',
    answer: '是的，我们对程序员完全免费。',
  },
  {
    title: '1怎么样才能加入？',
    answer: [
      <Link key='link' href='/developers/sign_up'>
        注册账号
      </Link>,
      '完成简历填写',
      '通过我们的面试',
      '我们向你推荐合适的职位',
      '通过客户的面试',
      '开始工作',
    ],
  },
];
const Faq = () => {
  return (
    <div className={styles.faqContainer}>
      <div className={styles.title}>常见问题</div>
      <div className={styles.questionWrapper}>
        {faqs.map((faq, index) => {
          return (
            <div className={styles.questionBlock} key={faq.title}>
              <div className={styles.question}>
                {index + 1}. {faq.title}
              </div>
              <div className={styles.answer}>
                {typeof faq.answer === 'string'
                  ? faq.answer
                  : faq.answer.map((item, index) => {
                      return (
                        <div className={styles.item} key={index}>
                          <div className={styles.index}>{index + 1}.</div>
                          <div className={styles.content}>{item}</div>
                        </div>
                      );
                    })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Faq.layout = DeveloperUnlogginLayout;

export default Faq;
