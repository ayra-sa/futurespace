import React from 'react'
import Container from '../../Container'
import { dataTeam } from '../../../data/data'

const Leadership = () => {
  return (
    <section className="text-center">
      <Container>
        <div>
          <p className="text-primary font-bold uppercase">
          Our Leadership team
          </p>
          <h1 className="py-6">
          Meet the great team behind Futurspace
          </h1>
          <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit sapien vestibulum quam massa viverra blandit sit <br /> auctor vestibulum semper viverra aliquet sit.
          </p>
        </div>
        <div className="card box flex gap-9 justify-between">
          <div>
            <img src="" alt="" />
            <h2></h2>
            <p></p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Leadership