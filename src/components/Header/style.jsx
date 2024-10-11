import { styled } from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  padding-bottom: 16px;
  
  display: flex;
  flex-direction: column;
  text-align: center;
  
  p {
    font-size: var(--font-size-paragraph);
    color: var(--text-color);
  }
`;

export const StyledHeaderTop = styled.div`
  width: 100%;
`;

export const StyledHeaderContent = styled.div`
  width: 100%;
  margin-top: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  img {
    padding: 4px;
    border-radius: 100%;
    width: 148px;
  }
`;

export const StyledTextContent = styled.div`
  h1 {
    font-size: var(--font-size-title);
  }
  
  p {
    font-weight: 700;
  }
  
`;

export const StyledHeaderBottom = styled.div`
  width: 100%;
  margin-top: 16px;
  
  span {
    color: var(--primary-color);
    text-decoration: none;
  }
  
  
  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
`