import { StyledLinkHeader } from "./style.jsx"

export const LinkHeader = ({ url, children }) => {
  return (
    <StyledLinkHeader href={url}>
      {children}
    </StyledLinkHeader>
  )
}