import { Button, Checkbox, Form } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import InputNumberWrapper from 'components/InputNumberWrapper';
import InputWrapper from 'components/InputWrapper';
import { useEffect } from 'react';
import styles from './style.module.scss';

const { useForm, Item, List } = Form;
const Candidates = () => {
  const [form] = useForm();

  useEffect(() => {
    // form.validateFields();
    fetchData();
  }, []);

  const fetchData = () => {
    form.setFieldValue('breakdowns', [{}]);
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

      <List name='breakdowns'>
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
                  <InputWrapper label='Percentage of the whole candidate pool' />
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
    </Form>
  );
};

export default Candidates;
