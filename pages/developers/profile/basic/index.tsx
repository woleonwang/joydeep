/*
 * @LastEditors: wmy
 * @Description: 功能描述
 * @Date: 2022-05-03 22:51:09
 * @Author: wmy
 * @LastEditTime: 2022-06-26 18:37:36
 */

import { Form, Input, message, Select, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { useEffect, useRef, useState } from 'react';
import { CameraOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { getTransfer } from 'utils/i18n';
import request from 'utils/request';
import styles from './styles.module.scss';
import router from 'next/router';
import Link from 'next/link';
import DeveloperSidebarLayout from 'components/layouts/DeveloperSidebarLayout';
import DeveloperLogginLayout from 'components/layouts/DeveloperLogginLayout';
import { TLocale, TRole } from 'utils/type';
import NextStep from 'components/NextStep';
import countries from 'utils/country';

const { useForm, Item } = Form;
// const localStorage = window.localStorage;
const Basic = () => {
  const [form] = useForm();
  const [locale, setLocale] = useState<TLocale>('zh');
  const [avatar, setAvatar] = useState<string>('');
  const [attachment, setAttachment] = useState<string>('');
  const [role, setRole] = useState<TRole>();
  const [isFinish, setIsFinish] = useState(false);
  const tokenRef = useRef<string>('');
  const isDeveloper = role === 'developer';

  useEffect(() => {
    fetchProfile();
    tokenRef.current = localStorage.getItem('token') || '';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchProfile = async (options?: {
    onlyAttachment?: boolean;
    onlyAvatar?: boolean;
  }) => {
    const data = await request.get('profile.getDetail');

    if (data.code === 0) {
      const {
        name,
        country,
        phone,
        email,
        linkedin_url,
        self_intro,
        github_url,
        avatar,
        attachment,
        weixin,
        meta: { role, finish_percent },
      } = data.data;
      const { onlyAttachment, onlyAvatar } = options || {};
      if (onlyAvatar) {
        setAvatar(avatar);
        return;
      }

      if (onlyAttachment && attachment) {
        setAttachment(decodeURIComponent(attachment));
        return;
      }

      form.setFieldsValue({
        name,
        country,
        phone,
        email,
        linkedin_url,
        self_intro,
        github_url,
        weixin,
      });
      setRole(role);
      setIsFinish(finish_percent === 1);
      if (attachment) {
        setAttachment(decodeURIComponent(attachment));
      }
      setAvatar(avatar);
    }
  };

  const updateBasic = () => {
    form.validateFields().then(async (values) => {
      const data = await request.post('profile.updateBasic', values);
      if (data.code === 0) {
        message.success('保存成功');
        router.push(
          isFinish ? '/developers/profile' : '/developers/profile/availability'
        );
      }
    });
  };

  const transfer = getTransfer(locale);

  return (
    <DeveloperSidebarLayout showHeader activeMenu='profile' activeKey='basic'>
      <div className={styles.header}>基本信息</div>
      <Form form={form} layout='vertical'>
        <div className={styles.formContainer}>
          <div className={styles.leftForm}>
            <Item
              label='姓名'
              name='name'
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Item>
            <Item
              label='目前居住国家'
              name='country'
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                showSearch
                optionFilterProp='label'
                options={Object.entries(countries).map(([value, label]) => ({
                  label,
                  value,
                }))}
              />
            </Item>
            <Item
              label='电话号码'
              name='phone'
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input disabled />
            </Item>
            <Item
              label='邮箱'
              name='email'
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Item>
            <Item label='领英 Linkedin' name='linkedin_url'>
              <Input />
            </Item>
            <Item label='微信' name='weixin'>
              <Input />
            </Item>
          </div>
          <div className={styles.rightForm}>
            <div className={styles.avatar}>
              <ImgCrop rotate shape='rect'>
                <Upload
                  action={`/api/profiles/upload_avatar`}
                  name='avatar'
                  listType='picture-card'
                  className='avatar-uploader'
                  headers={{
                    Authorization: tokenRef.current,
                  }}
                  showUploadList={false}
                  onChange={({ file }: any) => {
                    if (file.percent === 0 && file.status === 'uploading') {
                      message.success('开始上传');
                    } else if (file.status === 'done') {
                      message.success('上传成功');
                      fetchProfile({
                        onlyAvatar: true,
                      });
                    } else if (file.status === 'error') {
                      message.success('上传失败');
                    }
                  }}
                >
                  {avatar ? (
                    <Image
                      src={avatar}
                      width={560}
                      height={560}
                      alt='hirerring'
                    />
                  ) : (
                    <CameraOutlined style={{ fontSize: 20 }} />
                  )}
                </Upload>
              </ImgCrop>
            </div>
            <Item label='个人简介' name='self_intro'>
              <Input.TextArea
                style={{ minHeight: 118, maxHeight: 118 }}
                autoSize={false}
              />
            </Item>
            <Item label='Github' name='github_url'>
              <Input />
            </Item>
            {isDeveloper && (
              <div className={styles.attachmentContainer}>
                <Upload
                  action={`/api/profiles/upload_attachment`}
                  name='attachment'
                  listType='text'
                  headers={{
                    Authorization: tokenRef.current,
                  }}
                  onChange={({ file }: any) => {
                    if (file.percent === 0 && file.status === 'uploading') {
                      message.success('开始上传');
                    } else if (file.status === 'done') {
                      message.success('上传成功');
                      fetchProfile({
                        onlyAttachment: true,
                      });
                    } else if (file.status === 'error') {
                      message.success('上传失败');
                    }
                  }}
                  showUploadList={false}
                >
                  <div className={styles.uploadBtn}>上传简历</div>
                </Upload>
                {attachment && (
                  <Link href={attachment}>
                    <a className={styles.attachment} target='_blank'>
                      {attachment.slice(attachment.lastIndexOf('/') + 1)}
                    </a>
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </Form>
      <NextStep
        isFinish={!isDeveloper || isFinish}
        disabled={false}
        currentStep='basic'
        onClick={updateBasic}
      />
    </DeveloperSidebarLayout>
  );
};

Basic.layout = DeveloperLogginLayout;

export default Basic;
