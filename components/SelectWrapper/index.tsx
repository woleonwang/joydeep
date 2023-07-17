import { Select, SelectProps } from 'antd';
import styles from './style.module.scss';

export interface IProps extends SelectProps {
  label: string;
}

const SelectWrapper = ({ label, ...restProps }: IProps) => {
  return (
    <div className={styles.inputWrapper}>
      <div className={styles.inputLabel}>{label}</div>
      <Select bordered={false} {...restProps} />
    </div>
  );
};

export default SelectWrapper;
