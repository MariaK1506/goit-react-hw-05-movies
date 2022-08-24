import { HiArrowLeft } from 'react-icons/hi';
import PropTypes from 'prop-types';
import { StyledLink } from 'components/BackLink/BackLink.styled';

export default function BackLink({ to, children }) {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
}

BackLink.propTypes = {
  to: PropTypes.any.isRequired,
  children: PropTypes.node.isRequired,
};
