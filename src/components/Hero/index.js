/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import { email } from '@config';
import { NAV_DELAY, LOADER_DELAY } from '@lib/constants';
import { StyledHeroSection, StyledBigTitle, StyledMediumTitle } from './styles';

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), NAV_DELAY);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Welcome, I&apos;m</h1>;
  const two = <StyledBigTitle>Tarek Hammami</StyledBigTitle>;
  // eslint-disable-next-line jsx-a11y/accessible-emoji
  const three = <StyledMediumTitle slate>and.. I bring ideas to life. 🚀</StyledMediumTitle>;
  const four = (
    // eslint-disable-next-line jsx-a11y/accessible-emoji
    <p>
      I&apos;m a passionate and dedicated student developer who transforms ideas into reality
      through coding. I&apos;m a self-taught and polyglot programmer, always eager to compete with
      others and contribute to OSS. My goal is to use my skills to help people solve problems and
      make their lives easier. 💻🙌🏼
      {/* I am a passionate, dedicated, enthusiastic and polyglot student developer, self-learner, and
      coding addict. I like to compete with programmers, contribute to OSS, and help people solve
      problems using code. */}
    </p>
  );
  const five = (
    <a href="#contact" className="email-link">
      Connect with me
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={LOADER_DELAY}>
              <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </StyledHeroSection>
  );
};

export default Hero;
