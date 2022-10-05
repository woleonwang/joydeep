/*
 * @LastEditors: wmy
 * @Description: 功能描述
 * @Date: 2022-06-12 01:21:43
 * @Author: wmy
 * @LastEditTime: 2022-06-12 01:49:53
 */

import classnames from 'classnames';
import router from 'next/router';
import styles from './styles.module.scss';

interface IProps {
  // 是否已经完成简历
  isFinish: boolean;
  // 是否禁止下一步
  disabled: boolean;
  // 当前步骤
  currentStep: string;
  // 点击事件
  onClick: () => void;
}

const Steps = [
  'english_skills',
  'basic',
  'availability',
  'technical_skills',
  'experience',
  'projects',
  'web3',
  'salary',
];

const NextStep = (props: IProps) => {
  const { isFinish, disabled, currentStep, onClick } = props;

  const isFirst = Steps[0] === currentStep;
  const isLast = Steps[Steps.length - 1] === currentStep;

  const goToPrev = () => {
    const lastStep = Steps[Steps.indexOf(currentStep) - 1];
    router.push(
      isFinish ? '/developers/profile' : `/developers/profile/${lastStep}`
    );
  };

  return isFinish ? (
    <div
      className={classnames(styles.submitBtn, {
        [styles.disabled]: disabled,
      })}
      onClick={onClick}
    >
      保存
    </div>
  ) : (
    <>
      {!isFirst && (
        <div
          style={{ marginRight: 30 }}
          className={styles.submitBtn}
          onClick={goToPrev}
        >
          上一步
        </div>
      )}
      <div
        className={classnames(styles.submitBtn, {
          [styles.disabled]: disabled,
        })}
        onClick={onClick}
      >
        {isLast ? '完成' : '下一步'}
      </div>
    </>
  );
};

export default NextStep;
