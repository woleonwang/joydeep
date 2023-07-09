/*
 * @LastEditors: wmy
 * @Description: 功能描述
 * @Date: 2022-05-02 17:57:57
 * @Author: wmy
 * @LastEditTime: 2022-06-26 18:30:53
 */

import { Button, Input, message } from 'antd';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState } from 'react';
import request from 'utils/request';
import styles from './style.module.scss';
import EmptyLayout from 'components/layouts/EmptyLayout';
import errorCode from 'utils/error';
import Link from 'next/link';
import context from 'context/context';
import { setStorage } from 'utils/helper';

const Signin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { setUserInfo } = context.useGlobalContext();

  const router = useRouter();

  const signIn = async () => {
    if (!canSignIn()) return;

    const { message: resp } = await request.post('recruiters.signIn', {
      email,
      password,
      role: 1,
    });
    if (!resp.err_code) {
      message.success('Sign in succeed');

      setStorage('userinfo', {
        userName: resp.username,
        userId: resp.user_id,
      });

      router.push('/recruiters/profile');
    } else {
      message.error('Email or password incorrect');
    }
  };

  const canSignIn = () => !!(email && password);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href='/'>
          <a>
            <Image src='/logo.svg' width={122} height={36} alt='logo'></Image>
          </a>
        </Link>
        <Link href='/recruiters/sign_up'>
          <a>
            <Button type='primary' className={styles.signUpBtn}>
              Sign up→
            </Button>
          </a>
        </Link>
      </div>
      <div className={styles.main}>
        <div className={styles.title}>Log In</div>
        <div className={styles.inputWrapper}>
          <Input
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            size='large'
          />
        </div>

        <div className={styles.inputWrapper}>
          <Input.Password
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            size='large'
          />
        </div>

        <Button
          type='primary'
          size='large'
          onClick={signIn}
          disabled={!canSignIn()}
          className={styles.mainBtn}
        >
          Log in
        </Button>

        <div className={styles.hint}>
          Do not have an account yet?{' '}
          <Link href='/recruiters/sign_up'>
            <a className={styles.link}>Sign up</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

Signin.layout = EmptyLayout;

export default Signin;
