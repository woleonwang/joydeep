import { Button, Form, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import InputWrapper from 'components/InputWrapper';
import { useEffect } from 'react';
import styles from './style.module.scss';
import { IRecriuterProfileApi } from 'utils/type';
import context from 'context/context';
import request from 'utils/request';

interface IProps {
  profile: Partial<IRecriuterProfileApi>;
}

interface IFormData {
  publications: {
    title: string;
    link: string;
  }[];
}

const { useForm, Item, List } = Form;
const Publications = (props: IProps) => {
  const [form] = useForm<IFormData>();
  const {
    profile: { publications },
  } = props;
  const { userInfo } = context.useGlobalContext();

  useEffect(() => {
    if (publications) {
      form.setFieldsValue({
        publications:
          publications.length > 0
            ? publications.map((item) => ({
                title: item.title,
                link: item.link,
              }))
            : [{}],
      });
    } else {
      form.setFieldsValue({
        publications: [{}],
      });
    }
  }, [publications]);

  const updatePublications = () => {
    form.validateFields().then(async (value) => {
      const result = await request.post('recruiters.updateProfile', {
        user_id: userInfo.userId,
        publications: value.publications.map((item) => ({
          title: item.title,
          link: item.link,
        })),
      });
      if (!result?.message?.err_code) {
        message.success('Profile updated');
      }
    });
  };

  return (
    <Form form={form} layout='vertical' className={styles.form}>
      <List name='publications'>
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <div key={key} className={styles.expWrapper}>
                <Item
                  {...restField}
                  name={[name, 'title']}
                  rules={[
                    {
                      required: true,
                      message: 'Please enter publication title',
                    },
                  ]}
                >
                  <InputWrapper label='Publication title' />
                </Item>
                <Item
                  {...restField}
                  name={[name, 'link']}
                  rules={[{ required: true, message: 'Please enter link' }]}
                >
                  <InputWrapper label='Link' />
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
        <div className='blackBtn' onClick={() => updatePublications()}>
          Save Changes
        </div>
      </div>
    </Form>
  );
};

export default Publications;
