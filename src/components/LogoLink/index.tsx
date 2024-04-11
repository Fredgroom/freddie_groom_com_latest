import Link from 'next/link';
import styles from './logoLink.module.css';

interface LogoLinkProps {
  href: string;
  img: string;
}
const LogoLink = ({ href, img }: LogoLinkProps) => {
  return (
    <Link href={href} className={styles.link}>
      <img src={img} className={styles.linkImage} />
    </Link>
  );
};

export default LogoLink;
