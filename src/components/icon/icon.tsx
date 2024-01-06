import React from 'react'

interface iconProps {
  src: string;
}

const Icon: React.FC<iconProps> = ({ src }) => {
  return (
    <img alt="Icon" className="h-4 mr-2" src={src} />
  )
}

export default Icon