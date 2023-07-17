import { Input } from 'antd';
import { ChangeEventHandler } from 'react';
import styles from './style.module.scss';

export interface IProps {
  label: string;
  value?: string;
  onChange?: ChangeEventHandler;
}

const InputWrapper = ({ label, value, onChange }: IProps) => {
  return (
    <div className={styles.inputWrapper}>
      <div className={styles.inputLabel}>{label}</div>
      <Input bordered={false} value={value} onChange={onChange} />
    </div>
  );
};

export default InputWrapper;
