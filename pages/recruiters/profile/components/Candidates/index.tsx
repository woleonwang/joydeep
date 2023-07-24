import { Button, Checkbox, Form, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import InputNumberWrapper from 'components/InputNumberWrapper';
import InputWrapper from 'components/InputWrapper';
import { useEffect } from 'react';
import styles from './style.module.scss';
import { IRecriuterProfileApi } from 'utils/type';
import request from 'utils/request';
import context from 'context/context';

interface IProps {
  profile: Partial<IRecriuterProfileApi>;
}

interface IFormData {
  number_of_candidates: number;
  candidates: {
    title: string;
    percentage: number;
  }[];
}

const { useForm, Item, List } = Form;
const Candidates = (props: IProps) => {
  const {
    profile: { profile, candidates },
  } = props;
  const [form] = useForm<IFormData>();
  const { userInfo } = context.useGlobalContext();

  useEffect(() => {
    if (profile && candidates) {
      form.setFieldsValue({
        number_of_candidates: profile.total_candidates,
        candidates:
          candidates.length > 0
            ? candidates.map((item) => ({
                title: item.title,
                percentage: item.percentage,
              }))
            : [{}],
      });
    }
  }, []);

  const uploadCandidates = () => {
    form.validateFields().then(async (value) => {
      const result = await request.post('recruiters.updateProfile', {
        user_id: userInfo.userId,
        profile: {
          total_candidates: value.number_of_candidates,
        },
        candidates: value.candidates.map((item) => ({
          title: item.title,
          percentage: item.percentage,
        })),
      });
      if (!result?.message?.err_code) {
        message.success('Profile updated');
      }
    });
  };

  return (
    <Form form={form} layout='vertical' className={styles.form}>
      <Item
        name='number_of_candidates'
        rules={[
          {
            required: true,
            message: 'Please enter number',
          },
        ]}
      >
        <InputNumberWrapper label='Total number of candidates' />
      </Item>

      <div className={styles.titleWrapper}>
        <div className={styles.title}>Breakdown</div>
      </div>

      <List name='candidates'>
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
                  name={[name, 'percentage']}
                  rules={[
                    { required: true, message: 'Please enter percentage' },
                  ]}
                >
                  <InputNumberWrapper label='Percentage of the whole candidate pool' />
                </Item>
                <div className={styles.footer}>
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
        <div className='blackBtn' onClick={() => uploadCandidates()}>
          Save Changes
        </div>
      </div>
    </Form>
  );
};

export default Candidates;
