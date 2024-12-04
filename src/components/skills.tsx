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

export function MarqueeDemo() {
  return (
    <div>
      <Marquee pauseOnHover className='[--duration:60s]'>
        {skills.map((skill) => (
          <SkillCard key={skill.text} {...skill} />
        ))}
      </Marquee>
      {/* <div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background'></div> */}
    </div>
  );
}

const Skills = () => {
  return (
    <>
      <div className='max-w-[940px]'>
        <MarqueeDemo />
        <div className='flex flex-col justify-center gap-4'>
          {/* <Card>
            <CardHeader> Tech I've used </CardHeader>
            <CardContent className='flex justify-center gap-4 flex-wrap'>
              <TechRow
                text='ReactJS'
                link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
                alt='React logo'
              />
              <TechRow
                text='Next.js'
                link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
                alt='next.js logo'
              />
              <TechRow
                text='JavaScript'
                alt='javascript logo'
                link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
              />
              <TechRow
                text='TypeScript'
                alt='typescript logo'
                link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
              />
              <TechRow
                text='CSS3'
                alt='CSS3 logo'
                link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
              />
              <TechRow
                text='HTML5'
                alt='HTML5 logo'
                link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
              />
              <TechRow
                text='TailwindCSS'
                alt='tailwindcss logo'
                link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
              />
              <TechRow
                text='Sass'
                alt='sass logo'
                link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'
              />
              <TechRow
                text='Storybook'
                alt='storybook logo'
                link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg'
              />
              <TechRow
                text='JQuery'
                alt='jquery logo'
                link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain.svg'
              />
              <TechRow
                text='Redux'
                alt='redux logo'
                link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'
              />
              <TechRow
                text='Figma'
                alt='figma logo'
                link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
              />
              <TechRow
                text='NodeJs'
                alt='nodejs logo'
                link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
              />
              <TechRow
                text='MongoDB'
                alt='mongodb logo'
                link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg'
              />
              <TechRow
                text='PostgreSQL'
                alt='postgres logo'
                link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg'
              />
              <TechRow
                text='Redis'
                alt='redis logo'
                link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-plain-wordmark.svg'
              />
              <TechRow
                text='ExpressJS'
                alt='express logo'
                link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
              />
              <TechRow
                text='Git'
                alt='git logo'
                link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg'
              />
              <TechRow
                text='Vite'
                alt='vite logo'
                link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg'
              />
              <TechRow
                text='Yarn'
                alt='yarn logo'
                link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg'
              />
              <TechRow
                text='Vscode'
                alt='vscode logo'
                link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
              />
              <TechRow
                text='Jest'
                alt='jest logo'
                link='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg'
              />
            </CardContent>
          </Card> */}
        </div>
      </div>
    </>
  );
};
export default Skills;
