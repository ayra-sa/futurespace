import React, { FC } from 'react'
import Section from '../../Section'
import Container from '../../Container'
import Label from '../../Label'
import { heroContactData } from '../../../data/data'


const HeroContact: FC = () => {
  return (
    <Section>
        <Container>
            <div className="pt-11 lg:pt-24 text-center w-full lg:w-3/5 mx-auto">
                <Label text={heroContactData.label} />
                <h1>{heroContactData.title}</h1>
                <p>{heroContactData.description}</p>
            </div>
        </Container>
    </Section>
  )
}

export default HeroContact