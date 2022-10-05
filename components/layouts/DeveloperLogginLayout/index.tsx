/*
 * @Author: wmy
 * @Date: 2022-02-19 22:56:37
 * @LastEditTime: 2022-06-12 17:22:28
 * @LastEditors: wmy
 * @Description: 功能描述
 */

import { ReactNode, useEffect, useState } from 'react';
import router from 'next/router';
import request from 'utils/request';
import { message } from 'antd';
interface IProps {
  children: ReactNode;
}

const DeveloperLogginLayout = ({ children }: IProps) => {
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/developers/sign_in');
    } else {
      checkPercent();
    }
  }, []);

  const checkPercent = async () => {
    const data = await request.get('profile.getDetail');
    if (data.code === 0) {
      const {
        meta: { finish_percent, role, current_step },
      } = data.data;

      if (finish_percent !== 1) {
        await router.push(
          role === 'recommend'
            ? '/developers/profile/basic'
            : `/developers/profile/${current_step}`
        );
      }
      setPending(false);
    } else {
      message.error('状态获取失败');
    }
  };

  return pending ? <></> : children;
};

export default DeveloperLogginLayout;
