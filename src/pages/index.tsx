import { ReactNode } from 'react';
import { H2, H3 } from '../components/Typography/index';

const SkillContainer = ({ children }: { children: ReactNode }) => {
  return <div className='flex flex-wrap'>{children}</div>;
};

const Home = () => {
  return (
    <>
      <h1 className='text-8xl break-words mb-8 text-center'>
        Hi, I'm Freddie a Frontend Developer
      </h1>
      <h1 className='text-4xl break-words m-0 text-center'>
        I Turn Designs into Functional, Accessible Products
      </h1>
      <div className='max-w-[940px]'>
        <H2>Skills</H2>
        <div className='flex justify-center'>
          <div>
            <H3>Frontend</H3>
            <SkillContainer>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
                height='40'
                alt='react logo'
              />
              <div className='w-4' />
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
                height='40'
                alt='nextjs logo'
              />
              <div className='w-4' />
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
                height='40'
                alt='javascript logo'
              />
              <div className='w-4' />
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
                height='40'
                alt='typescript logo'
              />
              <div className='w-4' />
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
                height='40'
                alt='css3 logo'
              />
              <div className='w-4' />
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
                height='40'
                alt='html5 logo'
              />
            </SkillContainer>
            <div className='h-4' />
            <SkillContainer>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
                height='40'
                alt='tailwindcss logo'
              />
              <div className='w-4' />
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'
                height='40'
                alt='sass logo'
              />
              <div className='w-4' />
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg'
                height='40'
                alt='storybook logo'
              />
              <div className='w-4' />
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain.svg'
                height='40'
                alt='jquery logo'
              />
              <div className='w-4' />
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'
                height='40'
                alt='redux logo'
              />
              <div className='w-4' />
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
                height='40'
                alt='figma logo'
              />
            </SkillContainer>
            <H3>Backend</H3>
            <SkillContainer>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
                height='40'
                alt='nodejs logo'
              />
              <div className='w-4' />
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg'
                height='40'
                alt='mongodb logo'
              />
              <div className='w-4' />
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg'
                height='40'
                alt='mongodb logo'
              />
              <div className='w-4' />
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-plain-wordmark.svg'
                height='40'
                alt='mongodb logo'
              />
              <div className='w-4' />
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
                height='40'
                alt='express logo'
              />
            </SkillContainer>
            <H3>Tools</H3>
            <SkillContainer>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg'
                height='40'
                alt='git logo'
              />
              <div className='w-4' />
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg'
                height='40'
                alt='vite logo'
              />
              <div className='w-4' />
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg'
                height='40'
                alt='yarn logo'
              />
              <div className='w-4' />
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
                height='40'
                alt='visual studio code logo'
              />
              <div className='w-4' />
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg'
                height='40'
                alt='jest logo'
              />
            </SkillContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
