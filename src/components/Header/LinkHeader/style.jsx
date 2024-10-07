import { styled } from 'styled-components';

export const StyledLinkHeader = styled.a`
  margin-top: 16px;
  padding: 8px;
  border: 0.5px solid var(--secondary-color);
  border-radius: 100%;
  color: var(--secondary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover {
    cursor: pointer;
    border-color: var(--primary-color);
    color: var(--primary-color);
  }
`