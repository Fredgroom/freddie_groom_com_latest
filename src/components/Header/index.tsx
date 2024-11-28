import Link from 'next/link';
import NavLink from '../NavLink';
import styles from './header.module.css';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { ThemeSwitcher } from '../themeSwitcher';

const MobileMenu = ({ closeMenu }: NavProps) => {
  return (
    <div className={styles.mobileMenu}>
      <nav className={styles.mobileNav}>
        <NavLink onClick={closeMenu} href='/'>
          Home
        </NavLink>
        <NavLink onClick={closeMenu} href='/projects'>
          Projects
        </NavLink>
        <NavLink onClick={closeMenu} href='/about'>
          About
        </NavLink>
        <NavLink onClick={closeMenu} href='/contact'>
          Contact
        </NavLink>
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
          strokeLinecap='round'
          stroke-linejoin='round'
          d='M4 6h16M4 12h16m-16 6h16'
        />
      </svg>
    </div>
  ) : (
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
        <path d='M6 18L18 6M6 6l12 12' />
      </svg>
    </div>
  );
};

interface NavProps {
  closeMenu: () => void;
}

const Nav = ({ closeMenu }: NavProps) => {
  return (
    <nav className={styles.menu}>
      <NavLink href='/' onClick={closeMenu}>
        Home
      </NavLink>
      <NavLink href='/projects' onClick={closeMenu}>
        Projects
      </NavLink>
      <NavLink href='/about' onClick={closeMenu}>
        About
      </NavLink>
      <NavLink href='/contact' onClick={closeMenu}>
        Contact
      </NavLink>
    </nav>
  );
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  const closeMenu: () => void = () => {
    setMenuOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (divRef.current && !divRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <header className={styles.header} ref={divRef}>
      <div className={styles.header_outer}>
        <div className={styles.header_inner}>
          <Link href='/' className={styles.header_home_link}>
            PORTFOLIO
            {/* SOFTWARE DEVELOPER PORTFOLIO{' '} */}
          </Link>
          <Nav closeMenu={closeMenu} />
          <MobileMenuToggle menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
        <ThemeSwitcher />
      </div>
      {menuOpen && <MobileMenu closeMenu={closeMenu} />}
    </header>
  );
};

export default Header;
