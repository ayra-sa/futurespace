import React from 'react'
import Layout from '../components/Layout'
import Data from '../components/sections/about/Data'
import HeroAbout from '../components/sections/about/Hero'
import Join from '../components/sections/about/Join'
import Leadership from '../components/sections/about/Leadership'
import Subscribe from '../components/sections/about/Subscribe'
import Plans from '../components/sections/Plans'

const About = () => {
  return (
    <Layout>
      <HeroAbout/>
      <Data/>
      <Plans/>
      <Leadership/>
      <Join/>
      <Subscribe/>
    </Layout>
  )
}

export default About