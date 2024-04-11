import Link from 'next/link';
import NavLink from '../NavLink';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_inner}>
        <p style={{ padding: '1em', margin: 0 }}>
          Freddie Groom - software developer
        </p>
        <nav>
          <NavLink href='/'>Home</NavLink>
          <NavLink href='/about'>About</NavLink>
          <NavLink href='/contact'>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
