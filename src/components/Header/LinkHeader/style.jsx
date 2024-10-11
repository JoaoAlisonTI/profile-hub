import { styled } from 'styled-components';

export const StyledLinkHeader = styled.a`
  margin-top: 16px;
  padding: 8px;
  background-color: var(--tertiary-color);
  border: 1px solid var(--secondary-color);
  border-radius: 100%;
  color: var(--bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  &:hover {
    border-color: var(--primary-color);
  }
`