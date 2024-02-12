import { Form, Input, Select, message } from 'antd';
import styles from './style.module.scss';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import request from 'utils/request';
import context from 'context/context';
import { ENDORSEMENT_IDENTITY } from 'utils/constants';
import { isRespSucceed } from 'utils/helper';

type ICollapseKeys = 'page' | 'detail';

const Item = Form.Item;
const EndorsementInvite = () => {
  const [activeKey, setActiveKey] = useState<ICollapseKeys>('page');

  const [form] = Form.useForm();

  const { query } = useRouter();

  const userId = BigInt(query.userId as string);
  const inviteId = BigInt(query.inviteId as string);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resp = await request.get('recruiters.getEndorsements', {
      placeholder: { user_id: `${userId}` },
      invite_id: inviteId,
    });

    if (resp && !resp.message?.err_code) {
      form.setFieldValue('content', resp.message.endorsements[0].content);
    }
  };

  const submit = async () => {
    form.validateFields().then(async (values) => {
      const { name, title, company, identify, content } = values;
      const resp = await request.post('recruiters.updateEndorsement', {
        user_id: userId,
        invite_id: inviteId,
        endorser: name,
        title,
        company,
        identity: ENDORSEMENT_IDENTITY.find((item) => item.key === identify)
          ?.value,
        content,
        status: 2,
      });

      if (isRespSucceed(resp)) {
        message.success('Submit succeed!');
      } else {
        message.error('Submit failed');
      }
    });
  };

  return (
    <div className={styles.formWrapper}>
      <Form form={form} preserve layout='vertical' className={styles.formPanel}>
        {activeKey === 'page' ? (
          <div>
            <div className={styles.formTitle}>Write your endorsements</div>
            <Item name='content'>
              <Input.TextArea
                placeholder={'Write your endorsements'}
                autoSize={{ maxRows: 5, minRows: 5 }}
              />
            </Item>
            <div className='blackBtn' onClick={() => setActiveKey('detail')}>
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
  );
};

export default EndorsementInvite;
