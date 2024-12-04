import Download from '@/components/download';
import Skills from '@/components/skills';
import { Button } from '@/components/ui/button';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <div className='overflow-x-hidden'>
        <h1 className='text-8xl break-words mb-8 text-center'>
          Hi, I'm Freddie
        </h1>
        <h2 className='text-4xl break-words m-0 text-center'>
          I turn designs into products
        </h2>
        <div className='flex justify-center my-8'>
          <div className='flex items-center gap-6'>
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
            <Download />
            <a
              href='mailto:fredgroom@gmail.com?subject=Inquiry&body=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services%20as%20a%20frontend%20developer...'
              aria-label='Send Freddie an email'
            >
              <Button variant='outline' className='text-lg py-5'>
                Send me an email
              </Button>
            </a>
          </div>
        </div>
        <Skills />
      </div>
    </>
  );
};

export default Home;
