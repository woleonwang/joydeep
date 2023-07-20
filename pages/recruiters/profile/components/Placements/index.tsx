import { Button, Checkbox, Form } from 'antd';
import {
  PlusOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
} from '@ant-design/icons';
import InputNumberWrapper from 'components/InputNumberWrapper';
import InputWrapper from 'components/InputWrapper';
import { useEffect, useState } from 'react';
import styles from './style.module.scss';
import DatePickerWrapper from 'components/DatePickerWrapper';

const { useForm, Item, List } = Form;
const Placements = () => {
  const [isHide, setIsHide] = useState(false);
  const [form] = useForm();

  useEffect(() => {
    // form.validateFields();
    fetchData();
  }, []);

  const fetchData = () => {
    form.setFieldValue('placements', [{}]);
  };

  return (
    <Form form={form} layout='vertical' className={styles.form}>
      <div className={styles.inlineInputWrapper}>
        <Item
          name='number_of_candidates'
          className={styles.inlineInput}
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
          className={styles.inlineInput}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumberWrapper label='Total salary of candidates placed' />
        </Item>
      </div>

      <div className={styles.titleWrapper}>
        <div className={styles.title}>Recent placements</div>
        <div className={styles.hideBtn} onClick={() => setIsHide(!isHide)}>
          {isHide ? (
            <>
              <EyeInvisibleOutlined style={{ marginRight: 8 }} /> Show
            </>
          ) : (
            <>
              <EyeOutlined style={{ marginRight: 8 }} /> Hide
            </>
          )}
        </div>
      </div>
      <List name='placements'>
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <div key={key} className={styles.expWrapper}>
                <Item
                  {...restField}
                  name={[name, 'date']}
                  rules={[{ required: true, message: 'Please enter date' }]}
                >
                  <DatePickerWrapper label='Date' />
                </Item>
                <Item
                  {...restField}
                  name={[name, 'position']}
                  rules={[{ required: true, message: 'Please enter position' }]}
                >
                  <InputWrapper label='Position' />
                </Item>
                <Item
                  {...restField}
                  name={[name, 'company']}
                  rules={[{ required: true, message: 'Please enter company' }]}
                >
                  <InputWrapper label='Company' />
                </Item>
                <div className={styles.footer}>
                  <Item {...restField} name={[name, 'verified']} noStyle>
                    <Checkbox style={{ color: 'rgba(0, 0, 0, 0.4)' }}>
                      Verified by Landd
                    </Checkbox>
                  </Item>
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

export default Placements;
