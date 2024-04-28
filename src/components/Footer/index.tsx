import Download from '../Download';
import Github from '../Github';
import LinkedIn from '../LinkedIn';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_inner}>
        <div>
          <p>Fredgroom@gmail.com</p>
          <p>&copy; {new Date().getFullYear()} freddiegroom.com</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <LinkedIn />
          <Github />
          <Download />
        </div>
      </div>
    </footer>
  );
};

export default Footer;