import { Button, Checkbox, Form, message } from 'antd';
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
import { IRecriuterProfileApi } from 'utils/type';
import request from 'utils/request';
import context from 'context/context';
import moment, { Moment } from 'moment';

interface IProps {
  profile: Partial<IRecriuterProfileApi>;
}

interface IFormData {
  number_of_candidates: number;
  salary_of_candidates: number;
  placements: {
    date: Moment;
    position: string;
    company: string;
    verified: boolean;
  }[];
}

const datetimeZeroValue = '1970-01-01T00:00:00+08:00';
const { useForm, Item, List } = Form;
const Placements = (props: IProps) => {
  const {
    profile: { profile, placements },
  } = props;
  const { userInfo } = context.useGlobalContext();

  const [isHide, setIsHide] = useState(false);
  const [form] = useForm<IFormData>();

  useEffect(() => {
    if (profile && placements) {
      form.setFieldsValue({
        number_of_candidates: profile.total_placed_candidates,
        salary_of_candidates: profile.total_placed_salary,
        placements:
          placements.length > 0
            ? placements
                .sort((a, b) => (a.id > b.id ? 1 : -1))
                .map((item) => ({
                  date:
                    item.date === datetimeZeroValue
                      ? undefined
                      : moment(item.date, 'YYYY-MM-DD'),
                  position: item.position,
                  company: item.company,
                  verified: item.verified,
                }))
            : [{}],
      });
    } else {
      form.setFieldsValue({
        placements: [{}],
      });
    }
  }, [profile]);

  const uploadPlacements = () => {
    form.validateFields().then(async (value) => {
      const result = await request.post('recruiters.updateProfile', {
        user_id: userInfo.userId,
        profile: {
          total_placed_candidates: value.number_of_candidates,
          total_placed_salary: value.salary_of_candidates,
        },
        placements: value.placements.map((item) => ({
          date: item.date?.unix(),
          position: item.position,
          company: item.company,
          verified: item.verified,
        })),
      });
      if (!result?.message?.err_code) {
        message.success('Profile updated');
      }
    });
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
            <Button
              onClick={() => add(undefined, 0)}
              block
              icon={<PlusOutlined />}
              className={styles.footerBtn}
            >
              Add
            </Button>
            {fields.map(({ key, name, ...restField }) => (
              <div key={key} className={styles.expWrapper}>
                <Item {...restField} name={[name, 'date']}>
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
                  {/* <Item
                    {...restField}
                    name={[name, 'verified']}
                    noStyle
                    valuePropName='checked'
                  >
                    <Checkbox style={{ color: 'rgba(0, 0, 0, 0.4)' }}>
                      Verified by Landd
                    </Checkbox>
                  </Item> */}
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
          </>
        )}
      </List>
      <div className='saveFooter'>
        <div className='blackBtn' onClick={() => uploadPlacements()}>
          Save Changes
        </div>
      </div>
    </Form>
  );
};

export default Placements;
