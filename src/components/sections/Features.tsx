import React from 'react'
import Illus from "../../assets/images/features.svg";
import { CardFeatures } from '../Card';

const Features = () => {
  return (
    <section className="box flex justify-between items-center gap-x-2 flex-row-reverse">
      <div className="text-left text-black max-w-[600px]">
        <h1>A complete coworking space solution for your business and team</h1>
        <div className='mt-12 gap-y-6 flex flex-col'>
          <CardFeatures title='Discover a busines location' desc='Our mission is to provide unparalleled value that increases over time. Our space is more than a shared office.'
          className="border border-primary"/>
          <CardFeatures title='The most efficient workspace solutions'/>
          <CardFeatures title='Design your productive space'/>
        </div>
        
      </div>
      <div>
        <img src={Illus} alt="Illustration Features" />
      </div>
    </section>
  )
}

export default Features