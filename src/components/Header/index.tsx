import NavLink from '../NavLink';
import styles from './header.module.css';
import { Dispatch, SetStateAction, useState } from 'react';

const MobileMenu = () => {
  return (
    <div>
      <nav className={styles.mobileMenu}>
        <NavLink href='/'>Home</NavLink>
        <NavLink href='/projects'>Projects</NavLink>
        <NavLink href='/about'>About</NavLink>
        <NavLink href='/contact'>Contact</NavLink>
      </nav>
    </div>
  );
};

interface MobileMenuToggleProps {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}
const MobileMenuToggle = ({ menuOpen, setMenuOpen }: MobileMenuToggleProps) => {
  const handleClick = () => {
    setMenuOpen((prevState) => !prevState);
  };
  return !menuOpen ? (
    <div className={styles.mobileMenuToggle} onClick={() => handleClick()}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='30'
        height='30'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        stroke-width='2'
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M4 6h16M4 12h16m-16 6h16'
        />
      </svg>
    </div>
  ) : (
    <div onClick={() => handleClick()}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='30'
        height='30'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        stroke-width='2'
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M6 18L18 6M6 6l12 12'
        />
      </svg>
    </div>
  );
};

const Nav = () => {
  return (
    <nav className={styles.menu}>
      <NavLink href='/'>Home</NavLink>
      <NavLink href='/projects'>Projects</NavLink>
      <NavLink href='/about'>About</NavLink>
      <NavLink href='/contact'>Contact</NavLink>
    </nav>
  );
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.header_inner}>
        <p style={{ padding: '1em', margin: 0 }}>
          PORTFOLIO
          {/* SOFTWARE DEVELOPER PORTFOLIO{' '} */}
        </p>
        <Nav />
        <MobileMenuToggle menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      {menuOpen && <MobileMenu />}
    </header>
  );
};

export default Header;
