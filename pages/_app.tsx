/*
 * @Author: wmy
 * @Date: 1985-10-26 16:15:00
 * @LastEditTime: 2022-06-12 21:23:44
 * @LastEditors: wmy
 * @Description: 功能描述
 */
import 'antd/dist/antd.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import type { Component } from 'react';
import DefaultLayout from '../components/layouts/DefaultLayout';
import { ConfigProvider } from 'antd';
import EmptyLayout from 'components/layouts/EmptyLayout';
import context from 'context/context';
import enUS from 'antd/lib/locale/en_US';

type NextPageWithLayout = NextPage & {
  layout?: Component;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout: any = Component.layout ?? EmptyLayout;

  // DefaultLayout: 无视登录状态要做的事
  // Layout 根据登录状态要做的事，比如验证 token
  return typeof window === 'undefined' ? (
    <></>
  ) : (
    <ConfigProvider locale={enUS}>
      <context.ContextWrapper>
        <DefaultLayout>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </DefaultLayout>
      </context.ContextWrapper>
    </ConfigProvider>
  );
}

export default MyApp;
