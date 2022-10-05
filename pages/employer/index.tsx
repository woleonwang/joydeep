/*
 * @Author: wmy
 * @Date: 1985-10-26 16:15:00
 * @LastEditTime: 2022-06-11 15:45:04
 * @LastEditors: wmy
 * @Description: 功能描述
 */
import classnames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import RecruiterUnlogginLayout from 'components/layouts/RecruiterUnlogginLayout';
import styles from './style.module.scss';

const Employer = () => {
  return (
    <div>
      <div className={classnames(styles.blockWrapper, styles.banner)}>
        <div className={styles.block}>
          <div className={styles.left}>
            <div className={styles.title}>
              Hire pre-vetted
              <br />
              remote developers
              <br />
              fast
            </div>
            <div className={styles.body}>
              Having trouble hiring locally? We source, vet and manage a large
              pool of top-notch remote software engineers who are ready to work
              so you can build your engineering teams fast.
            </div>
            <Link href='/hire_now'>
              <a>
                <div className={styles.blackBtn}>Hire Developers Now</div>
              </a>
            </Link>
          </div>
          <div className={styles.right} />
        </div>
      </div>

      <div className={classnames(styles.blockWrapper)}>
        <div className={classnames(styles.block, styles.second)}>
          <div className={styles.innerBg} />
          <div className={styles.secondTitle}>
            In today’s remote-first world,
            <br />
            competition for talent is global
          </div>
          <div className={styles.secondBody}>
            Why confine your talent acquisition strategy to the limited local
            talent pool
            <br /> when you can hire top-notch remote software engineers
            globally?
          </div>
          <div className={styles.secondBody}>
            We want to be your competitive advantage by helping you build
            world-class
            <br />
            remote engineering teams fast and at a lower cost.
          </div>
          <Link href='/faq'>
            <a>
              <div className={styles.whiteBtn} style={{ position: 'relative' }}>
                Find out more
              </div>
            </a>
          </Link>
        </div>
      </div>

      <div className={classnames(styles.blockWrapper)}>
        <div className={styles.generalBlock}>
          <div className={styles.left}>
            <div className={styles.title}>
              Build global engineering teams fast
            </div>
            <div className={styles.body}>
              Tired of competing locally with tech giants? We help you source
              across Asia and beyond to find the top remote software engineers
              so you can build a strong team ready to deliver in a matter of
              days.
            </div>
          </div>
          <div className={styles.right}>
            <Image
              src='/recruiter_home_1.svg'
              width={560}
              height={560}
              alt='hirerring'
            />
          </div>
        </div>
      </div>

      <div className={classnames(styles.blockWrapper)}>
        <div className={styles.generalBlock}>
          <div className={styles.left}>
            <Image
              src='/recruiter_home_2.svg'
              width={560}
              height={560}
              alt='hirerring'
            />
          </div>
          <div className={styles.right}>
            <div className={styles.title}>
              Rigorous vetting means guaranteed quality
            </div>
            <div className={styles.body}>
              Candidates have to pass our rigorous vetting process to join
              Landd. That means you can have peace of mind when you work with a
              Landd engineer and save tons of interviewing time.
            </div>
          </div>
        </div>
      </div>

      <div className={classnames(styles.blockWrapper)}>
        <div className={styles.generalBlock}>
          <div className={styles.left}>
            <div className={styles.title}>Easy to manage</div>
            <div className={styles.body}>
              We do the heavylifting by helping you manage your payroll so you
              can focus on what matters the most, your products.
            </div>
          </div>
          <div className={styles.right}>
            <Image
              src='/recruiter_home_3.svg'
              width={560}
              height={560}
              alt='hirerring'
            />
          </div>
        </div>
      </div>

      <div className={classnames(styles.blockWrapper)}>
        <div className={styles.blocksContainer}>
          <div className={styles.title}>How it works</div>
          <div className={styles.itemsWrapper}>
            <div className={styles.item}>
              <Image
                src='/developer_home_icon_1.svg'
                width={40}
                height={40}
                alt='hirerring'
              />
              <div className={styles.stepTitle}>01</div>
              <div className={styles.stepBody}>
                Click on&nbsp;
                <Link href='/hire_now'>Hire Developers Now</Link>
                &nbsp;to fill up the questionnaire
              </div>
            </div>
            <div className={styles.item}>
              <Image
                src='/developer_home_icon_2.svg'
                width={40}
                height={40}
                alt='hirerring'
              />
              <div className={styles.stepTitle}>02</div>
              <div className={styles.stepBody}>
                We will contact you to fully understand your requirements
              </div>
            </div>
            <div className={styles.item}>
              <Image
                src='/developer_home_icon_3.svg'
                width={40}
                height={40}
                alt='hirerring'
              />
              <div className={styles.stepTitle}>03</div>
              <div className={styles.stepBody}>
                We will provide a short list of pre-vetted candidates
              </div>
            </div>
            <div className={styles.item}>
              <Image
                src='/recruiter_home_icon_4.svg'
                width={40}
                height={40}
                alt='hirerring'
              />
              <div className={styles.stepTitle}>04</div>
              <div className={styles.stepBody}>
                Interview the candidates and make an offer
              </div>
            </div>
            <div className={styles.item}>
              <Image
                src='/developer_home_icon_4.svg'
                width={40}
                height={40}
                alt='hirerring'
              />
              <div className={styles.stepTitle}>05</div>
              <div className={styles.stepBody}>Start coding</div>
            </div>
          </div>
        </div>
      </div>

      <div className={classnames(styles.blockWrapper)}>
        <div className={classnames(styles.block, styles.last)}>
          <div className={styles.lastBody}>
            Build your engineering competitive advantage with Landd now
          </div>
          <div className={styles.split} />
          <Link href='/hire_now'>
            <a>
              <div className={styles.blackBtn}>Hire now</div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

Employer.layout = RecruiterUnlogginLayout;

export default Employer;
