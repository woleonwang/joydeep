import { Button, Form, Input } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import InputNumberWrapper from 'components/InputNumberWrapper';
import InputWrapper from 'components/InputWrapper';
import { useEffect } from 'react';
import styles from './style.module.scss';
import DatePickerWrapper from 'components/DatePickerWrapper';

const { useForm, Item, List } = Form;
const Placements = () => {
  const [form] = useForm();

  useEffect(() => {
    // form.validateFields();
  }, []);

  return (
    <Form form={form} layout='vertical' className={styles.form}>
      <Item
        name='number_of_candidates'
        rules={[
          {
            required: true,
          },
        ]}
      >
        <InputNumberWrapper label='Total number of candidates placed' />
      </Item>
      <Item
        name='salary_of_candidates'
        rules={[
          {
            required: true,
          },
        ]}
      >
        <InputNumberWrapper label='Total salary of candidates placed' />
      </Item>

      <div>Recent placements</div>
      <List name='placements'>
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <div key={key}>
                <Item
                  {...restField}
                  name={[name, 'date']}
                  rules={[{ required: true }]}
                >
                  <DatePickerWrapper label='Date' />
                </Item>
                <Item
                  {...restField}
                  name={[name, 'position']}
                  rules={[{ required: true }]}
                >
                  <InputWrapper label='Position' />
                </Item>
                <Item
                  {...restField}
                  name={[name, 'company']}
                  rules={[{ required: true }]}
                >
                  <InputWrapper label='Company' />
                </Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </div>
            ))}
            <Button
              type='dashed'
              onClick={() => add()}
              block
              icon={<PlusOutlined />}
            >
              Add field
            </Button>
          </>
        )}
      </List>
    </Form>
  );
};

export default Placements;
