import Download from '../Download';
import { Large } from '../Typography';
import { Toaster } from '../ui/toaster';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='flex pt-11 px-8 py-4 justify-between items-center'>
      <div>
        <Large>&copy; {new Date().getFullYear()} freddiegroom.com</Large>
      </div>
      <div className='flex items-center gap-4'>
        <Link href='https://github.com/fredgroom'>
          <GitHubLogoIcon className='w-12 h-12' />
        </Link>
        <Link href='https://www.linkedin.com/in/freddie-groom/'>
          <LinkedInLogoIcon className='w-12 h-12' />
        </Link>
        <Download />
      </div>
    </footer>
  );
};

export default Footer;
