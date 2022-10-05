/*
 * @LastEditors: wmy
 * @Description: 功能描述
 * @Date: 2022-06-05 15:05:13
 * @Author: wmy
 * @LastEditTime: 2022-06-11 16:38:10
 */

import DeveloperLogginLayout from 'components/layouts/DeveloperLogginLayout';
import Image from 'next/image';
import styles from './styles.module.scss';
import DeveloperSidebarLayout from 'components/layouts/DeveloperSidebarLayout';

const faqs = [
  {
    title: '我什么时候会被邀请进行下一步的面试？',
    answer:
      '如果有适合你的职位，我们会尽快安排你面试。但因为我们现在还在beta测试阶段，所以如果我们暂时没有合适你的职位，或者有时候因为我们面试官的时间紧张，也可能会过一段时间再邀请你面试。不过请不用担心，只要你完成了简历填写，一旦有合适的职位，我们就会安排你进行下一步的面试。',
  },
  {
    title: 'Landd 的面试是什么样的？',
    answer: [
      '我们会根据候选人的具体情况进行面试，面试有可能包括笔试，live coding和与我们面试官的远程技术面试，英语语言面试等。',
    ],
  },
  {
    title: '我有问题，可以联系Landd吗？',
    answer: '可以。你可以加我们客服微信Jackyctgx 联系Landd。',
  },
];

const Dashboard = () => {
  return (
    <DeveloperSidebarLayout activeMenu='dashboard'>
      <div className={styles.container}>
        <div className={styles.title}>怎样在 Landd 上申请远程职位</div>
        <div className={styles.itemsWrapper}>
          <div className={styles.item}>
            <div className={styles.imgWrapper}>
              <Image
                src='/developer_home_icon_1.svg'
                width={40}
                height={40}
                alt='hirerring'
              />
            </div>
            <div className={styles.stepTitle}>01</div>
            <div className={styles.stepBody}>完成简历填写</div>
          </div>
          <div className={styles.item}>
            <div className={styles.imgWrapper}>
              <Image
                src='/developer_home_icon_2.svg'
                width={40}
                height={40}
                alt='hirerring'
              />
            </div>
            <div className={styles.stepTitle}>02</div>
            <div className={styles.stepBody}>
              我们会联系你
              <br />
              安排面试时间
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.imgWrapper}>
              <Image
                src='/developer_home_icon_3.svg'
                width={40}
                height={40}
                alt='hirerring'
              />
            </div>
            <div className={styles.stepTitle}>03</div>
            <div className={styles.stepBody}>
              通过面试后我们会与向你推荐可能合适的职位
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.imgWrapper}>
              <Image
                src='/developer_home_icon_4.svg'
                width={40}
                height={40}
                alt='hirerring'
              />
            </div>
            <div className={styles.stepTitle}>04</div>
            <div className={styles.stepBody}>
              和客户交流，了解职位和接受客户面试
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.imgWrapper}>
              <Image
                src='/developer_home_icon_4.svg'
                width={40}
                height={40}
                alt='hirerring'
              />
            </div>
            <div className={styles.stepTitle}>05</div>
            <div className={styles.stepBody}>开始工作</div>
          </div>
        </div>

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
    </DeveloperSidebarLayout>
  );
};

Dashboard.layout = DeveloperLogginLayout;

export default Dashboard;
