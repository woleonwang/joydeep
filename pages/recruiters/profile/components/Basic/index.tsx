/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react';
import { Form, message, Upload } from 'antd';
import InputWrapper from 'components/InputWrapper';
import SelectWrapper from 'components/SelectWrapper';
import TagWrapper from 'components/TagWrapper';
import context from 'context/context';
import request from 'utils/request';
import { IRecriuterProfileApi } from 'utils/type';
import styles from './style.module.scss';
import { defaultAvatar } from 'utils/constants';

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
          const currentAvatar = photo ? `/api/file/${photo}` : defaultAvatar;

          return (
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
              <img className={styles.avatar} src={currentAvatar} alt='' />
            </Upload>
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
        <InputWrapper label='Personal summary' />
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
          options={[
            {
              value: 1,
              label: '1 year',
            },
            {
              value: 2,
              label: '2 years',
            },
            {
              value: 3,
              label: '3 years',
            },
          ]}
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
