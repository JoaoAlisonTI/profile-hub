import { styled } from 'styled-components';

export const StyledProjecstCotainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const StyledProjectCotainer = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  background-color: var(--text-color);
  color: var(--bg-color);
  border-radius: 8px;
  border: 1px solid var(--secondary-color);
`

export const StyledDivIcon = styled.div`
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--secondary-color);
  border-radius: 8px;
`

export const StyledProjectContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 16px;
  
  div {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  
  span {
    background-color: var(--primary-color);
    border-radius: 20px;
    text-align: center;
    font-size: var(--font-size-subparagraph);
    padding: 4px 8px;
  }
`

export const StyledDivLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`