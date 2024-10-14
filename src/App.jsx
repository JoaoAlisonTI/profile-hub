import { Header } from "./components/Header"
import { Projects } from "./components/Projects"
import { StyledContainer, StyledButtonsDiv, StyledButton, StyledSection } from "./global-styles/appStyle.jsx"


function App() {

  return (
    <StyledContainer>
      <Header />
      <StyledButtonsDiv>
        <StyledButton>Projetos</StyledButton>
        <StyledButton>Skills</StyledButton>
        <StyledButton>Links</StyledButton>
      </StyledButtonsDiv>
      <StyledSection>
        <Projects />
      </StyledSection>
    </StyledContainer>
  )
}

export default App