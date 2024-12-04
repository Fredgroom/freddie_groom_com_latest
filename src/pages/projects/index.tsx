import { Card } from '@/components/ui/card';
import Link from 'next/link';

const Projects = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Card>
        <h1>Projects</h1>
      </Card>
      <Card>
        <h2>Ideals Charity</h2>
        <p>
          I built the website for{' '}
          <Link href='https://ideals.org.uk' className='link'>
            Ideals
          </Link>
          charity to help improve transparency about the charity and keep
          patrons up to date about the charity in the media. I manage its
          hosting and am still responsible for it&apos;s development.
        </p>
        <p>
          I built it using Next.js, Typescript and styled-components for its
          frontend and Strapi for the backend. The backend is hosted on AWS and
          the frontend is hosted as a static site on aws.
        </p>
        <div className='buttonLink_wrapper'>
          <Link href='https://ideals.org.uk' className='buttonLink'>
            Link to Ideals website
          </Link>
        </div>
      </Card>
      <Card>
        <h2>Sounds Super</h2>
        <p>
          I built the website for{' '}
          <Link href='https://soundssuper.co' className='link'>
            Sounds Super
          </Link>
          to help broaden their online presence and create a funnel for new
          clients.
        </p>
        <p>I built it using vite, react, typescript and tailwindCSS.</p>
        <div className='buttonLink_wrapper'>
          <Link href='https://soundssuper.co' className='buttonLink'>
            Link to Sounds Super Website
          </Link>
        </div>
      </Card>
      <Card>
        <h2>Portfolio website</h2>
        <p>
          I built the website for freddiegroom.com to showcase some of my skills
          as a developer.
        </p>
        <p>I built it using next.js, react, typescript and css.</p>
        <div className='buttonLink_wrapper'>
          <h4>This is the website so you don&apos;t need a link...</h4>
        </div>
      </Card>
    </div>
  );
};
export default Projects;
