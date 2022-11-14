/* eslint-disable global-require */
import { useEffect, useRef } from 'react';
import { NumberedHeading } from '@common/styles';
// import Image from 'next/image';
import { skills } from '@config';
import { srConfig } from '@config/sr';
import { StyledAboutSection, StyledText, StyledPic } from './styles';

const About = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    const ScrollReveal = require('scrollreveal');
    const sr = ScrollReveal.default();
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <NumberedHeading>About Me</NumberedHeading>
      <div className="inner">
        <StyledText>
          <div>
            {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
            <p>Hello there, world! 👋</p>
            <br />
            <p>My name is Tarek and I am a Software Developer based in Tunis, Tunisia.</p>
            <br />
            <p>
              I am an independent, well-organized person, and a problem solver with a keen eye for
              small details. My goal is to always build scalable, performant, and optimized
              solutions.
            </p>
            <br />
            <p>
              I&apos;m interested in the full software developement spectrum; including backend and
              microservices architecture, desktop/web/mobile frontends, IT automation and very
              recently ML. I like to work on innovative, reliable, and visually appealing projects
              with like-minded people and for users all over the world.
            </p>
            <br />
            {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
            <p>I&apos;m a big fan of 🎶.</p>
            <p>My lifelong ambition is to be inventive and help advance human life.</p>
            <br />
            <p>Here are a few technologies with which I&apos;ve been working lately:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <img width={200} height={200} src="/avatar.png" alt="Avatar" className="img" />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
