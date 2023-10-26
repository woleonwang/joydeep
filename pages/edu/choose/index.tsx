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
    router.push('/edu/login');
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
        <h1>请选择身份</h1>
        <Button
          onClick={handleLogin}
          type='primary'
          size='large'
          style={{ width: '100%' }}
        >
          学生端
        </Button>
        <Button
          onClick={handleLogin}
          type='primary'
          size='large'
          style={{ width: '100%', marginTop: 30 }}
        >
          教师端
        </Button>
      </div>
    </div>
  );
};

export default Login;
