import ContentCard from '@/components/ContentCard';
import ReactSVG from '@/svg/ReactSVG';

const About = () => {
  return (
    <>
      <ContentCard title>
        <h1>About</h1>
      </ContentCard>
      <ContentCard>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 100px',
            alignItems: 'center',
          }}
        >
          <div>
            <p>
              An experienced user-focused developer building responsive
              data-driven web applications with React and TypeScript equally
              comfortable refactoring existing projects or building products
              from scratch.
            </p>
            <p>
              I am equally comfortable working independently or within teams.
            </p>
            <p>
              I consistently 'go the extra mile' to meet project deadlines when
              requirements need to be extended
            </p>
          </div>
          <ReactSVG />
        </div>
        <p>
          I have a keen appreciation for UX/UI design, demonstrated through my
          initiative in teaching colleagues Figma to improve software design
          processes. My diverse background, including coaching and studying
          osteopathy, enhances my problem-solving and interpersonal skills,
          proving invaluable for delivering features, managing and mentoring
          colleagues and interacting with clients. In my free time, I explore
          new technologies and build projects for charity.
        </p>
        <p>
          I relocated from London to Canberra in 2023 and focussed the time
          applying for permanent residency expanding my back-end skill set, to
          deliver full-stack apps, through online courses and I started a
          part-time bachelor&apos;s degree to broaden my understanding of
          computer science.
        </p>
        <p>References are available on request.</p>
      </ContentCard>
    </>
  );
};

export default About;
