/*
 * @LastEditors: wmy
 * @Description: 功能描述
 * @Date: 2022-06-05 15:05:13
 * @Author: wmy
 * @LastEditTime: 2022-06-26 18:19:16
 */

import DeveloperLogginLayout from 'components/layouts/DeveloperLogginLayout';
import ReactCopyToClipboard from 'react-copy-to-clipboard';
import { useEffect, useState } from 'react';
import request from 'utils/request';
import styles from './styles.module.scss';
import DeveloperSidebarLayout from 'components/layouts/DeveloperSidebarLayout';
import { Input, message } from 'antd';

const faqs = [
  {
    title: '推荐奖金具体如何计算？',
    answer: [
      '比如你推荐的候选人在 Landd 上找到了一份全职远程工作，每个月的薪水是 5 万元，则你每个月获得的推荐奖金为 50000 * 2% = 1000元。我们会在你推荐候选人工作的第 6 个月和第 12 个月结束为你各发放 6000 元，总共 12000 元的奖金。',
      '如果你推荐的候选人只工作了 9 个月，则你会获得 50000 * 2% * 9 = 9000 的奖金。但如果这个候选人后面继续工作，你仍会获得剩下 3 个月的奖金。',
      '每个推荐的候选人的奖金总额不超过 10w 人民币。',
    ],
  },
  {
    title: '推荐有效性有时间限制吗？ ',
    answer:
      '没有。如果候选人是你推荐注册的，无论他何时在Landd开始工作，你都能获得奖金。',
  },
  {
    title: '推荐奖金是从我推荐的候选人的未来薪资里扣的吗？',
    answer:
      '不是。你获得的奖金是由Landd额外付出的，对你推荐的候选人的薪资不会有任何的影响。',
  },
  {
    title:
      '如果我推荐的候选人没有通过我的专属推荐链接注册，那我还能获得推荐奖金吗？',
    answer:
      '不可以。我们只能通过你的推荐奖金确定某个首选人是否由你推荐，所以请确保你推荐的候选人用你的专属推荐链接注册。',
  },
  {
    title: '我有问题可以联系 Landd 吗？',
    answer: '可以加微信 jackyctgx 联系 Landd。',
  },
];

interface IRecord {
  id: number;
  name: string;
  status: 'not_board' | 'board';
  award: number;
}

const Recommend = () => {
  const [recommendToken, setRecommendToken] = useState('');
  const [recommendRecords, setRecommendRecords] = useState<IRecord[]>([]);

  const href = `${window.location.origin}?recommend_token=${recommendToken}`;

  useEffect(() => {
    fetchRecommendToken();
    fetchRecommendRecords();
  }, []);

  const fetchRecommendToken = async () => {
    const data = await request.get('users.recommendToken');
    if (data.code === 0) {
      setRecommendToken(data.data.token);
    }
  };

  const fetchRecommendRecords = async () => {
    const data = await request.get('users.recommendRecords');
    if (data.code === 0) {
      setRecommendRecords(data.data.recommend_records);
    }
  };

  return (
    <DeveloperSidebarLayout activeMenu='recommend'>
      <div className={styles.container}>
        <div className={styles.inviteContainer}>
          <div className={styles.title}>
            邀请候选人加入 Landd
            <br />
            获得相当于你邀请的候选人未来薪资 2% 的奖金。
          </div>
          <div className={styles.hint}>
            每个邀请的候选人的总奖金不超过 10 万人民币。
          </div>
          <div className={styles.inputWrapper}>
            <Input value={href} size='large' readOnly />
            <ReactCopyToClipboard
              key='copy'
              text={href}
              onCopy={() => message.success('拷贝成功')}
            >
              <div className={styles.copyBtn}>拷贝链接</div>
            </ReactCopyToClipboard>
          </div>
        </div>

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

        <div className={styles.recommendRecordsWrapper}>
          <div className={styles.header}>
            <div className={styles.col}>候选人姓名</div>
            <div className={styles.col}>目前状态</div>
            <div className={styles.col}>已经获得奖金</div>
          </div>
          <div className={styles.body}>
            {recommendRecords.length > 0 ? (
              recommendRecords.map((record) => (
                <div key={record.id} className={styles.row}>
                  <div className={styles.col}>{record.name || '未设置'}</div>
                  <div className={styles.col}>
                    {record.status === 'not_board' ? '未入职' : '已入职'}
                  </div>
                  <div className={styles.col}>￥{record.award}</div>
                </div>
              ))
            ) : (
              <div className={styles.empty}>暂无记录</div>
            )}
          </div>
        </div>
      </div>
    </DeveloperSidebarLayout>
  );
};

Recommend.layout = DeveloperLogginLayout;

export default Recommend;
