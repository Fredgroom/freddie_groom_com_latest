import ContentCard from '@/components/ContentCard';
import styles from './home.module.css';

const Home = () => {
  return (
    <>
      <ContentCard title>
        <h1 className={styles.heading}>Freddie Groom</h1>
        <h2>Software Developer</h2>
      </ContentCard>
    </>
  );
};

export default Home;
