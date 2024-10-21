import { styled } from 'styled-components';

export const StyledSkillsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
`

export const StyledSkill = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    border-radius: 16px;
    border: 1px solid var(--secondary-color);
    &:hover {
      border-color: var(--primary-color);
    }
  }
`