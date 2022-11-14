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
  const three = <StyledMediumTitle slate>I turn ideas into real-world apps.</StyledMediumTitle>;
  const four = (
    <p>
      I am a passionate, dedicated, enthusiastic and polyglot student developer, self-learner, and
      coding addict. I like to compete with programmers, contribute to OSS, and help people solve
      problems using code.
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
