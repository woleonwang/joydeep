import { DatePicker } from 'antd';
import type { DatePickerProps } from 'antd';
import styles from './style.module.scss';

export interface IProps {
  label: string;
  value?: DatePickerProps['value'];
  onChange?: DatePickerProps['onChange'];
}

const DatePickerWrapper = ({ label, value, onChange }: IProps) => {
  return (
    <div className={styles.inputWrapper}>
      <div className={styles.inputLabel}>{label}</div>
      <DatePicker bordered={false} value={value} onChange={onChange} />
    </div>
  );
};

export default DatePickerWrapper;
