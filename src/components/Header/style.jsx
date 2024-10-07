import { styled } from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  padding: 16px 16px;
`;

export const StyledHeaderTop = styled.div`
  width: 100%;
`;

export const StyledHeaderContent = styled.div`
  width: 100%;
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  
  img {
    border: 1px solid var(--primary-color);
    padding: 4px;
    border-radius: 100%;
    height: 124px;
  }
`;

export const StyledTextContent = styled.div`
  h1 {
    font-size: var(--font-size-title);
  }
  
  p {
    font-size: var(--font-size-paragraph);
    color: var(--secondary-color);
  }
`;

export const StyledHeaderBottom = styled.div`
  width: 100%;
  margin-top: 24px;
  
  span {
    color: var(--primary-color);
    text-decoration: none;
  }
  
  p {
    color: var(--secondary-color);
    font-size: var(--font-size-paragraph);
  }
  
  div {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`