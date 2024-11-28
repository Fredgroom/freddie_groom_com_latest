import Download from '../Download';
import Github from '../Github';
import LinkedIn from '../LinkedIn';
import { P } from '../Typography';

const Footer = () => {
  return (
    <footer className='flex pt-11 px-8 py-4 justify-between'>
      <div>
        <P>Fredgroom@gmail.com</P>
        <P>&copy; {new Date().getFullYear()} freddiegroom.com</P>
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
