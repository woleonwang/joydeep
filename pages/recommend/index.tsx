/*
 * @LastEditors: wmy
 * @Description: 功能描述
 * @Date: 2022-06-05 15:05:13
 * @Author: wmy
 * @LastEditTime: 2022-06-13 23:36:09
 */

import styles from './styles.module.scss';
import DeveloperUnlogginLayout from 'components/layouts/DeveloperUnlogginLayout';
import classnames from 'classnames';
import router from 'next/router';
import Image from 'next/image';

const faqs = [
  {
    title: '谁可以加入推荐挣奖金计划？',
    answer:
      '任何人。不管你是程序员，还是猎头，还是你做过HR，只要你有优秀的愿意做全职或兼职的远程工作的程序员资源，都可以加入。',
  },
  {
    title: '我要如何进行推荐？',
    answer: [
      <div key='li'>
        <div>首先你需要注册一个 Landd 账号。</div>
        <li>
          程序员账号。如果你自己是程序员，也想要加入平台的话，可以直接点击“找远程工作”注册正常的程序员账号。注册后我们会为你自动生成你专属的推荐链接。
        </li>
        <li>
          非程序员。如果你自己不是程序员，只是想为我们推荐候选人，那可以点击“推荐挣奖金”注册推荐人账号。注册后我们会自动为你生成你专属的推荐链接。
        </li>
      </div>,
      '将你的推荐链接发给候选人，让你想要推荐的候选人用你的推荐链接进行注册。',
      '当你推荐的候选人成功加入 Landd，并在 Landd 开始工作后，我们会每隔半年向你发放一次奖金。',
    ],
  },
  {
    title: '推荐奖金具体如何计算？',
    answer: [
      '比如你推荐的候选人在Landd上找到了一份全职远程工作，每个月的薪水是5万元，则你每个月获得的推荐奖金为 50000*2%= 1000元。我们会在你推荐候选人工作的第6个月和第12个月结束为你各发放6000元，总共12000元的奖金。',
      '如果你推荐的候选人只工作了9个月，则你会获得50000*2%*9 = 9000的奖金。但如果这个候选人后面继续工作，你仍会获得剩下3个月的奖金。',
      '每个推荐的候选人的奖金总额不超过10w人民币。',
    ],
  },
  {
    title: '推荐奖金是从我推荐的候选人的未来薪资里扣的吗？',
    answer:
      '不是。你的奖金是由Landd额外付出的，对你推荐的候选人的薪资不会有任何的影响。',
  },
  {
    title: '推荐有效性有时间限制吗？',
    answer:
      '没有。如果候选人是你推荐注册的，无论他何时在Landd开始工作，你都能获得奖金。',
  },
];

interface IRecord {
  id: number;
  name: string;
  status: 'not_board' | 'board';
  award: number;
}

const Recommend = () => {
  const goToSignup = () => router.push('/developers/sign_up');

  return (
    <div className={styles.container}>
      <div className={classnames(styles.banner)}>
        <div className={styles.block}>
          <div className={styles.left}>
            <div className={styles.title}>
              邀请程序员加入Landd
              <br />
              即可获得推荐奖金
            </div>
            <div className={styles.body}>
              不管你是程序员，身边有感兴趣进行远程工作的朋友；或者你是猎头，手里有这方面的资源，都可以加入我们的推荐挣奖金计划。你每推荐成功一个候选人，我们都会付给你相当于这个候选人未来薪资2%的推荐奖金。
            </div>
            <div className={styles.blackBtn} onClick={goToSignup}>
              立即推荐
            </div>
          </div>
          <div className={styles.right}>
            <Image
              src={'/recommend_banner.svg'}
              width={560}
              height={560}
              alt='recommend'
            />
          </div>
        </div>
      </div>

      <div className={classnames(styles.blockWrapper)}>
        <div className={styles.title}>如何挣推荐奖金？</div>
        <div className={styles.itemsWrapper}>
          <div className={styles.item}>
            <div className={styles.stepTitle}>01</div>
            <div className={styles.stepBody}>注册账号，获得你的推荐链接</div>
          </div>
          <div className={styles.item}>
            <div className={styles.stepTitle}>02</div>
            <div className={styles.stepBody}>
              让你的朋友通过你的推荐链接注册
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.stepTitle}>03</div>
            <div className={styles.stepBody}>
              当你的朋友在平台完成一份工作时，我们将向你发放推荐奖金
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ marginTop: 120 }}
        className={classnames(styles.blockWrapper)}
      >
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
                          <div className={styles.questionItem} key={index}>
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
      <div className={styles.footerContainer}>
        <div className={styles.footerBlackBtn} onClick={goToSignup}>
          立即推荐
        </div>
      </div>
    </div>
  );
};

Recommend.layout = DeveloperUnlogginLayout;

export default Recommend;
