import Download from '@/components/download';
import Skills from '@/components/skills';
import { Button } from '@/components/ui/button';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const Home = () => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-6xl sm:text-8xl break-words mb-4 sm:mb-8 text-center'>
        Hi, I'm Freddie
      </h1>
      <h2 className='text-4xl break-words m-0 mb-4 text-center'>
        I turn designs into products
      </h2>
      <Skills />
      <div className='flex flex-col items-center sm:flex-row flex-wrap justify-center sm:py-8 gap-4 sm:gap-8'>
        <div className='flex gap-8'>
          <Link
            href='https://github.com/fredgroom'
            aria-label="go to Freddie's github profile"
          >
            <GitHubLogoIcon className='w-12 h-12' />
          </Link>
          <Link
            href='https://www.linkedin.com/in/freddie-groom/'
            aria-label="visit Freddie's LinkedIn profile"
          >
            <LinkedInLogoIcon className='w-12 h-12' />
          </Link>
        </div>
        <Download />
        <a
          href='mailto:fredgroom@gmail.com?subject=Inquiry&body=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services%20as%20a%20frontend%20developer...'
          aria-label='Send Freddie an email'
        >
          <Button variant='outline' className='text-lg py-5'>
            Email me
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Home;
