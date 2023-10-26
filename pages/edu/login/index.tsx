import React, { useState } from 'react';
import styles from './Login.module.scss'; // 导入SCSS模块
import { Input, Button } from 'antd';
import { AlipayOutlined, WechatOutlined } from '@ant-design/icons';
import router from 'next/router';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 处理用户名密码登录逻辑
    router.push('/edu/home');
  };

  const handleWechatLogin = () => {
    // 处理微信登录逻辑
  };

  const handleAlipayLogin = () => {
    // 处理支付宝登录逻辑
  };

  return (
    <div
      className={styles['login-container']}
      style={{
        backgroundImage: 'url("/bg.jpeg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div style={{ width: 400, margin: 'auto', paddingTop: 200 }}>
        <h1>登录</h1>
        <div className={styles['input-container']}>
          <Input placeholder='用户名' />
        </div>
        <div className={styles['input-container']}>
          <Input type='password' placeholder='密码' />
        </div>
        <Button
          onClick={handleLogin}
          type='primary'
          size='large'
          style={{ width: '100%' }}
        >
          登录
        </Button>
        <div style={{ marginTop: 30 }}>
          <AlipayOutlined style={{ color: '#03a9f4', fontSize: 30 }} />
          <WechatOutlined
            style={{ color: '#4caf50', fontSize: 30, marginLeft: 30 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
