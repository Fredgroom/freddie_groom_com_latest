import { useState } from 'react';
import Download from '../Download';
import Github from '../Github';
import LinkedIn from '../LinkedIn';
import { Large } from '../Typography';
import { Button } from '../ui/button';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '../ui/toaster';

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
        <Button onClick={handleCopy}>{isCopied ? 'Copied!' : 'Copy'}</Button>
        <Toaster />
      </div>
      <div className='flex items-center '>
        <LinkedIn />
        <Github />
        <Download />
      </div>
    </footer>
  );
};

export default Footer;
