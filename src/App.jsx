import { Header } from "./components/Header"
import { StyledContainer, StyledButtonsDiv, StyledButton } from "./global-styles/appStyle.jsx"


function App() {

  return (
    <StyledContainer>
      <Header />
      <StyledButtonsDiv>
        <StyledButton>Projetos</StyledButton>
        <StyledButton>Skills</StyledButton>
        <StyledButton>Links</StyledButton>
      </StyledButtonsDiv>
    </StyledContainer>
  )
}

export default App