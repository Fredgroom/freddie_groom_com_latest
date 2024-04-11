import { ReactNode } from 'react';
import styles from './content.module.css';

interface ContentProps {
  children: ReactNode;
}
const Content = ({ children }: ContentProps) => {
  return (
    <div className={styles.content}>
      <div className={styles.content_inner_wrapper}>{children}</div>
    </div>
  );
};

export default Content;
