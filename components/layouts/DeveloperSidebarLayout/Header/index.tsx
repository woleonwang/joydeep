/*
 * @LastEditors: wmy
 * @Description: 功能描述
 * @Date: 2022-05-28 15:57:49
 * @Author: wmy
 * @LastEditTime: 2022-06-12 00:39:43
 */

import styles from './styles.module.scss';
import { getTransfer } from 'utils/i18n';
import { useMemo } from 'react';
import classNames from 'classnames';

interface IProps {
  locale: 'en' | 'zh';
  activeKey: string;
}

const Header = (props: IProps) => {
  const { locale, activeKey } = props;

  const options = useMemo(() => {
    const transfer = getTransfer(locale);
    const getText = (key: string) => transfer(`profile.header.${key}`);
    return [
      {
        key: 'english_skills',
        label: getText('english_skills'),
      },
      {
        key: 'basic',
        label: getText('basic'),
      },
      {
        key: 'availability',
        label: getText('availability'),
      },
      {
        key: 'technical_skills',
        label: getText('technical_skills'),
      },
      {
        key: 'experience',
        label: getText('experience'),
      },
      {
        key: 'projects',
        label: getText('projects'),
      },
      {
        key: 'web3',
        label: getText('web3'),
      },
      {
        key: 'salary',
        label: getText('salary'),
      },
    ];
  }, [locale]);

  return (
    <div className={styles.container}>
      <div className={styles.line} />
      {options.map((option) => {
        return (
          <div
            className={classNames(styles.item, {
              [styles.active]: activeKey === option.key,
            })}
            key={option.key}
          >
            <div className={styles.circle} />
            <div className={styles.label}> {option.label}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Header;
