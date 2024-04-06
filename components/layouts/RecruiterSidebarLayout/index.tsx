import { LayoutOutlined } from '@ant-design/icons';
import Sidebar from './Sidebar';
import styles from './styles.module.scss';

interface IProps {
  activeMenu: 'profile' | 'endorsements';
  children: React.ReactNode;
}

const RecruiterSidebarLayout = (props: IProps) => {
  const { activeMenu, children } = props;
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Sidebar activeMenu={activeMenu} />
      </div>

      <div className={styles.right}>
        <div className={styles.breadcrumb}>
          <div>
            <LayoutOutlined />
          </div>
          <div className={styles.levelOne}>
            Dashboards&nbsp;&nbsp;/&nbsp;&nbsp;
          </div>
          <div>{activeMenu}</div>
        </div>
        <div className={styles.innerContainer}>{children}</div>
      </div>
    </div>
  );
};

export default RecruiterSidebarLayout;
