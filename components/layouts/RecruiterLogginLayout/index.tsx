/*
 * @Author: wmy
 * @Date: 2022-02-19 22:56:37
 * @LastEditTime: 2022-06-12 17:22:28
 * @LastEditors: wmy
 * @Description: 功能描述
 */

import { ReactNode, useEffect, useState } from 'react';
import router from 'next/router';

interface IProps {
  children: ReactNode;
}

const RecruiterLogginLayout = ({ children }: IProps) => {
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('recruiter_token');
    if (!token) {
      router.push('/recruiters/sign_in');
    } else {
      setPending(false);
    }
  }, []);

  return pending ? <></> : children;
};

export default RecruiterLogginLayout;
