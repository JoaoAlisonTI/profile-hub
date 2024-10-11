import { styled } from 'styled-components';

export const StyledContainer = styled.main`
  width: 100%;
  padding: 16px 16px 0px 16px;
`

export const StyledButtonsDiv = styled.div`
  padding: 2px;
  width: auto;
  background-color: var(--text-color);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid var(--secondary-color);
`

export const StyledButton = styled.button`
  text-decoration: none;
  background: none;
  border: none;
  outline: none;
  
  padding: 8px 16px;
  width: 100px;
  border-radius: 20px;
  text-align: center;
  color: var(--bg-color);
  font-size: var(--font-size-paragraph);
  flex: 1;
  
  &:focus{
    background-color: var(--primary-color);
  }
`