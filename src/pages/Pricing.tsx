import React from 'react'
import Layout from '../components/Layout'
import HeroPricing from '../components/sections/pricing/HeroPricing'
import Price from '../components/sections/pricing/Price'
import Faq from '../components/sections/pricing/Faq'
import Contact from '../components/sections/pricing/Contact'
import Subscribe from '../components/sections/Subscribe'



const Pricing = () => {
  return (
    <Layout>
      <HeroPricing/>
      <Price/>
      <Faq/>
      <Contact/>
      <Subscribe/>
    </Layout>
  )
}

export default Pricing