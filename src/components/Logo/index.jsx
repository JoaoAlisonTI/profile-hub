import { FaConnectdevelop } from "react-icons/fa6"
import { LogoDiv, TextLogo } from "./style.jsx"

export const Logo = () => {
  return (
    <LogoDiv>
      <FaConnectdevelop size={24} />
      <TextLogo>Profile.hub</TextLogo>
    </LogoDiv>
  )
}