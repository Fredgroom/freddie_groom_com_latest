import Link from 'next/link';
import { Button } from '../ui/button';

const Download = () => {
  return (
    <Button variant='outline' className='text-lg bold'>
      <Link
        href={'/freddie_groom_cv.pdf'}
        target='_blank'
        rel='noopener noreferrer'
        locale={false}
        download
      >
        Resume
      </Link>
    </Button>
  );
};

export default Download;
