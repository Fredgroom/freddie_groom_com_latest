import ContentCard from '@/components/ContentCard';
import FigmaSVG from '@/svg/FigmaSVG';
import MongoDBSVG from '@/svg/MongoDBSVG';
import NodeSVG from '@/svg/NodeSVG';
import PostgresSVG from '@/svg/PostgresSVG';
import ReactSVG from '@/svg/ReactSVG';
import TSSVG from '@/svg/TSSVG';

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
            gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
            alignItems: 'center',
            margin: '1em 0',
            gap: '16px',
          }}
        >
          <ReactSVG />
          <FigmaSVG />
          <TSSVG />
          <NodeSVG />
          <PostgresSVG />
          <MongoDBSVG />
        </div>
        <p>
          A passionate frontend developer, I specialise in creating responsive,
          data-driven web apps using React and TypeScript.
        </p>

        <p>
          I champion projects from inception to completion, going the extra mile
          to meet client expectations.
        </p>

        <p>
          I prioritise efficient software development processes, teaching
          colleagues UX/UI design and Figma, which enhances design quality,
          foster s collaboration, and expedites client feedback.
        </p>
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
