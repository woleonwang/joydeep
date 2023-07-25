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
import { IRecriuterProfileApi } from 'utils/type';
import request from 'utils/request';

interface IProps {
  children: ReactNode;
}

const RecruiterLogginLayout = ({ children }: IProps) => {
  const [pending, setPending] = useState(true);
  const { setUserInfo } = context.useGlobalContext();

  useEffect(() => {
    fetchMetaInfo();
  }, []);

  const fetchMetaInfo = async () => {
    const userInfo = getStorage('userinfo');
    if (userInfo) {
      const { message }: { message: IRecriuterProfileApi } = await request.get(
        'recruiters.profile',
        {
          placeholder: {
            id: userInfo.userId,
          },
        }
      );

      if (message) {
        const { profile } = message;
        setUserInfo({
          ...userInfo,
          avatar: profile.photo ? `/api/file/${profile.photo}` : '/logo.svg',
        });
      } else {
        setUserInfo({
          ...userInfo,
          avatar: '',
        });
      }
      setPending(false);
    } else {
      router.push('/recruiters/sign_in');
    }
  };

  return pending ? <></> : children;
};

export default RecruiterLogginLayout;
