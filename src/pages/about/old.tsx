import ContentCard from '@/components/ContentCard';
import ReactSVG from '@/svg/ReactSVG';

const About = () => {
  return (
    <>
      <ContentCard title>
        <h1>About</h1>
      </ContentCard>
      <ContentCard invertedColor>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 100px',
            alignItems: 'center',
          }}
        >
          <p>
            I am a user-focused developer with over 4 years of professional
            experience building responsive, data-driven web applications using
            React and TypeScript. I build responsive data-driven web interfaces
            with reusable components and am comfortable refactoring existing
            projects or building from the ground up and reliably go the extra
            mile to meet deadlines when requirements need to be extended, both
            independently and within multidisciplinary teams.
          </p>
          <ReactSVG />
        </div>
      </ContentCard>
      <ContentCard invertedColor>
        <p>
          I have a keen appreciation for UX/UI design, demonstrated through my
          initiative in teaching colleagues Figma to improve software design
          processes. My diverse background, including coaching and studying
          osteopathy, enhances my problem-solving and interpersonal skills,
          proving invaluable for delivering features, managing and mentoring
          colleagues and interacting with clients. In my free time, I explore
          new technologies and build projects for charity.
        </p>
      </ContentCard>
      <ContentCard invertedColor>
        <p>
          I relocated from London to Canberra in 2023 and focussed the time
          applying for permanent residency expanding my back-end skill set, to
          deliver full-stack apps, through online courses and I started a
          part-time bachelor&apos;s degree to broaden my understanding of
          computer science.
        </p>
      </ContentCard>
      <ContentCard invertedColor>
        <p>References are available on request.</p>
      </ContentCard>
    </>
  );
};

export default About;
