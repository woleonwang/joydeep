/*
 * @Author: wmy
 * @Date: 2022-02-19 22:56:37
 * @LastEditTime: 2022-05-02 21:25:28
 * @LastEditors: wmy
 * @Description: 功能描述
 */

import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const EmptyLayout = ({ children }: IProps) => {
  return children;
};

export default EmptyLayout;
