import { ComponentProps } from "react";

interface IconProps extends ComponentProps<'img'> {}

function Icon(props: IconProps) {
  return (
    <img {...props} className="h-4 mr-2" />
  )
}

export default Icon