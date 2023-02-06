/*
 * @LastEditors: wmy
 * @Description: 功能描述
 * @Date: 2022-05-02 17:57:57
 * @Author: wmy
 * @LastEditTime: 2022-06-12 21:30:09
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

type TStep = 'phone' | 'code';

const Signin = () => {
  // 当前处于哪一步
  const [step, setStep] = useState<TStep>('phone');
  // 手机号
  const [phone, setPhone] = useState<string>('');
  // 验证码
  const [code, setCode] = useState<string[]>([]);
  // 发送验证码倒计时
  const [countDown, setCountDown] = useState<number>(0);

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('recruiter_token');
    if (token) {
      router.push('/recruiters/basic_info');
    }
  }, []);

  const sendCode = async () => {
    if (!canSendCode()) return;
    const data = await request.post('recruiters.sendCode', {
      phone,
      type: 'sign_in',
    });
    if (data.code === 0) {
      message.success('验证码发送成功');
      setStep('code');
      initCountDown();
    } else if (data.code === 100001) {
      message.error('手机格式不正确');
    } else if (data.code === 100002) {
      message.error('手机号未注册');
    } else {
      message.error('验证码发送失败');
    }
  };

  const signIn = async () => {
    if (!canSignin()) return;
    const data = await request.post('recruiters.signIn', {
      phone,
      code: code.join(''),
    });
    if (data.code === 0) {
      message.success('登录成功');
      localStorage.setItem('token', data.data.token);
      router.push('/recruiters/basic_info');
    } else if (data.code === 100001) {
      message.error('验证码不正确');
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

  const canSignin = () => code && code.filter((v) => !!v).length === 6;

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
          <div className={styles.title}>登录</div>
          {step === 'phone' ? (
            <>
              <div className={styles.subTitle}>请输入手机号</div>
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
                发送验证码
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
                    [styles.disabled]: !canSignin(),
                  })}
                  onClick={signIn}
                >
                  登录
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

Signin.layout = EmptyLayout;

export default Signin;
