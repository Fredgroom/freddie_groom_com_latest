import Link from 'next/link';
import { Button } from './ui/button';

const Download = () => {
  // todo: change button and link to just link button?
  return (
    <Button variant='outline' className='text-lg bold py-5'>
      <Link
        href={'/freddie_groom_cv.pdf'}
        target='_blank'
        rel='noopener noreferrer'
        locale={false}
        download
        aria-label='download pdf of resume'
      >
        Resume
      </Link>
    </Button>
  );
};

export default Download;
