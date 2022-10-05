/*
 * @Author: wmy
 * @Date: 2022-02-19 22:56:37
 * @LastEditTime: 2022-05-01 13:47:53
 * @LastEditors: wmy
 * @Description: 功能描述
 */

import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

interface IProps {
  children: ReactNode;
}

const UnlogginLayout = ({ children }: IProps) => {
  return (
    <div>
      <Head>
        <title>Landd</title>
        <meta name='description' content='Landd Application' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default UnlogginLayout;
