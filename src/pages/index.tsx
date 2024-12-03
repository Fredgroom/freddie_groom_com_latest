import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <>
      <div className='py-24 mb-48'>
        <h1 className='text-8xl break-words mb-8 text-center'>
          Hi, I'm Freddie
        </h1>
        <h2 className='text-4xl break-words m-0 text-center'>
          I turn designs into products
        </h2>
        <div className='flex justify-center my-8'>
          <a href='mailto:fredgroom@gmail.com?subject=Inquiry&body=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services%20as%20a%20frontend%20developer...'>
            <Button variant='outline'>Send me an email</Button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
