/*
 * @Author: wmy
 * @Date: 2022-02-19 22:56:37
 * @LastEditTime: 2022-06-12 22:11:03
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

const DeveloperUnlogginLayout = ({ children }: IProps) => {
  return (
    <div>
      <Head>
        <title>Landd</title>
        <meta name='description' content='Landd Application' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default DeveloperUnlogginLayout;
