/*
 * @LastEditors: wmy
 * @Description: 功能描述
 * @Date: 2022-06-12 21:45:31
 * @Author: wmy
 * @LastEditTime: 2022-06-12 22:16:05
 */
import classnames from 'classnames';
import Image from 'next/image';
import styles from './style.module.scss';
import DeveloperUnlogginLayout from 'components/layouts/DeveloperUnlogginLayout';
import router from 'next/router';
import Link from 'next/link';

const MobileDevelopers = () => {
  const goToSignup = () => {
    router.push('/developers/sign_up');
  };

  return (
    <div>
      <div className={classnames(styles.blockWrapper, styles.banner)}>
        {/* <Image src='/developer_home_banner_2.svg' /> */}

        <div className={styles.title}>帮中国程序员3获得全世界的远程工作机会</div>
        <div className={styles.body}>
          我们已经进入到一个远程优先的世界，全球各地的公司都在世界各地招聘最优秀的程序员。但目前大部分的中国程序员还很难接触到这些机会，我们希望填补这个空白，让中国的优秀程序员告别内卷，获得全世界最优秀公司的远程工作机会。
        </div>
        <div className={styles.blackBtn} onClick={goToSignup}>
          立即注册
        </div>
      </div>

      <div className={classnames(styles.blockWrapper)}>
        <div className={classnames(styles.block, styles.second)}>
          <div className={styles.innerBg} />
          <div className={styles.secondTitle}>
            我们和一般的招聘网站有什么不同？
          </div>
          <div className={styles.secondBody}>
            Landd上的远程职位来自于世界各地的优秀科技公司。无需主动投递工作申请，我们会主动为你匹配合适的机会。一次通过面试，终生有效。我们会在你的职业生涯里持续为你推荐合适的工作机会。
          </div>
          <Link href='/developers/faq'>
            <a>
              <div className={styles.blackGhostBtn}>了解更多</div>
            </a>
          </Link>
        </div>
      </div>

      <div className={classnames(styles.blockWrapper)}>
        <Image
          src='/developer_home_1.svg'
          width={560}
          height={560}
          alt='hirerring'
        />
        <div className={styles.title}>无需出国在家加入世界一流科技公司</div>
        <div className={styles.body}>
          在 Landd
          招聘的公司来自于世界各地，比如硅谷，新加坡等。我们会对公司进行筛选，只有靠谱的公司才能在
          Landd 招聘。加入
          Landd，你就可以获得以前必须要出国才能获得的工作机会，在家就能加入世界最优秀的团队。
        </div>
      </div>

      <div className={classnames(styles.blockWrapper)}>
        <Image
          src='/developer_home_2.svg'
          width={560}
          height={560}
          alt='hirerring'
        />
        <div className={styles.title}>你终身的职业发展伙伴</div>
        <div className={styles.body}>
          Landd
          就像是一个独特的程序员俱乐部。只要你通过面试加入了Landd，我们就会终身为你推荐合适的远程职位。Landd
          不仅仅是可以找到短期项目挣外快的地方，我们更希望帮你构筑稳定的长期远程职业生涯，成为你终身的职业伙伴。
        </div>
      </div>

      <div className={classnames(styles.blockWrapper)}>
        <Image
          src='/developer_home_3.svg'
          width={560}
          height={560}
          alt='hirerring'
        />
        <div className={styles.title}>加入 Web3 浪潮</div>
        <div className={styles.body}>
          作为互联网发展最热的趋势，有非常多的 Web3 公司在 Landd 招聘，如果你对
          Web3 感兴趣，想加入世界各地的 Web3 公司，请别犹豫，立即加入Landd 吧！
        </div>
        <div className={styles.register} onClick={goToSignup}>
          立即注册 →
        </div>
      </div>

      <div className={classnames(styles.blockWrapper)}>
        <div className={styles.blocksContainer}>
          <div className={styles.title}>如何加入？</div>
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
                注册账号并填写
                <br />
                你的个人简历
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
                通过我们的面试
                <br />
                加入 Landd 人才库
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
                Landd 的人才顾问
                <br />
                为你推荐合适职位
              </div>
            </div>
            <div className={styles.item}>
              <Image
                src='/developer_home_icon_4.svg'
                width={40}
                height={40}
                alt='hirerring'
              />
              <div className={styles.stepTitle}>04</div>
              <div className={styles.stepBody}>开始工作</div>
            </div>
          </div>
        </div>
      </div>

      <div className={classnames(styles.blockWrapper)}>
        <div className={classnames(styles.block, styles.last)}>
          <div className={styles.lastBody}>
            告别长通勤，告别内卷，拥抱自由，加入Landd, 掌控自己的职业生涯。
          </div>
          <div className={styles.split} />
          <div className={styles.blackBtn} onClick={goToSignup}>
            立即注册
          </div>
        </div>
      </div>

      <div className={classnames(styles.blockWrapper)}>
        <div className={styles.recommendWrapper}>
          <div className={styles.recommendTitle}>推荐朋友</div>
          <div className={styles.recommendBody}>
            推荐你的朋友加入Landd，获得等于他未来收入2%的推荐奖金。
            <br />
            <br />
            1. 注册账号，获得你的推荐链接
            <br />
            2. 让你的朋友使用你的推荐链接注册
            <br />
            3. 当你的朋友在Landd完成至少一个月的工作后，我们将向你发放推荐奖金。
          </div>
          <Link href='/recommend'>
            <a>
              <div style={{ position: 'relative' }} className={styles.blackBtn}>
                了解更多
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

MobileDevelopers.layout = DeveloperUnlogginLayout;

export default MobileDevelopers;
