import React, { useState } from 'react';
import { Input, Button, Card } from 'antd';
import router from 'next/router';
import { AlipayOutlined, WechatOutlined } from '@ant-design/icons';

const Login = () => {
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundImage: 'url("/step-bg.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div style={{ padding: '50px 100px' }}>
        <Card
          title='观看视频'
          style={{ width: '800px', margin: 'auto', opacity: '0.9' }}
        >
          <video
            src='https://www.runoob.com/try/demo_source/movie.mp4'
            controls
            width='100%'
          ></video>
        </Card>
        <div style={{ textAlign: 'center', marginTop: 30 }}>
          <Button
            type='primary'
            size='large'
            style={{ width: 150 }}
            onClick={() => router.push('/edu/steps/3')}
          >
            下一步
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
