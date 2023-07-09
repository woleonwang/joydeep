import { Form, Input, Select } from 'antd';

const { useForm, Item } = Form;
const Basic = () => {
  const [form] = useForm();

  return (
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
  );
};

export default Basic;
