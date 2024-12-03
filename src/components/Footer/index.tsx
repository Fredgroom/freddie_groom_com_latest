import { useState } from 'react';
import Download from '../Download';
import { Large } from '../Typography';
import { Button } from '../ui/button';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '../ui/toaster';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { Clipboard } from 'lucide-react';

const Footer = () => {
  const { toast } = useToast();
  const textToCopy = 'Fredgroom@gmail.com';
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      toast({
        title: 'Email address copied!',
        description: 'You can now paste it anywhere.',
      });
    } catch (err) {
      console.error('Failed to copy text:', err);
      toast({
        title: 'Uh oh! Something went wrong.',
        description: `You couldn't copy the contact details, sorry.`,
      });
    }
  };

  return (
    <footer className='flex pt-11 px-8 py-4 justify-between'>
      <div>
        <Large>&copy; {new Date().getFullYear()} freddiegroom.com</Large>
        <Button variant='outline' onClick={handleCopy}>
          {isCopied
            ? 'Copied Fredgroom@gmail.com to clipboard!'
            : `Fredgroom@gmail.com`}{' '}
          <Clipboard />
        </Button>
        <Toaster />
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
