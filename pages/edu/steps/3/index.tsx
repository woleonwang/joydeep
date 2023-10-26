import React, { useState } from 'react';
import { Input, Button, Card, Popover } from 'antd';
import router from 'next/router';
import {
  AndroidOutlined,
  AlipayOutlined,
  WechatOutlined,
} from '@ant-design/icons';

const Login = () => {
  const download = () => {
    const eleLink = document.createElement('a');
    const url = window.URL.createObjectURL(
      new Blob(
        [
          `可以使用先进的应用程序。 要向用户提供 SaaS
    应用，无需购买、安装、更新或维护任何硬件、中间件或软件。SaaS让缺乏自行购买、部署和管理必需基础结构和软件所需资源的企业能够使用ERP和CRM等非常先进的企业应用程序。
    只为自己使用的东西付费。由于SaaS服务将根据使用水平自动扩展和收缩，还能节省费用。
    使用免客户端软件。用户可以从其Web浏览器直接运行大部分SaaS应用而无需下载和安装任何软件（部分应用需要插件）。这意味着无需为用户购买和安装特殊软件。
    轻松增强员工移动性。SaaS能够轻松增强员工“移动性”，因为用户可以从任何连接到`,
        ],
        { type: 'text/plain' }
      )
    );
    eleLink.href = url;
    eleLink.download = decodeURIComponent('报告.txt');
    document.body.appendChild(eleLink);
    eleLink.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(eleLink);
  };

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
        <div style={{ width: '800px', margin: 'auto', textAlign: 'center' }}>
          <Popover
            content={
              <div style={{ width: 400 }}>
                可以使用先进的应用程序。 要向用户提供 SaaS
                应用，无需购买、安装、更新或维护任何硬件、中间件或软件。SaaS让缺乏自行购买、部署和管理必需基础结构和软件所需资源的企业能够使用ERP和CRM等非常先进的企业应用程序。
                只为自己使用的东西付费。由于SaaS服务将根据使用水平自动扩展和收缩，还能节省费用。
                使用免客户端软件。用户可以从其Web浏览器直接运行大部分SaaS应用而无需下载和安装任何软件（部分应用需要插件）。这意味着无需为用户购买和安装特殊软件。
                轻松增强员工移动性。SaaS能够轻松增强员工“移动性”，因为用户可以从任何连接到
              </div>
            }
            open
            placement='leftTop'
          >
            <AndroidOutlined
              style={{ fontSize: 400, marginTop: 100, color: '#e2e2e2' }}
            />
          </Popover>
        </div>
        <div style={{ textAlign: 'center', marginTop: 30 }}>
          <Button
            type='primary'
            size='large'
            style={{ width: 150 }}
            onClick={download}
          >
            出报告
          </Button>
          <Button
            type='primary'
            size='large'
            style={{ width: 150, marginLeft: 10 }}
            onClick={() => router.push('/edu/home')}
          >
            返回首页
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
