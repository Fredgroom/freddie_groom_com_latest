import Link from 'next/link';
import { Button } from '../ui/button';
import { ThemeSwitcher } from '../themeSwitcher';

interface NavLinkProps {
  href: string;
  children: string;
}

export const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <Button variant='link'>
      <Link
        href={href}
        className='text-xl text-foreground cursor-pointer hover:text-green'
      >
        {children}
      </Link>
    </Button>
  );
};

const Header = () => {
  return (
    <header className='border-b-secondary flex justify-between pt-4 pb-12'>
      <nav>
        <NavLink href='/'>HOME</NavLink>
        {/* <NavLink href='/projects'>PROJECTS</NavLink>
        <NavLink href='/about'>ABOUT</NavLink> */}
      </nav>
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
