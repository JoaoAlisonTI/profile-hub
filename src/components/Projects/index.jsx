import { FaGlobe, FaExternalLinkAlt, FaGithub } from "react-icons/fa"
import { StyledProjecstCotainer, StyledProjectCotainer, StyledProjectContent, StyledDivIcon, StyledDivLinks } from "./style.jsx"

export const Projects = () => {
  return (
    <StyledProjecstCotainer>
      <StyledProjectCotainer>
        <StyledDivIcon>
          <img src="/images/projetos-logo.webp" alt="Imagem de tecnologia com efeitos no tom esmeralda" />
        </StyledDivIcon>
        <StyledProjectContent>
          <h3>Nome do projeto</h3>
          <div>
            <span>Js</span>
            <span>React</span>
            <span>Tailwind</span>
          </div>
        </StyledProjectContent>
        <StyledDivLinks>
          <a>
            <FaGlobe size={16} />
          </a>
          <a>
            <FaGithub size={16} />
          </a>
        </StyledDivLinks>
      </StyledProjectCotainer>
    </StyledProjecstCotainer>
  )
}