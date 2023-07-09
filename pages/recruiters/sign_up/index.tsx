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

const Signup = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const router = useRouter();

  const signUp = async () => {
    if (!canSignup()) return;

    if (password !== confirmPassword) {
      message.error('Password incorrect');
      return;
    }

    const { message: resp } = await request.post('recruiters.signUp', {
      email,
      password,
      name,
      role: 1,
      contacts: {
        1: 'fake phone',
      },
    });
    if (!resp.err_code) {
      message.success('Sign up succeed');
      // localStorage.setItem('recruiter_token', data.data.token);
      router.push('/recruiters/profile');
    } else if (resp.err_code === errorCode.ErrCodeDuplicateEmail) {
      message.error('Email is duplicated');
    } else {
      message.error('Sign up failed');
    }
  };

  const canSignup = () => !!(email && password && confirmPassword && name);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href='/'>
          <a>
            <Image src='/logo.svg' width={122} height={36} alt='logo'></Image>
          </a>
        </Link>
        <Link href='/recruiters/sign_in'>
          <a>
            <Button type='primary' className={styles.signUpBtn}>
              Log in→
            </Button>
          </a>
        </Link>
      </div>
      <div className={styles.main}>
        <div className={styles.title}>Sign Up</div>
        <div className={styles.inputWrapper}>
          <Input
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            size='large'
          />
        </div>

        <div className={styles.inputWrapper}>
          <Input
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
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

        <div className={styles.inputWrapper}>
          <Input.Password
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            size='large'
          />
        </div>

        <Button
          type='primary'
          size='large'
          onClick={signUp}
          disabled={!canSignup()}
          className={styles.mainBtn}
        >
          Sign Up
        </Button>

        <div className={styles.hint}>
          Already have an account?{' '}
          <Link href='/recruiters/sign_in'>
            <a className={styles.link}>Log in</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

Signup.layout = EmptyLayout;

export default Signup;
