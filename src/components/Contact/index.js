/* eslint-disable global-require */
import { useEffect, useRef } from 'react';
// import { email } from '@config';
import { srConfig } from '@config/sr';
import { NumberedHeading } from '@common/styles';
import { StyledContactSection } from './styles';

const Contact = () => {
  const revealContainer = useRef(null);
  useEffect(() => {
    const ScrollReveal = require('scrollreveal');
    const sr = ScrollReveal.default();
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <NumberedHeading overline>What&apos;s Next?</NumberedHeading>

      <h2 className="title">Get In Touch</h2>

      <p>
        {/* Although I&apos;m not currently looking for any new opportunities, .
        Whether you have a question or just want to say hi, I&apos;ll try my best to get back to
        you! */}
        I am constantly seeking for new opportunities;
        <br />
        If you believe I would be a good fit for your team or company,
        <br />
        do not hesitate to contact me right away.
        <br />
        My inbox is always open if I ever can be of any help;
        <br />
        whether it is a question, or just want to say Hi!, I&apos;ll definitely get back.
      </p>

      <a
        className="email-link"
        href="mailto:tarekhammamix01@gmail.com?subject=Interested in joining our team?&body=Hi, Tarek. I have an offer for you."
      >
        Hire me
      </a>
    </StyledContactSection>
  );
};

export default Contact;
