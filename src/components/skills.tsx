import { Card, CardContent, CardHeader } from './ui/card';

const TechRow = ({
  text = 'EMPTY_TEXT',
  link,
  alt,
}: {
  text: string;
  link: string;
  alt: string;
}) => {
  return (
    <div className='flex items-center'>
      <p className='pr-2'>{text}</p>
      <img src={link} className='h-10 w-10' alt={alt} />
    </div>
  );
};

const Skills = () => {
  return (
    <>
      <div className='max-w-[940px]'>
        <div className='flex flex-col justify-center gap-4'>
          <Card>
            <CardHeader>{/* Tech I've used */}</CardHeader>
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
          </Card>
        </div>
      </div>
    </>
  );
};
export default Skills;
