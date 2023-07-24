import { Button, Form, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import InputWrapper from 'components/InputWrapper';
import { useEffect } from 'react';
import styles from './style.module.scss';
import TextAreaWrapper from 'components/TextAreaWrapper';
import { IRecriuterProfileApi } from 'utils/type';
import { Moment } from 'moment';
import context from 'context/context';
import request from 'utils/request';

interface IProps {
  profile: Partial<IRecriuterProfileApi>;
}

interface IFormData {
  jobs: {
    title: Moment;
    company: string;
    description: string;
  }[];
}

const { useForm, Item, List } = Form;
const Jobs = (props: IProps) => {
  const {
    profile: { jobs },
  } = props;
  const { userInfo } = context.useGlobalContext();
  const [form] = useForm<IFormData>();

  useEffect(() => {
    if (jobs) {
      form.setFieldsValue({
        jobs:
          jobs.length > 0
            ? jobs.map((item) => ({
                title: item.title,
                company: item.company,
                description: item.description,
              }))
            : [{}],
      });
    }
  }, [jobs]);

  const uploadJobs = () => {
    form.validateFields().then(async (value) => {
      const result = await request.post('recruiters.updateProfile', {
        user_id: userInfo.userId,
        jobs: value.jobs.map((item) => ({
          title: item.title,
          company: item.company,
          description: item.description,
        })),
      });
      if (result && !result.message?.err_code) {
        message.success('Profile updated');
      }
    });
  };

  return (
    <Form form={form} layout='vertical' className={styles.form}>
      <List name='jobs'>
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <div key={key} className={styles.expWrapper}>
                <Item
                  {...restField}
                  name={[name, 'title']}
                  rules={[
                    { required: true, message: 'Please enter job title' },
                  ]}
                >
                  <InputWrapper label='Job title' />
                </Item>
                <Item
                  {...restField}
                  name={[name, 'company']}
                  rules={[{ required: true, message: 'Please enter company' }]}
                >
                  <InputWrapper label='Company' />
                </Item>
                <Item
                  {...restField}
                  name={[name, 'description']}
                  rules={[
                    { required: true, message: 'Please enter description' },
                  ]}
                >
                  <TextAreaWrapper label='Job description' />
                </Item>
                <div className={styles.footer}>
                  <div></div>
                  <div
                    style={{ cursor: 'pointer' }}
                    onClick={() => remove(name)}
                  >
                    Remove
                  </div>
                </div>
              </div>
            ))}
            <Button
              onClick={() => add()}
              block
              icon={<PlusOutlined />}
              className={styles.footerBtn}
            >
              Add
            </Button>
          </>
        )}
      </List>
      <div className='saveFooter'>
        <div className='blackBtn' onClick={() => uploadJobs()}>
          Save Changes
        </div>
      </div>
    </Form>
  );
};

export default Jobs;
