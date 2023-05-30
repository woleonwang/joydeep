/*
 * @LastEditors: wmy
 * @Description: 功能描述
 * @Date: 2022-06-11 16:13:25
 * @Author: wmy
 * @LastEditTime: 2022-06-26 18:29:05
 */

export const checkNumberExists = (number: any) => !!number || number === 0;

export const isMobile = () =>
  (document.querySelector('html')?.clientWidth || 640) < 640;

export const setStorage = (key: string, value: any) => {
  localStorage.setItem(
    key,
    typeof value === 'object' ? JSON.stringify(value) : value.toString()
  );
};

export const getStorage = (key: string): any => {
  const value = localStorage.getItem(key) || '';
  try {
    const obj = JSON.parse(value);
    return obj;
  } catch {
    return value;
  }
};

export const formatNumber = (n: number): string => {
  return n.toLocaleString('en-US');
};

export const RecommendTokenKey = 'recommend_token';
