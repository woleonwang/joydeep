import { Form, Input, Select } from 'antd';
import InputWrapper from 'components/InputWrapper';
import SelectWrapper from 'components/SelectWrapper';
import TagWrapper from 'components/TagWrapper';
import { useEffect } from 'react';
import styles from './style.module.scss';

const { useForm, Item } = Form;
const Basic = () => {
  const [form] = useForm();

  useEffect(() => {
    // form.validateFields();
  }, []);

  return (
    <Form form={form} layout='vertical' className={styles.form}>
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
              value: '1',
              label: '1 year',
            },
            {
              value: '2',
              label: '2 years',
            },
            {
              value: '3',
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
        <div className='blackBtn'>Save Changes</div>
      </div>
    </Form>
  );
};

export default Basic;
