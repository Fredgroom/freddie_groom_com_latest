import { cn } from '@/lib/utils';
import Marquee from './ui/marquee';
import Image from 'next/image';

const skills = [
  {
    text: 'ReactJS',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    alt: 'React logo',
  },
  {
    text: 'Next.js',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    alt: 'next.js logo',
  },
  {
    text: 'JavaScript',
    alt: 'javascript logo',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    text: 'TypeScript',
    alt: 'typescript logo',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    text: 'CSS3',
    alt: 'CSS3 logo',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    text: 'HTML5',
    alt: 'HTML5 logo',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    text: 'TailwindCSS',
    alt: 'tailwindcss logo',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  },
  {
    text: 'Sass',
    alt: 'sass logo',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
  },
  {
    text: 'Storybook',
    alt: 'storybook logo',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg',
  },
  {
    text: 'JQuery',
    alt: 'jquery logo',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain.svg',
  },
  {
    text: 'Redux',
    alt: 'redux logo',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  },
  {
    text: 'Figma',
    alt: 'figma logo',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  },
  {
    text: 'NodeJs',
    alt: 'nodejs logo',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    text: 'MongoDB',
    alt: 'mongodb logo',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg',
  },
  {
    text: 'PostgreSQL',
    alt: 'postgres logo',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg',
  },
  {
    text: 'Redis',
    alt: 'redis logo',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-plain-wordmark.svg',
  },
  {
    text: 'ExpressJS',
    alt: 'express logo',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  },
  {
    text: 'Git',
    alt: 'git logo',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg',
  },
  {
    text: 'Vite',
    alt: 'vite logo',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg',
  },
  {
    text: 'Yarn',
    alt: 'yarn logo',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg',
  },
  {
    text: 'Vscode',
    alt: 'vscode logo',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  },
  {
    text: 'Jest',
    alt: 'jest logo',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
  },
];

const SkillCard = ({
  img,
  text,
  alt,
}: {
  img: string;
  text: string;
  alt: string;
}) => {
  return (
    <figure
      className={cn(
        'relative cursor-pointer overflow-hidden rounded-xl  border-border bg-background p-4',
        // light styles
        'border-border/[.1] bg-background/[.01] hover:bg-background/[.05]',
        // dark styles
        'dark:border-border dark:bg-background dark:hover:bg-background/[.15]'
      )}
    >
      <div className='flex flex-row items-center gap-2'>
        <Image
          className='rounded-full'
          width='32'
          height='32'
          src={img}
          alt={alt}
        />
        <div className='flex flex-col'>
          <figcaption className='text-lg text-foreground font-medium dark:text-foreground'>
            {text}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

// export function SkillMarquee() {
//   return (

//   );
// }

const Skills = () => {
  return (
    <div className='max-w-screen'>
      {/* <div className='max-w-[375px] sm:max-w-[940px]'>
        <SkillMarquee />
      </div> */}
      <Marquee
        pauseOnHover
        className='[--duration:60s] max-w-[448px] sm:max-w-[940px]'
      >
        {skills.map((skill) => (
          <SkillCard key={skill.text} {...skill} />
        ))}
      </Marquee>
    </div>
  );
};
export default Skills;
