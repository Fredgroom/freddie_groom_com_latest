import Download from '../Download';
import Github from '../Github';
import LinkedIn from '../LinkedIn';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_outer}>
        <div className={styles.footer_inner}>
          <div>
            <p>Fredgroom@gmail.com</p>
            <p>&copy; {new Date().getFullYear()} freddiegroom.com</p>
          </div>
          <div className={styles.footer_link_wrapper}>
            <LinkedIn />
            <Github />
            <Download />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
