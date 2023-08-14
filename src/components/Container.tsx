import React, { FC, ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const Container: FC<Props> = ({children}) => {
  return (
    <div className='container mx-auto px-5 md:px-0'>{children}</div>
  )
}

export default Container