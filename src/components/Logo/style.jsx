import { styled } from 'styled-components';

export const LogoDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 4px;
  
  .icon-logo{
    color: var(--primary-color);
  }
`;

export const TextLogo = styled.h3`
  font-size: var(--font-size-subtitle);
  font-weight: 700;
  
  span{
    color: var(--primary-color);
  }
`;