import React, { FC } from 'react'

interface LabelProps {
    text: string
}

const Label: FC<LabelProps> = ({text}) => {
  return (
    <p className='text-label font-bold mb-6 uppercase'>{text}</p>
  )
}

export default Label