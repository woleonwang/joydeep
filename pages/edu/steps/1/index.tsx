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
          title='SaaS'
          style={{ width: '800px', margin: 'auto', opacity: '0.9' }}
        >
          <p>
            可以使用先进的应用程序。 要向用户提供 SaaS
            应用，无需购买、安装、更新或维护任何硬件、中间件或软件。SaaS让缺乏自行购买、部署和管理必需基础结构和软件所需资源的企业能够使用ERP和CRM等非常先进的企业应用程序。
            只为自己使用的东西付费。由于SaaS服务将根据使用水平自动扩展和收缩，还能节省费用。
            使用免客户端软件。用户可以从其Web浏览器直接运行大部分SaaS应用而无需下载和安装任何软件（部分应用需要插件）。这意味着无需为用户购买和安装特殊软件。
            轻松增强员工移动性。SaaS能够轻松增强员工“移动性”，因为用户可以从任何连接到
            Internet
            的计算机或移动设备访问SaaS应用和数据。无需考虑将应用开发为可在不同类型的计算机和设备上运行，因为服务提供商已经完成了这部分工作。此外，无需学习专业知识即可处理移动计算带来安全问题。无论使用数据的设备是什么类型，谨慎选择的服务提供商都将确保数据的安全。
            从任何位置访问应用数据。将数据存储到云后，用户即可通过任何连接到
            Internet
            的计算机或移动设备访问其信息。并且将应用数据存储到云后，用户的计算机或移动设备发生故障时不会丢失任何数据。
          </p>
          <p>
            可以使用先进的应用程序。 要向用户提供 SaaS
            应用，无需购买、安装、更新或维护任何硬件、中间件或软件。SaaS让缺乏自行购买、部署和管理必需基础结构和软件所需资源的企业能够使用ERP和CRM等非常先进的企业应用程序。
            只为自己使用的东西付费。由于SaaS服务将根据使用水平自动扩展和收缩，还能节省费用。
            使用免客户端软件。用户可以从其Web浏览器直接运行大部分SaaS应用而无需下载和安装任何软件（部分应用需要插件）。这意味着无需为用户购买和安装特殊软件。
            轻松增强员工移动性。SaaS能够轻松增强员工“移动性”，因为用户可以从任何连接到
            Internet
            的计算机或移动设备访问SaaS应用和数据。无需考虑将应用开发为可在不同类型的计算机和设备上运行，因为服务提供商已经完成了这部分工作。此外，无需学习专业知识即可处理移动计算带来安全问题。无论使用数据的设备是什么类型，谨慎选择的服务提供商都将确保数据的安全。
            从任何位置访问应用数据。将数据存储到云后，用户即可通过任何连接到
            Internet
            的计算机或移动设备访问其信息。并且将应用数据存储到云后，用户的计算机或移动设备发生故障时不会丢失任何数据。
          </p>
          <p>
            可以使用先进的应用程序。 要向用户提供 SaaS
            应用，无需购买、安装、更新或维护任何硬件、中间件或软件。SaaS让缺乏自行购买、部署和管理必需基础结构和软件所需资源的企业能够使用ERP和CRM等非常先进的企业应用程序。
            只为自己使用的东西付费。由于SaaS服务将根据使用水平自动扩展和收缩，还能节省费用。
            使用免客户端软件。用户可以从其Web浏览器直接运行大部分SaaS应用而无需下载和安装任何软件（部分应用需要插件）。这意味着无需为用户购买和安装特殊软件。
            轻松增强员工移动性。SaaS能够轻松增强员工“移动性”，因为用户可以从任何连接到
            Internet
            的计算机或移动设备访问SaaS应用和数据。无需考虑将应用开发为可在不同类型的计算机和设备上运行，因为服务提供商已经完成了这部分工作。此外，无需学习专业知识即可处理移动计算带来安全问题。无论使用数据的设备是什么类型，谨慎选择的服务提供商都将确保数据的安全。
            从任何位置访问应用数据。将数据存储到云后，用户即可通过任何连接到
            Internet
            的计算机或移动设备访问其信息。并且将应用数据存储到云后，用户的计算机或移动设备发生故障时不会丢失任何数据。
          </p>
        </Card>
        <div style={{ textAlign: 'center', marginTop: 30 }}>
          <Button
            type='primary'
            size='large'
            style={{ width: 150 }}
            onClick={() => router.push('/edu/steps/2')}
          >
            开始
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;