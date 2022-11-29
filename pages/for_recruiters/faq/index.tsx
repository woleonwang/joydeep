/*
 * @LastEditors: wmy
 * @Description: 功能描述
 * @Date: 2022-05-08 16:14:26
 * @Author: wmy
 * @LastEditTime: 2022-06-12 21:19:52
 */
import RecruiterUnlogginLayout from 'components/layouts/RecruiterUnlogginLayout';
import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './style.module.scss';

type TAnswer =
  | string
  | (string | { index: number | undefined; content: string | ReactNode })[];

const faqs: { title: string; answer: TAnswer }[] = [
  {
    title: 'What is Landd Recruiter? What does Landd Recruiter do?',
    answer:
      'Landd Recruiter’s mission is to help experienced recruiters earn more and achieve personal freedom by enabling them to build their own business. We provide a suite of tools and services such as personal brand building, clients/candidates acquisition, admin support, and endorsement gathering, etc to make build your own recruitment business super easy.  The founders of Landd are experienced recruiters themselves, they believe that the legacy recruitment agency model no longer fairly compensates recruiters in today’s world. Most of the times, no matter how big a recruitment company is, it is the specific individual recruiter who delivers to a job, but he/she only gets a small piece of the recruitment fee. It is unfair and unnecessary. Landd exists to fix this. ',
  },
  {
    title: 'I am a recruiter, how can Landd help me exactly?',
    answer: [
      {
        index: undefined,
        content:
          'To put is simple, we help you set up your own “virtual business”. You will have your own recruiter brand, get more relevant jobs/candidates, make more placements and get the majority of the recruitment fee while we take care all the admin chores. Our tools/services include:',
      },
      {
        index: 1,
        content:
          'Personal brand building. Landd has custom-designed a recruiter profile page that can showcase your expertise, track record, job/candidate resources, endorsements, etc. so that you can stand out from the competition. It also makes it easier for candidates and clients to find you and build trust with you easily.',
      },
      {
        index: 2,
        content:
          'Clients/candidate acquisition. Landd constantly refer clients and candidates to you based on your expertise and resources so that you can work on the jobs/with candidates that have the highest chance to result in a placement.',
      },
      {
        index: 3,
        content:
          'Retain 90% of your recruitment fee. If you own the clients and candidates in a placement, you get 90% of the placement fee, compared to only 20%-40% in a legacy recruitment agency. ',
      },
      {
        index: 4,
        content:
          'Admin support. We provide necessary admin supports such as contract signing with a client, receive fees from a client, get recruitment licences, etc. We run the chores so you can focus on what really matters: recruitment. ',
      },
    ],
  },
  {
    title: 'Who can join Landd?',
    answer:
      'Any recruiter who no longer wants to just be ”one of the employees”, who wants to keep the majority of the recruitment fees and who wants to build a business centred on himself/herself can join Landd. ',
  },
  {
    title: 'Do you actually pay out 90% of placement fee? What is the catch？',
    answer: [
      'Yes, it is 100% true and there is no catch. If you own the client and candidate in a placement, you get 90% of the placement fee. Think about it, you found the client, you delivered the candidate, why would you agree to anything less?',
      'We do charge additional fees if we provided the job or candidate in a placement, but even in that case, you will still earn much more than in a legacy recruitment agency.',
    ],
  },
  {
    title: 'Is there any upfront costs to join Landd?',
    answer:
      'No. It is completely free to join Landd. We only charge you a fee when you make a placement. ',
  },
  {
    title: 'Do I get paid a fixed salary if I join Landd?',
    answer:
      'No, we provide tools and supports to help recruiters build their own business. You are not an employee of Landd so we do not pay any fixed salary. ',
  },
  {
    title: 'Do you help apply for recruiter licences?',
    answer:
      'Yes, we help you apply for licences and make sure you stay compliant all the time. ',
  },
];

const Faq = () => {
  const genContent = (answer: TAnswer) => {
    if (typeof answer === 'string') {
      return answer;
    } else {
      return answer.map((item, index) => {
        if (typeof item === 'object') {
          return (
            <div className={styles.item} key={item.index}>
              {item.index && <div className={styles.index}>{item.index}.</div>}
              <div className={styles.content}>{item.content}</div>
            </div>
          );
        } else {
          return (
            <div className={styles.item} key={index}>
              <div className={styles.index}>{index + 1}.</div>
              <div className={styles.content}>{item}</div>
            </div>
          );
        }
      });
    }
  };
  return (
    <div className={styles.faqContainer}>
      <div className={styles.title}>FAQ</div>
      <div className={styles.questionWrapper}>
        {faqs.map((faq, index) => {
          return (
            <div className={styles.questionBlock} key={faq.title}>
              <div className={styles.question}>
                {index + 1}. {faq.title}
              </div>
              <div className={styles.answer}>{genContent(faq.answer)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Faq.layout = RecruiterUnlogginLayout;

export default Faq;
