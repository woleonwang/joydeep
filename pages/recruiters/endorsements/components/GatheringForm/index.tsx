import { Collapse, Form, Input, Select } from 'antd';
import { ExportOutlined } from '@ant-design/icons';
import TextAreaWrapper from 'components/TextAreaWrapper';
import { useState, useEffect } from 'react';
import styles from './style.module.scss';

const { Panel } = Collapse;

type ICollapseKeys = 'page' | 'detail';

interface IFormData {
  name: string;
  identify: number;
  company: string;
  title: string;
  content: string;
}

const { useForm, Item } = Form;

const GatheringForm = () => {
  const [activeKey, setActiveKey] = useState<ICollapseKeys>('page');
  const [pagePlaceholder, setPagePlaceholder] = useState('');
  const [form] = useForm<IFormData>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {};

  const save = () => {};

  const submit = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Collapse
          accordion
          activeKey={activeKey}
          expandIconPosition='end'
          onChange={(key) => {
            key && setActiveKey(key as ICollapseKeys);
          }}
          className={styles.collapse}
          bordered={false}
        >
          <Panel header='Endorsements page' key='page'>
            <div>
              <TextAreaWrapper
                label='Endorsements details'
                value={pagePlaceholder}
                onChange={(e) => setPagePlaceholder((e.target as any).value)}
              />
            </div>
          </Panel>
          <Panel header='Endorsements details' key='detail'></Panel>
        </Collapse>
        <div className='saveFooter'>
          <div className='blackBtn' onClick={() => save()}>
            Save Changes
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.linkWrapper}>
          <div className={styles.linkBtn}>
            Link
            <ExportOutlined className={styles.icon} />
          </div>
        </div>
        <div className={styles.formWrapper}>
          <div className={styles.formLabel}>PREVIEW</div>
          <Form
            form={form}
            preserve
            layout='vertical'
            className={styles.formPanel}
          >
            {activeKey === 'page' ? (
              <div>
                <div className={styles.formTitle}>Write your endorsements</div>
                <Item name='content'>
                  <Input.TextArea
                    placeholder={pagePlaceholder}
                    autoSize={{ maxRows: 5, minRows: 5 }}
                  />
                </Item>
                <div
                  className='blackBtn'
                  onClick={() => setActiveKey('detail')}
                >
                  Continue
                </div>
              </div>
            ) : (
              <div>
                <div className={styles.formTitle}>Add your details</div>
                <Item name='name' label='Your Name' required>
                  <Input />
                </Item>
                <Item
                  name='identify'
                  label='You are a client or candidate?'
                  required
                >
                  <Select
                    options={[
                      {
                        value: 1,
                        label: 'client',
                      },
                      {
                        value: 2,
                        label: 'candidate',
                      },
                    ]}
                  />
                </Item>
                <Item name='company' label='Company'>
                  <Input />
                </Item>
                <Item name='title' label='Job title'>
                  <Input />
                </Item>
                <div className='blackBtn' onClick={() => submit()}>
                  Submit your endorsements
                </div>
              </div>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default GatheringForm;
