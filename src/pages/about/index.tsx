import ContentCard from '@/components/ContentCard';
import FigmaSVG from '@/svg/FigmaSVG';
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
            gridTemplateColumns: '64px auto',
            alignItems: 'center',
            margin: '1em 0',
            gap: '16px',
          }}
        >
          <ReactSVG />
          <p>
            A passionate frontend developer, I specialise in creating
            responsive, data-driven web apps using React and TypeScript.
          </p>
        </div>

        <p>
          I champion projects from inception to completion, going the extra mile
          to meet client expectations.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '64px auto',
            alignItems: 'center',
            margin: '1em 0',
            gap: '16px',
          }}
        >
          <FigmaSVG />
          <p>
            I prioritise efficient software development processes, teaching
            colleagues UX/UI design and Figma, which enhances design quality,
            foster s collaboration, and expedites client feedback.
          </p>
        </div>
        <p>
          I enthusiastically support, manage, and mentor colleagues, bringing
          extensive experience in direct client interactions.
        </p>
        <p>References are available on request.</p>
      </ContentCard>
    </>
  );
};

export default About;
