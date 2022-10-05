/*
 * @LastEditors: wmy
 * @Description: 功能描述
 * @Date: 2022-05-03 22:51:09
 * @Author: wmy
 * @LastEditTime: 2022-06-21 02:51:39
 */

import { Form, Input, InputNumber, message } from 'antd';
import { useEffect, useState } from 'react';
import { getTransfer } from 'utils/i18n';
import request from 'utils/request';
import styles from './styles.module.scss';
import router from 'next/router';
import classnames from 'classnames';
import DeveloperSidebarLayout from 'components/layouts/DeveloperSidebarLayout';
import DeveloperLogginLayout from 'components/layouts/DeveloperLogginLayout';
import NextStep from 'components/NextStep';
import { TLocale } from 'utils/type';

interface IFormData {
  basic_salary: number;
  bonus_min: number;
  bonus_max: number;
  stock: string;
  other_salary: string;
  expect_salary_per_hour: number;
  expect_salary_per_year: number;
}

const { useForm, Item } = Form;

const Salary = () => {
  const [form] = useForm<IFormData>();
  const [locale, setLocale] = useState<TLocale>('zh');
  const [isFinish, setIsFinish] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const data = await request.get('profile.getDetail');

    if (data.code === 0) {
      const {
        basic_salary,
        bonus_min,
        bonus_max,
        stock,
        other_salary,
        expect_salary_per_hour,
        expect_salary_per_year,
        meta: { finish_percent },
      } = data.data;
      setIsFinish(finish_percent === 1);
      form.setFieldsValue({
        basic_salary,
        bonus_min,
        bonus_max,
        stock,
        other_salary,
        expect_salary_per_hour,
        expect_salary_per_year,
      });
    }
  };

  const updateSalary = () => {
    form.validateFields().then(async (values) => {
      const data = await request.post('profile.updateSalary', values);
      if (data.code === 0) {
        message.success('保存成功');
        router.push(isFinish ? '/developers/profile' : '/developers/profile');
      }
    });
  };

  const transfer = getTransfer(locale);

  return (
    <DeveloperSidebarLayout showHeader activeMenu='profile' activeKey='salary'>
      <div className={styles.header}>薪资要求</div>
      <Form form={form} layout='vertical'>
        <div className={styles.formContainer}>
          <div className={styles.title}>你现在的年薪是多少？</div>
          <div className={styles.formItem}>
            <Item label='基本薪资' name='basic_salary'>
              <InputNumber style={{ width: '100%' }} size='large' prefix='￥' />
            </Item>
          </div>
          <div className={classnames(styles.formItem, styles.flex)}>
            <Item label='奖金' name='bonus_min'>
              <InputNumber style={{ width: '100%' }} size='large' prefix='￥' />
            </Item>
            <div className={styles.line}>-</div>
            <Item label=' ' name='bonus_max'>
              <InputNumber style={{ width: '100%' }} size='large' prefix='￥' />
            </Item>
          </div>
          <div className={styles.formItem}>
            <Item label='股票价值' name='stock'>
              <InputNumber
                style={{ width: '100%' }}
                size='large'
                addonAfter='￥'
              />
            </Item>
          </div>
          <div className={styles.formItem}>
            <Item label='其他' name='other_salary'>
              <Input size='large' />
            </Item>
          </div>
          <div className={styles.title}>你的薪资要求是什么？</div>
          <div className={styles.formItem}>
            <Item label='全职年薪' name='expect_salary_per_year'>
              <InputNumber
                style={{ width: '100%' }}
                size='large'
                addonAfter='￥/年'
              />
            </Item>
          </div>
          <div className={styles.formItem}>
            <Item label='以小时计的工作' name='expect_salary_per_hour'>
              <InputNumber
                style={{ width: '100%' }}
                size='large'
                addonAfter='￥/小时'
              />
            </Item>
          </div>
        </div>
      </Form>
      <NextStep
        isFinish={isFinish}
        disabled={false}
        currentStep='salary'
        onClick={updateSalary}
      />
    </DeveloperSidebarLayout>
  );
};

Salary.layout = DeveloperLogginLayout;

export default Salary;
