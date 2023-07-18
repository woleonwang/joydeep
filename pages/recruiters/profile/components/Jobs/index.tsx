import { Button, Form } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import InputWrapper from 'components/InputWrapper';
import { useEffect, useState } from 'react';
import styles from './style.module.scss';
import TextAreaWrapper from 'components/TextAreaWrapper';

const { useForm, Item, List } = Form;
const Jobs = () => {
  const [isHide, setIsHide] = useState(false);
  const [form] = useForm();

  useEffect(() => {
    // form.validateFields();
    fetchData();
  }, []);

  const fetchData = () => {
    form.setFieldValue('jobs', [{}]);
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
    </Form>
  );
};

export default Jobs;
