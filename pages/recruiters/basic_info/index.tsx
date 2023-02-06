import RecruiterLogginLayout from 'components/layouts/RecruiterLogginLayout';
import RecruiterSidebarLayout from 'components/layouts/RecruiterSidebarLayout';
import { useState, useEffect } from 'react';
import { Form, Input, Select } from 'antd';

interface IProps {
  propName: string;
}

const { useForm, Item } = Form;
const BasicInfo = (props: IProps) => {
  const { propName } = props;

  const [state, setState] = useState();

  const [form] = useForm();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {};

  return (
    <RecruiterSidebarLayout activeMenu='basic_info'>
      <Form form={form} layout='vertical'>
        <div>Basic info</div>
        <Item
          label='Name'
          name='name'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Item>
        <Item
          label='Personal summary'
          name='summary'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea />
        </Item>
        <Item
          label='Total years of professional recruiter experience'
          name='experience'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select />
        </Item>
      </Form>
    </RecruiterSidebarLayout>
  );
};

BasicInfo.layout = RecruiterLogginLayout;

export default BasicInfo;
