import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Moon, MoonIcon, Sun } from 'lucide-react';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className='px-4'>
      {theme == 'dark' && (
        <Button variant='outline' onClick={() => setTheme('light')}>
          <Sun />
        </Button>
      )}
      {theme == 'light' && (
        <Button variant='outline' onClick={() => setTheme('dark')}>
          <Moon />
        </Button>
      )}
    </div>
  );
}
