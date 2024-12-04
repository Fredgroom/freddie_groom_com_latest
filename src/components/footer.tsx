import { Large } from './typography';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='flex pt-11 p-4 sm:p-8 justify-between items-center'>
      <div>
        <Large>&copy; {new Date().getFullYear()} freddiegroom.com</Large>
      </div>
      <div className='flex items-center gap-6'>
        <Link href='https://github.com/fredgroom'>
          <GitHubLogoIcon className='w-12 h-12' />
        </Link>
        <Link href='https://www.linkedin.com/in/freddie-groom/'>
          <LinkedInLogoIcon className='w-12 h-12' />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
