import { Input } from 'antd';
import classnames from 'classnames';
import { useState } from 'react';
import styles from './style.module.scss';

export interface IProps {
  label: string;
  value?: string[];
  onChange?: (value: string[]) => void;
}

const TagWrapper = ({ label, value = [], onChange }: IProps) => {
  const [addValue, setAddValue] = useState('');
  const [isAdd, setIsAdd] = useState(false);

  const submitTag = () => {
    if (addValue.trim().length) {
      onChange?.([addValue.trim(), ...value]);
    }
    setIsAdd(false);
    setAddValue('');
  };

  return (
    <div className={styles.inputWrapper}>
      <div className={styles.inputLabel}>{label}</div>
      <div className={styles.tagWrapper}>
        {isAdd ? (
          <Input
            value={addValue}
            onChange={(event) => setAddValue(event.target.value)}
            onPressEnter={submitTag}
            autoFocus
            size='small'
            style={{ padding: '0 6px' }}
            onBlur={submitTag}
          />
        ) : (
          <div
            className={classnames(styles.tag, styles.add)}
            onClick={() => setIsAdd(true)}
          >
            +Add
          </div>
        )}

        {value.map((item, index) => {
          return (
            <div key={index} className={styles.tag}>
              <div>{item}</div>
              <div
                onClick={() => {
                  onChange?.(value.filter((_, i) => index !== i));
                }}
                className={styles.deleteIcon}
              >
                x
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TagWrapper;
