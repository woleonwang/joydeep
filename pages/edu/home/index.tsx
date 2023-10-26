import React, { useState } from 'react';
import { Input, Button } from 'antd';
import router from 'next/router';
import { AlipayOutlined, WechatOutlined } from '@ant-design/icons';

const Login = () => {
  return (
    <div
      style={{
        backgroundColor: '#e2e2e2',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div
        style={{
          backgroundImage: 'url(/banner.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: 600,
        }}
      ></div>
      <div
        style={{
          margin: 'auto',
          width: 500,
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: 50,
        }}
      >
        <Button
          type='primary'
          style={{ height: 50, width: 100, borderRadius: 5 }}
          onClick={() => router.push('/edu/steps/1')}
        >
          学习计划
        </Button>
        <Button
          type='primary'
          style={{ height: 50, width: 100, borderRadius: 5 }}
        >
          未完成
        </Button>
        <Button
          type='primary'
          style={{ height: 50, width: 100, borderRadius: 5 }}
        >
          已完成
        </Button>
        <Button
          type='primary'
          danger
          style={{ height: 50, width: 100, borderRadius: 5 }}
          onClick={() => router.push('/edu/choose')}
        >
          登出
        </Button>
      </div>
    </div>
  );
};

export default Login;
