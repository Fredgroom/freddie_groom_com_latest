import Link from 'next/link';
import styles from './download.module.css';

const Download = () => {
  return (
    <Link
      className={styles.download}
      href={'/freddie_groom_cv.pdf'}
      target='_blank'
      rel='noopener noreferrer'
      locale={false}
      download
    >
      Download Resume
    </Link>
  );
};

export default Download;
