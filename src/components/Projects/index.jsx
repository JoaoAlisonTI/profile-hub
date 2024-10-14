import { FaLaptopCode, FaExternalLinkAlt, FaGithub } from "react-icons/fa"
import { StyledProjecstCotainer, StyledProjectCotainer, StyledProjectContent, StyledDivIcon, StyledDivLinks } from "./style.jsx"

export const Projects = () => {
  return (
    <StyledProjecstCotainer>
      <StyledProjectCotainer>
        <StyledDivIcon>
          <FaLaptopCode size={32}/>
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
            <FaExternalLinkAlt size={16} />
          </a>
          <a>
            <FaGithub size={16} />
          </a>
        </StyledDivLinks>
      </StyledProjectCotainer>
      <StyledProjectCotainer>
        <StyledDivIcon>
          <FaLaptopCode size={32}/>
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
            <FaExternalLinkAlt size={16}/>
          </a>
          <a>
            <FaGithub size={16} />
          </a>
        </StyledDivLinks>
      </StyledProjectCotainer>
    </StyledProjecstCotainer>
  )
}