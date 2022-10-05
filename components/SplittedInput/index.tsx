/*
 * @LastEditors: wmy
 * @Description: 功能描述
 * @Date: 2022-05-02 22:05:00
 * @Author: wmy
 * @LastEditTime: 2022-06-12 21:25:54
 */

import { Input } from 'antd';
import { useRef } from 'react';
import styles from './style.module.scss';

export interface ISplittedInputProps {
  value: string[];
  length: number;
  onChange: (value: string[]) => void;
}

const SplittedInput = (props: ISplittedInputProps) => {
  const { value, length, onChange } = props;
  const inputRef = useRef<any[]>([]);

  const onSingleInputChange = (targetChar: string, targetIndex: number) => {
    onChange(
      Array(length)
        .fill(0)
        .map((_, index) => (index === targetIndex ? targetChar : value[index]))
    );
    if (targetIndex < length - 1 && targetChar.length > 0) {
      inputRef.current[targetIndex + 1].focus();
    }
  };

  const keyDownHandler = (e: any, index: number) => {
    if (!value[index] && e.which === 8 && index > 0) {
      inputRef.current[index - 1].focus();
    }
  };

  return (
    <div className={styles.splittedInput}>
      {Array(length)
        .fill(0)
        .map((_, index) => {
          return (
            <div className={styles.inputWrapper} key={index}>
              <Input
                onKeyDown={(e) => keyDownHandler(e, index)}
                ref={(e) => (inputRef.current[index] = e)}
                value={value[index]}
                maxLength={1}
                bordered={false}
                onChange={(e) => onSingleInputChange(e.target.value, index)}
                autoFocus={index === 0}
              />
            </div>
          );
        })}
    </div>
  );
};

export default SplittedInput;
