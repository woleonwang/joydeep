/*
 * @Author: wmy
 * @Date: 2022-02-19 22:56:37
 * @LastEditTime: 2022-06-27 01:31:22
 * @LastEditors: wmy
 * @Description: 功能描述
 */

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { RecommendTokenKey, setStorage } from 'utils/helper';
import request from 'utils/request';

interface IProps {
  children: any;
}

const DefaultLayout = ({ children }: IProps) => {
  const [pending, setPending] = useState(true);

  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const { recommend_token, admin_token, user_token } = router.query;
      if (recommend_token) {
        setStorage(RecommendTokenKey, recommend_token);
      }

      if (admin_token) {
        signInAdmin(admin_token as string, user_token as string);
      } else {
        setPending(false);
      }
    }
  }, [router.isReady]);

  const signInAdmin = async (adminToken: string, userToken: string) => {
    const data = await request.post('admin.checkToken', {
      admin_token: adminToken,
    });

    if (data.code === 0) {
      setStorage('token', userToken);
      router.replace(router.pathname);
      setPending(false);
    }
  };

  return pending ? <div>Loading</div> : children;
};

export default DefaultLayout;
