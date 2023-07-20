import { Button, Form } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import InputWrapper from 'components/InputWrapper';
import { useEffect, useState } from 'react';
import styles from './style.module.scss';
import TextAreaWrapper from 'components/TextAreaWrapper';

const { useForm, Item, List } = Form;
const Publications = () => {
  const [form] = useForm();

  useEffect(() => {
    // form.validateFields();
    fetchData();
  }, []);

  const fetchData = () => {
    form.setFieldValue('publications', [{}]);
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
        <div className='blackBtn'>Save Changes</div>
      </div>
    </Form>
  );
};

export default Publications;
