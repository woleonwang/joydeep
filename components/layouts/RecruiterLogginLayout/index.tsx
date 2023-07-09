/*
 * @Author: wmy
 * @Date: 2022-02-19 22:56:37
 * @LastEditTime: 2022-06-12 17:22:28
 * @LastEditors: wmy
 * @Description: 功能描述
 */

import { ReactNode, useEffect, useState } from 'react';
import router from 'next/router';
import { getStorage } from 'utils/helper';
import context from 'context/context';

interface IProps {
  children: ReactNode;
}

const RecruiterLogginLayout = ({ children }: IProps) => {
  const [pending, setPending] = useState(true);
  const { setUserInfo } = context.useGlobalContext();

  useEffect(() => {
    const userInfo = getStorage('userinfo');
    if (userInfo) {
      setUserInfo(getStorage('userinfo'));
      setPending(false);
    } else {
      router.push('/recruiters/sign_in');
    }
  }, []);

  return pending ? <></> : children;
};

export default RecruiterLogginLayout;
