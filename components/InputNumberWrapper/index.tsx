import { InputNumber } from 'antd';
import styles from './style.module.scss';

export interface IProps {
  label: string;
  value?: number;
  onChange?: (value: number | null) => void;
}

const InputWrapper = ({ label, value, onChange }: IProps) => {
  return (
    <div className={styles.inputWrapper}>
      <div className={styles.inputLabel}>{label}</div>
      <InputNumber bordered={false} value={value} onChange={onChange} />
    </div>
  );
};

export default InputWrapper;
