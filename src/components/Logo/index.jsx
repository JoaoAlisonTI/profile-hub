import { FaConnectdevelop } from "react-icons/fa6"
import { LogoDiv, TextLogo } from "./style.jsx"

export const Logo = () => {
  return (
    <LogoDiv>
      <FaConnectdevelop className="icon-logo" size={24} />
      <TextLogo>Profile<span>.</span>hub</TextLogo>
    </LogoDiv>
  )
}