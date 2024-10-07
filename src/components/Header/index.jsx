import { Logo } from "../Logo"
import { LinkHeader } from "./LinkHeader"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { StyledHeader, StyledHeaderTop, StyledHeaderContent, StyledTextContent, StyledHeaderBottom } from "./style.jsx"

export const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderTop>
        <Logo />
      </StyledHeaderTop>
      
      <StyledHeaderContent>
        <img src="https://github.com/JoaoAlisonTI.png" />
        <StyledTextContent>
          <h1>Desenvolvedor Web Front-End</h1>
          <p>Transformando ideias em experiências digitais</p>
        </StyledTextContent>
      </StyledHeaderContent>
      
      <StyledHeaderBottom>
        <p>Desenvolvedor Web Front-End especializado em <span>JavaScript</span> e <span>React.js</span>, com experiência em criar interfaces responsivas e acessíveis utilizando <span>CSS</span>, <span>Tailwind CSS</span> e <span>StyledComponents</span>.</p>
        <div>
          <LinkHeader url="https://github.com/JoaoAlisonTI">
            <FaGithub size={20} />
          </LinkHeader>
          <LinkHeader url="https://www.linkedin.com/in/jo%C3%A3o-alison-de-sousa-martins">
            <FaLinkedin size={20} />
          </LinkHeader>
          <LinkHeader url="https://www.instagram.com/joao_alison_23/">
            <FaInstagram size={20} />
          </LinkHeader>
        </div>
      </StyledHeaderBottom>
    </StyledHeader>
  )
}