/*
 * @LastEditors: wmy
 * @Description: 功能描述
 * @Date: 2022-05-04 14:05:32
 * @Author: wmy
 * @LastEditTime: 2022-05-28 23:00:15
 */

import { Input, InputNumber } from 'antd';
import classnames from 'classnames';
import { CheckOutlined } from '@ant-design/icons';
import styles from './styles.module.scss';

export interface IWSelectProps {
  /** 选中值 */
  value: string | string[];
  /** 选中事件 */
  onChange: (value: string | string[]) => void;
  /** 问题 */
  question: string;
  /** 提示 */
  hint?: string;
  /** 是否多选 */
  multiple?: boolean;
  /** 选项里的输入 */
  extraValue?: {
    [key: string]: {
      value?: string | number;
      type?: 'string' | 'number';
    };
  };
  /** 选项里输入的更新时间 */
  onExtraValueChange?: (key: string, value: string | number) => void;
  /** 选项 */
  options: {
    key: string;
    title: string;
    description?: string;
  }[];
  /** 自定义类 */
  className?: string;
}

const WSelect = (props: IWSelectProps) => {
  const {
    value,
    onChange,
    question,
    hint,
    options,
    multiple = false,
    extraValue,
    className,
    onExtraValueChange,
  } = props;

  const onClickHandler = (key: string) => {
    if (multiple) {
      onChange(
        value.includes(key)
          ? (value as string[]).filter((v) => v !== key)
          : [...(value as string[]), key]
      );
    } else {
      onChange(key);
    }
  };

  const checkSelected = (key: string) => {
    return multiple ? value.includes(key) : value === key;
  };

  const genTitle = (content: string, selected: boolean) => {
    const matchResult = content.match(/^(.*)##([A-Za-z_]*)##(.*)$/);
    if (matchResult) {
      const [_, prefix, extraKey, suffix] = matchResult;
      return (
        <div className={styles.title}>
          {prefix}
          {extraValue?.[extraKey]?.type === 'number' ? (
            <InputNumber
              value={extraValue?.[extraKey]?.value as number}
              onChange={(value: number) =>
                onExtraValueChange?.(extraKey, value)
              }
              style={{ marginLeft: '10px', marginRight: '10px' }}
              disabled={!selected}
            />
          ) : (
            <Input
              value={extraValue?.[extraKey]?.value}
              onChange={(e) => onExtraValueChange?.(extraKey, e.target.value)}
              style={{ marginLeft: '10px', marginRight: '10px' }}
              disabled={!selected}
            />
          )}

          {suffix}
        </div>
      );
    } else {
      return <div className={styles.title}>{content}</div>;
    }
  };

  return (
    <div className={classnames(className, styles.container)}>
      <div className={styles.question}>{question}</div>
      {hint && <div className={styles.hint}>{hint}</div>}
      <div className={styles.optionContainer}>
        {options.map((option) => {
          return (
            <div
              key={option.key}
              className={classnames(styles.option, {
                [styles.selected]: checkSelected(option.key),
              })}
            >
              <div
                onClick={() => onClickHandler(option.key)}
                className={multiple ? styles.rect : styles.circle}
              >
                {multiple && checkSelected(option.key) && <CheckOutlined />}
              </div>
              <div className={styles.text}>
                {genTitle(option.title, checkSelected(option.key))}
                <div className={styles.description}>{option.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WSelect;
