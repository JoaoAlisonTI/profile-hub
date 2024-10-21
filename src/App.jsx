import { Header } from "./components/Header"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
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
        {/*<Projects />*/}
        <Skills />
      </StyledSection>
    </StyledContainer>
  )
}

export default App