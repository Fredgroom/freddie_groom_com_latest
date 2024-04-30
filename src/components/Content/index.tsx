import { ReactNode } from 'react';
import styles from './content.module.css';

interface ContentProps {
  children: ReactNode;
}
const Content = ({ children }: ContentProps) => {
  return (
    <div className={styles.content}>
      <div className={styles.content_inner_wrapper}>
        <div style={{ height: '100px' }}></div>
        <>{children}</>
      </div>
    </div>
  );
};

export default Content;
