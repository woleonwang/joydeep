/*
 * @LastEditors: wmy
 * @Description: 功能描述
 * @Date: 2022-05-15 20:27:58
 * @Author: wmy
 * @LastEditTime: 2022-06-21 02:37:11
 */
import Image from 'next/image';
import { Form, Input, message, Select } from 'antd';
import request from 'utils/request';
import styles from './style.module.scss';
import EmptyLayout from 'components/layouts/EmptyLayout';
import {
  HeadcountOptions,
  JobPositionOptions,
  PositionOptions,
  StaffCountOptions,
} from 'utils/options';
import { getTransfer } from 'utils/i18n';
import router from 'next/router';

const { useForm } = Form;
const transfer = getTransfer('en');
const getText = (key: string) => transfer(`signup.${key}`);

const HireNow = () => {
  const [form] = useForm();

  const onSubmit = () => {
    form.validateFields().then(async (values) => {
      const body = {
        ...values,
        hire_positions: values.hire_positions?.join(','),
      };
      const data = await request.post('recruiterForm.create', body);
      if (data.code === 0) {
        message.success('Submit succeed');
        form.resetFields();
      } else {
        message.error('Submit failed');
      }
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContent}>
        <div className={styles.left}>
          <div
            className={styles.fakeLogo}
            onClick={() => router.push('/employer')}
          />
          <Image
            src='/developer_sign_up.svg'
            width={624}
            height={804}
            alt='signup'
          />
        </div>
        <div className={styles.right}>
          <div className={styles.title}>{getText('title')}</div>
          <div className={styles.subTitle}>{getText('subtitle')}</div>
          <Form form={form} layout='vertical'>
            <Form.Item
              label={getText('firstname')}
              name='firstName'
              rules={[
                {
                  required: true,
                  message: getText('requireMessage'),
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label={getText('lastname')}
              name='lastName'
              rules={[
                {
                  required: true,
                  message: getText('requireMessage'),
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label={getText('company')}
              name='company'
              rules={[
                {
                  required: true,
                  message: getText('requireMessage'),
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label={getText('contactNumber')}
              name='phone'
              rules={[
                {
                  required: true,
                  message: getText('requireMessage'),
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item label={getText('email')} name='email'>
              <Input />
            </Form.Item>
            <Form.Item label={getText('website')} name='website'>
              <Input placeholder='https://' />
            </Form.Item>
            <Form.Item
              label={getText('position')}
              name='position'
              rules={[
                {
                  required: true,
                  message: getText('requireMessage'),
                },
              ]}
            >
              <Select options={PositionOptions} />
            </Form.Item>
            <Form.Item
              label={getText('size')}
              name='staff_count'
              rules={[
                {
                  required: true,
                  message: getText('requireMessage'),
                },
              ]}
            >
              <Select options={StaffCountOptions} />
            </Form.Item>
            <Form.Item
              label={getText('hiringFor')}
              name='hire_positions'
              rules={[
                {
                  required: true,
                  message: getText('requireMessage'),
                },
              ]}
            >
              <Select
                mode='multiple'
                options={JobPositionOptions}
                optionFilterProp='label'
              />
            </Form.Item>
            <Form.Item
              label={getText('headcount')}
              name='headcount'
              rules={[
                {
                  required: true,
                  message: getText('requireMessage'),
                },
              ]}
            >
              <Select options={HeadcountOptions} />
            </Form.Item>
            <div className={styles.blackBtn} onClick={() => onSubmit()}>
              {getText('submit')}
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

HireNow.layout = EmptyLayout;

export default HireNow;
