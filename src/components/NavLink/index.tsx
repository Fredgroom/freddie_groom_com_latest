import Link from 'next/link';
import styles from './NavLink.module.css';

interface NavLinkProps {
  href: string;
  children: string;
  onClick: () => void;
}

const NavLink = ({ href, children, onClick }: NavLinkProps) => {
  return (
    <Link href={href} className={styles.navLink} onClick={() => onClick()}>
      {children}
    </Link>
  );
};

export default NavLink;
