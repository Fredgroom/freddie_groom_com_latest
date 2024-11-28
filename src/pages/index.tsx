import ContentCard from '@/components/ContentCard';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <>
      <h1 className='text-9xl'>Hi, I'm Freddie a Frontend Developer</h1>
      <h1>I Turn Designs into Functional, Accessible Products</h1>
      {/* <Button>This is a test</Button>
        <Button variant='default'>This is a test</Button>
        <Button variant='default'>This is a test</Button> */}
      <Button variant='destructive'>This is a test</Button>
      <Button variant='destructive'>Destructive</Button>
      <Button variant='destructive'>This is a test</Button>
      {/* <Button variant='ghost'>This is a test</Button>
        <Button variant='link'>This is a test</Button>
        <Button variant='outline'>This is a test</Button>
        <Button variant='secondary'>This is a test</Button> */}
    </>
  );
};

export default Home;
