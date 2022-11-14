import PropTypes from 'prop-types';
import { email } from '@config';
import { Side } from '@components';
import { StyledLinkWrapper } from './styles';

const Email = ({ isHome }) => (
  <Side isHome={isHome} orientation="right">
    <StyledLinkWrapper>
      <a href="mailto:tarekhammamix01@gmail.com?subject=Interested in joining our team?&body=Hi, Tarek. I have an offer for you.">
        {email}
      </a>
    </StyledLinkWrapper>
  </Side>
);

Email.propTypes = {
  isHome: PropTypes.bool,
};

export default Email;
