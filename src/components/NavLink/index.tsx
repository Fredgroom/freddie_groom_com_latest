import Link from 'next/link';
import styles from './NavLink.module.css';

interface NavLinkProps {
  href: string;
  children: string;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <>
      <Link
        href={href}
        style={{
          textDecoration: 'none',
          // color: 'white',
          margin: 0,
          padding: '1em',
        }}
        className={styles.navLink}
      >
        {children}
      </Link>
    </>
  );
};

export default NavLink;
