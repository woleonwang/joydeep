/*
 * @LastEditors: wmy
 * @Description: 功能描述
 * @Date: 2022-05-08 16:14:26
 * @Author: wmy
 * @LastEditTime: 2022-06-12 21:19:52
 */
import RecruiterUnlogginLayout from 'components/layouts/RecruiterUnlogginLayout';
import Link from 'next/link';
import styles from './style.module.scss';

const faqs = [
  {
    title: 'What is Landd? What does Landd do?',
    answer:
      'Landd is a talent platform that helps companies hire top remote software engineers around the world, with a focus on candidates in Asia at the moment. We source, vet technical talents so our clients can build top-notch remote engineering teams quickly.',
  },
  {
    title: 'How is Landd different from a traditional job board?',
    answer: [
      'Result-oriented model. Unlike traditional job boards which are mostly open marketplaces for employers to post job ads without any guarantee to find the right candidates, Landd delivers pre-vetted software engineers to our clients based on their specific needs. ',
      'Rigorous vetting. Landd receives a large number of applications every day, we only accept a small fraction of candidates who can pass our rigorous technical tests and interview process. ',
      'Accurate matching. Our talent consultant will help clients quickly identify the right candidates to hire. ',
      'Easy process. We help our clients manage our candidates’ payroll so you do not need to worry about wiring money to a different country.',
      'Result-based fee. If you did not successfully hire candidates you need on Landd, you pay nothing.',
    ],
  },
  {
    title: 'What kind of candidates do Landd provide?',
    answer: [
      'At the moment, we are focused on candidates in the software engineering space, such as front-end, back-end, full-stack, mobile, web3, etc.',
      'Most of our candidates are senior candidates who have previous experiences of working in a tech company.',
      'All candidates on Landd have passed our rigorous vetting process so you can rest assured that they are all technically sound.',
    ],
  },
  {
    title:
      'Are software engineers on Landd looking for full-time jobs or project-based engagements?',
    answer:
      'Both. We have candidates who are primarily looking for full-time remote jobs but also candidates who want to work part-time on individual projects. ',
  },
  {
    title: 'Do you help hire locally？',
    answer:
      'While this is not our focus at the moment, we do help clients’ hire locally too when we have suitable candidates. ',
  },
  {
    title: 'What is the process to hire a developer through Landd?',
    answer: [
      <div key='hire_now'>
        Fill up the questionnaire by clicking{' '}
        <Link href='/hire_now'>Hire Developers Now</Link>.
      </div>,
      'We will reach out to you to fully understand your hiring needs.',
      'We present you a list of pre-vetted candidates matching your criteria.',
      'You interview the candidates for their cultural fit.',
      'Onboard the candidates and start coding!',
    ],
  },
  {
    title: 'Can Landd help build an entire team?',
    answer:
      'Yes, we can help you build a team of remote engineers. We can even help you find a team lead to manage your remote team on Landd.',
  },
  {
    title: 'Are there any upfront costs to use Landd?',
    answer:
      'No. We do not charge you any fee if you did not find candidates you need on Landd.',
  },
  {
    title: 'Where is the Landd company based?',
    answer: 'Landd is a Singapore registered company.',
  },
];
const Faq = () => {
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

Faq.layout = RecruiterUnlogginLayout;

export default Faq;
