import Link from 'next/link';
import styles from './download.module.css';

const Download = () => {
  return (
    // <div className={styles.download_wrapper}>
    <Link
      className={styles.download}
      href={'/freddie_groom_cv.pdf'}
      target='_blank'
      rel='noopener noreferrer'
      locale={false}
      download
    >
      Resume
    </Link>
    // </div>
  );
};

export default Download;
