import { HiArrowLeft } from 'react-icons/hi';
import { StyledLink } from 'components/BackLink/BackLink.styled';

export default function BackLink({ to, children }) {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
}
