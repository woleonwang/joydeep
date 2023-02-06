/*
 * @LastEditors: wmy
 * @Description: 功能描述
 * @Date: 2022-05-02 17:57:57
 * @Author: wmy
 * @LastEditTime: 2022-06-26 18:30:53
 */

import { Input, message } from 'antd';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import request from 'utils/request';
import styles from './style.module.scss';
import EmptyLayout from 'components/layouts/EmptyLayout';
import classnames from 'classnames';
import SplittedInput from 'components/SplittedInput';
import { getStorage, RecommendTokenKey } from 'utils/helper';

type TStep = 'phone' | 'code';

const Signup = () => {
  // 当前处于哪一步
  const [step, setStep] = useState<TStep>('phone');
  // 手机号
  const [phone, setPhone] = useState<string>('');
  // 验证码
  const [code, setCode] = useState<string[]>([]);
  // 发送验证码倒计时
  const [countDown, setCountDown] = useState<number>(0);
  // 邀请码
  const [token, setToken] = useState('');

  const router = useRouter();

  useEffect(() => {
    const recommendToken = getStorage(RecommendTokenKey);
    if (recommendToken) {
      setToken(recommendToken);
    }
  }, []);

  const sendCode = async () => {
    if (!canSendCode()) return;
    const data = await request.post('recruiters.sendCode', {
      phone,
      type: 'sign_up',
    });
    if (data.code === 0) {
      message.success('验证码发送成功');
      setStep('code');
      initCountDown();
    } else if (data.code === 100422) {
      message.error('手机格式不正确');
    } else {
      message.error('验证码发送失败');
    }
  };

  const signUp = async () => {
    if (!canSignup()) return;
    const data = await request.post('recruiters.signUp', {
      phone,
      code: code.join(''),
      token,
    });
    if (data.code === 0) {
      message.success('注册成功');
      localStorage.setItem('recruiter_token', data.data.token);
      router.push('/recruiters/basic_info');
    } else if (data.code === 100001) {
      message.error('验证码不正确');
    } else if (data.code === 100002) {
      message.error('该手机已被注册');
    } else {
      message.error('注册失败');
    }
  };

  const initCountDown = () => {
    if (countDown > 0) {
      return;
    }

    setCountDown(60);
    const intervalId = setInterval(() => {
      setCountDown((countDown) => {
        if (countDown === 1) {
          clearInterval(intervalId);
        }
        return countDown - 1;
      });
    }, 1000);
  };

  const canSendCode = () => phone && phone.length === 11;

  const canSignup = () => code && code.filter((v) => !!v).length === 6;

  const canBack = () => countDown === 0;

  const goBack = () => {
    if (!canBack()) return;
    setCode([]);
    setStep('phone');
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContent}>
        <div className={styles.left}>
          <div className={styles.fakeLogo} onClick={() => router.push('/')} />
          <Image
            src='/developer_sign_up.svg'
            width={624}
            height={804}
            alt='signup'
          />
        </div>
        <div className={styles.right}>
          <div className={styles.title}>{'Recruiter Sign Up'}</div>
          {step === 'phone' ? (
            <>
              <div className={styles.subTitle}>Phone</div>
              <div className={styles.inputWrapper}>
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  bordered={false}
                  size='large'
                  onPressEnter={() => sendCode()}
                />
              </div>
              <div
                onClick={sendCode}
                className={classnames(styles.blackBtn, {
                  [styles.disabled]: !canSendCode(),
                })}
              >
                Send Code
              </div>
            </>
          ) : (
            <>
              <div className={styles.subTitle}>
                已发送至尾号{phone.slice(7)}手机
                {countDown > 0 ? `(${countDown}s)` : ''}，请输入验证码
              </div>
              <div className={styles.inputContainer}>
                <SplittedInput
                  value={code}
                  length={6}
                  onChange={(value) => setCode(value)}
                />
              </div>
              <div>
                <div
                  className={classnames(styles.blackGhostBtn, {
                    [styles.disabled]: !canBack(),
                  })}
                  onClick={() => goBack()}
                >
                  上一步
                </div>
                <div
                  className={classnames(styles.blackBtn, {
                    [styles.disabled]: !canSignup(),
                  })}
                  onClick={signUp}
                >
                  注册
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

Signup.layout = EmptyLayout;

export default Signup;
