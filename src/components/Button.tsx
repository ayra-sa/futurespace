import React from 'react'

const Button = (props: { title: string}) => {
  return (
    <div className='btn text-white bg-primary'>{props.title}</div>
  )
}

const ButtonBorder = () => {
    return (
        <div className='btn text-primary border border-primary'>Book a tour</div>
    )
  }

export {Button, ButtonBorder}