/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react';
import { Form, message, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import InputWrapper from 'components/InputWrapper';
import SelectWrapper from 'components/SelectWrapper';
import TagWrapper from 'components/TagWrapper';
import context from 'context/context';
import request from 'utils/request';
import { IRecriuterProfileApi } from 'utils/type';
import styles from './style.module.scss';
import TextAreaWrapper from 'components/TextAreaWrapper';
import ImgCrop from 'antd-img-crop';

const { useForm, Item } = Form;

interface IFormData {
  name: string;
  summary: string;
  photo: string;
  company: string;
  experience: number;
  expertise: string[];
}

interface IProps {
  profile: Partial<IRecriuterProfileApi>;
}

const getExpirenceOptions = (max: number) => {
  return new Array(max + 1).fill(0).map((_, index) => ({
    value: index + 1,
    label: `${index === max ? `${max}+` : index + 1} year${
      index === 0 ? '' : 's'
    }`,
  }));
};

const Basic = (props: IProps) => {
  const {
    profile: { profile },
  } = props;
  const [form] = useForm<IFormData>();
  const { setUserInfo, userInfo } = context.useGlobalContext();

  useEffect(() => {
    if (profile) {
      form.setFieldsValue({
        name: profile.name,
        summary: profile.summary,
        company: profile.company,
        photo: profile.photo,
        experience: profile.years_of_expr,
        expertise: profile.expertise.split(','),
      });
    }
  }, [profile]);

  const uploadBasic = () => {
    form.validateFields().then(async (value) => {
      const result = await request.post('recruiters.updateProfile', {
        user_id: userInfo.userId,
        profile: {
          name: value.name,
          photo: value.photo,
          summary: value.summary,
          company: value.company,
          years_of_expr: value.experience,
          expertise: value.expertise.join(','),
        },
      });
      if (!result.err_code) {
        message.success('Profile updated');
        setUserInfo({
          ...userInfo,
          avatar: `/api/file/${value.photo}`,
        });
      }
    });
  };

  return (
    <Form form={form} layout='vertical' className={styles.form}>
      <Item name='photo' noStyle></Item>
      <Item shouldUpdate>
        {() => {
          const photo = form.getFieldsValue().photo;

          const content = photo ? (
            <img className={styles.avatar} src={`/api/file/${photo}`} alt='' />
          ) : (
            <div className={styles.upload}>
              <PlusOutlined style={{ fontSize: 20 }} />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          );

          return (
            <ImgCrop>
              <Upload
                action='/api/file/upload'
                showUploadList={false}
                onChange={(info) => {
                  if (info.file.status === 'done') {
                    const fileId = info.file.response?.message?.file_id;
                    if (fileId) {
                      form.setFieldsValue({
                        photo: fileId,
                      });
                    }
                    message.success('Avatar upload succeed');
                  } else if (info.file.status === 'error') {
                    message.error('Avatar upload failed');
                  }
                }}
              >
                {content}
              </Upload>
            </ImgCrop>
          );
        }}
      </Item>
      <Item
        name='name'
        rules={[
          {
            required: true,
          },
        ]}
      >
        <InputWrapper label='Name' />
      </Item>
      <Item
        name='summary'
        rules={[
          {
            required: true,
          },
        ]}
      >
        <TextAreaWrapper label='Personal summary' />
      </Item>
      <Item
        name='company'
        rules={[
          {
            required: true,
          },
        ]}
      >
        <InputWrapper label='Current company' />
      </Item>
      <Item
        name='experience'
        rules={[
          {
            required: true,
          },
        ]}
      >
        <SelectWrapper
          label='Years of experience'
          options={getExpirenceOptions(20)}
        />
      </Item>
      <Item
        name='expertise'
        rules={[
          {
            required: true,
          },
        ]}
      >
        <TagWrapper label='Area of expertise' />
      </Item>
      <div className='saveFooter'>
        <div className='blackBtn' onClick={() => uploadBasic()}>
          Save Changes
        </div>
      </div>
    </Form>
  );
};

export default Basic;
